/**
 * Created by jet on 12/27/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';


class CheckList extends React.Component{
    render(){
        let tasks = this.props.tasks.map((task)=>{
          return  <li className="checklist_task">
                        <input key={task.id} type="checkbox" defaultChecked={task.done}/>
                        {task.name}
                        <a href="#" className="checklist_task_remove"/>
                 </li>
        });

        console.log(tasks);

        return (
            <div className="checklist">
                    <ul>{tasks}</ul>
            </div>
            );
    }
}

export default CheckList;

