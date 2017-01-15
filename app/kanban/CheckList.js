/**
 * Created by jet on 12/27/16.
 */
import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';



class CheckList extends Component{

    constructor(props){
        super(props);
        this.checkInputKeyPress = this.checkInputKeyPress.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);

    }

    checkInputKeyPress(evt){

        if(evt.key === 'Enter'){
            this.props.taskCallbacks.add(this.props.cardId,evt.target.value);
            evt.target.value = '';
        }
    }

    toggleTask(cardId,taskId,taskIndex){
        this.props.taskCallbacks.toggle(cardId,taskId,taskIndex)
    }

    deleteTask(cardId,taskId,taskIndex){
        this.props.taskCallbacks.delete(cardId,taskId,taskIndex)
    }

    render(){
        let tasks = this.props.tasks.map((task,taskIndex)=>{
          return  <li className="checklist_task" key={task.id}>
                        <input key={task.id} type="checkbox" defaultChecked={task.done} onChange={this.toggleTask.bind(null,this.props.cardId,task.id,taskIndex)}/>
                        {task.name}
                        <a href="#" className="checklist_task_remove" onClick={this.deleteTask.bind(null,this.props.cardId,task.id,taskIndex)}>Remove</a>
                 </li>
        });

        return (
            <div className="checklist">
                    <ul>{tasks}</ul>
                    <input type="text" className="checklist__add_task"
                           placeholder="Type then hit Enter to add a task"
                           onKeyPress={this.checkInputKeyPress}/>
            </div>
            );
    }
}

CheckList.propTypes ={
    cardId: PropTypes.number,
    tasks: PropTypes.arrayOf(Object),
    taskCallbacks: PropTypes.object
};

export default CheckList;

