import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoItems extends Component {
constructor(props){
    super(props);

    this.createTasks = this.createTasks.bind(this);
}

    createTasks(item) {
        return <li onClick = {() => this.delete(item.key)}
                    key={item.key}>{item.text}</li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);
        const customEnterAnimation = {
            from: {opacity: 0, 
                transform: 'translate(30px,7px)', 
                filter: 'blur(10px)'},
            to: {opacity: 1, 
                transform: 'translate(0px)',
                filter: 'blur(0px) drop-shadow(4px 4px 5px black)'} 
        }

        const customLeaveAnimation = {
            from: {opacity: 1, 
                transform: 'translate(0px)',
                filter: 'blur(0px) drop-shadow(4px 4px 5px black)',
                backgroundColor: 'rgba(179, 97, 3, 0.76)'} ,
            to: {opacity: 0, 
                transform: 'translate(30px,-10px)', 
                filter: 'blur(10px)'}
        }

        return (
            <ul className = "theList">
            <FlipMove duration={1000} 
                    easing={'cubic-bezier(0.25, 0.5, 0.75, 1)'}
                    enterAnimation={customEnterAnimation} 
                    leaveAnimation={customLeaveAnimation}>
                {listItems}
            </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;