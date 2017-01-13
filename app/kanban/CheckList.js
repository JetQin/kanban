/**
 * Created by jet on 12/27/16.
 */
import React,{Component,PropTypes} from 'react';
import ReactDOM from 'react-dom';



class CheckList extends Component{

    constructor(){
        super();
        this.checkInputKeyPress = this.checkInputKeyPress.bind(this);
    }

    checkInputKeyPress(evt){

        if(evt.key === 'Enter'){
            this.props.taskCallbacks.add(this.props.cardId,evt.target.value);
            evt.target.value = '';
        }
    }

    render(){
        let tasks = this.props.tasks.map((task,taskIndex)=>{
          return  <li className="checklist_task" key={task.id}>
                        <input key={task.id} type="checkbox" defaultChecked={task.done}
                            onChange={this.props.taskCallbacks.toggle.bind(null,this.props.cardId,task.id,taskIndex)}/>
                        {task.name}
              <a href="#" className="checklist_task_remove" onClick={this.props.taskCallbacks.delete.bind(null,this.props.cardId,task.id,taskIndex)}>Remove</a>
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
    id: PropTypes.number,
    tasks: PropTypes.arrayOf(Object),
    taskCallbacks: PropTypes.object
};

export default CheckList;

