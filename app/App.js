/**
 * Created by jet on 12/27/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import KanbanBoard from './kanban/KanbanBoard';
import ContactsApp from "./contacts/ContactsApp";
import ContactsAppContainer from "./contacts/ContactsAppContainer";
import KanbanBoardContainer from "./kanban/KanbanBoardContainer";
import AnimatedShoppingList from "./shoppingcart/AnimatedShoppingList";
import style from "../css/app.css";

let cardsList = [{
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    color: '#BD8D31',
    status: "in-progress",
    tasks: []
}, {
    id: 2,
    title: "Start write some code",
    description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
    color: '#3A7E28',
    status: "todo",
    tasks: [
        {
            id: 1,
            name: "ContactList Example",
            done: true
        },
        {
            id: 2,
            name: "Kanban Example",
            done: false
        },
        {
            id: 3,
            name: "My own experiments",
            done: false
        }
    ]
},
    {
        id: 3,
        title: "This is a new card with a very long",
        title1: "This is a new card with a very,very long title,thus having more than 80 characters",
        description: "Code along with the samples in the book. The complete source can be found at [github](https://github.com/pro-react)",
        color: '#15A0FF',
        status: "done",
        tasks: [
        ]
    }
];


let contacts = [
    { name: "Cassio Zen", email: "cassiozen@gmail.com" },
    { name: "Dan Abramov", email: "gaearon@somewhere.com" },
    { name: "Pete Hunt", email: "floydophone@somewhere.com" },
    { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
    { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
    { name: "Sebastian Markbage", email: "sebmarkbage@here.com" }
];

// ReactDOM.render(<KanbanBoard cards={cardsList}/>, document.getElementById("root"));
// ReactDOM.render(<ContactsApp contacts={contacts}/>, document.getElementById("root"));
// ReactDOM.render(<KanbanBoardContainer />, document.getElementById("root"));
// ReactDOM.render(<ContactsAppContainer />, document.getElementById("root"));
ReactDOM.render(<AnimatedShoppingList />, document.getElementById("root"));
