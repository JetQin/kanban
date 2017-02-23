/**
 * Created by jet on 1/12/17.
 */

import React ,{ PropTypes, Component } from 'react';
import ReactDOM from 'react-dom';
import update from 'react-addons-update';
import KanbanBoard from './KanbanBoard';
import {throttle} from "./util";
import 'babel-polyfill';
import 'whatwg-fetch';


const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
    'Content-Type': 'application/json',
    Authorization: 'any-string-you-like'
};

class KanbanBoardContainer extends Component{

    constructor(){
        super();
        this.state = {cards:[]};
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.updateStatus = throttle(this.updateCardStatus.bind(this));
        this.updatePosition = throttle(this.updateCardPosition.bind(this),500);
        this.persistCardDrag = this.persistCardDrag.bind(this);
    };

    componentDidMount(){
        // fetch(API_URL+'/cards',{headers:API_HEADERS})
        fetch('../../public/todo.json',{headers:API_HEADERS})
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({cards:responseData})
            }).catch((error) =>{
                console.log('Error fetch and parsing data',error);
            });
    }

    addTask(cardId,taskName){
        // Find the index of the card
        let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);

        // Create a new task with the given name and a temporary ID
        let newTask = {id:Date.now(), name:taskName, done:false};

        // Create a new object and push the new task to the array of tasks
        let nextState = update(this.state.cards, {[cardIndex]: {
            tasks: {$push: [newTask] }
        }});

        // set the component state to the mutated object
        this.setState({cards:nextState});

        // Call the API to add the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify(newTask)
        }).then((response) => {
            if(response.ok){
                return response.json()
            } else {
                throw new Error("Server response wasn't OK")
            }
        }).then((responseData) => {
        // When the server returns the definitive ID
        // used for the new Task on the server, update it on React
                newTask.id=responseData.id
                this.setState({cards:nextState});
        });
    }

    deleteTask(cardId,taskId,taskIndex){
        //Find the index of the card
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);

        //Create a new object without the task
        let nextState = update(this.state.cards,{[cardIndex]:{tasks:{$splice:[[taskIndex,1]]}}})
        this.setState({cards:nextState});
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`,{
            method:'delete',
            headers:API_HEADERS
        })
    }

    toggleTask(cardId,taskId,taskIndex){
        //Find the index of the card
        let cardIndex = this.state.cards.findIndex((card) => card.id == cardId);

        //save a reference to the task's 'done' value
        let newDoneValue;

        //using the $apply command, you will change the done value to its opposite
        let nextState = update(this.state.cards,{
                                    [cardIndex]:
                                        {tasks:
                                            {[taskIndex]:{
                                            done:{$apply:(done) =>{
                                                newDoneValue = !done
                                                return newDoneValue;
                                            }}
                                        }}}});
        // set the component state to the mutated object
        this.setState({cards:nextState});

        // Call the API to toggle the task on the server
        fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
            method: 'put',
            headers: API_HEADERS,
            body: JSON.stringify({done:newDoneValue})
        });
    }

    updateCardStatus(cardId,listId){
        //Find the index of the card
        let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);

        //Get the current card
        let card = this.state.cards[cardIndex];

        //Only proceed if hovering over a different list
        if(card.status !== listId){
            //Set the component state to the mutated object
            this.setState(update(this.state,{
                cards:{
                    [cardIndex]:{ set:{ $set:listId }}
                }
            }));
        }
    }

    updateCardPosition(cardId,afterId){

        //Only proceed if hovering over a different card
        if(cardId !== afterId){

            //Find the index of the card
            let cardIndex = this.state.cards.findIndex((card)=>card.id == cardId);

            //Get the current card
            let card = this.state.cards[cardIndex];

            //Find the index of the card the user is hovering over
            let afterIndex = this.state.cards.findIndex((card)=>card.id == afterId)

            // Use splice to remove the card and reinsert it a the new index
            this.setState(update(this.state,{
                cards:{
                    $splice:[
                        [cardIndex,1],
                        [afterIndex,0,card]
                    ]
                }
            }));
        }
    }

    persistCardDrag (cardId,status){

        let cardIndex = this.state.cards.findIndex((card)=>card.id == cadrId);

        let card = this.state.cards[cardIndex];

        fetch(`${API_URL}/cards/${cardId}`,{
            method:'put',
            headers:API_HEADERS,
            body:JSON.stringify({status:card.status,row_order_position:cardIndex})
        }).then((response) => {
            if(!response.ok){
                throw new Error("Server response wasn't OK")
            }
        }).catch((error)=>{
            console.error("Fetch error:",error);
            this.setState(update(this.state,{
                cards:{
                    [cardIndex]:{status:{ $set: status }}
                }
            }))
        })
        ;
    }

    render(){
        return <KanbanBoard cards={this.state.cards}
                            taskCallbacks={{toggle:this.toggleTask,delete:this.deleteTask,add:this.addTask}}
                            cardCallbacks={{
                                updateStatus:this.updateStatus,
                                updatePosition:this.updatePosition,
                                persistCardDrag:this.persistCardDrag
                            }}
                />
    }
}

export default KanbanBoardContainer;