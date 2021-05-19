import React, { useState } from 'react'
import './Todo.css'
import TodoList from './TodoList';

function Todo() {

    const [input,setInput] = useState("");

    const [items,setItems] = useState([]);

    
    const itemEvent = (event) => {
        setInput(event.target.value);
    }

    const listItems = () => {
        setItems((oldItems)=>{
            return [...oldItems,input];
        });
        setInput("");
    };

    const deleteItems = (id) => {
        console.log("deleted");

        setItems((oldItems)=> {
            return oldItems.filter((arrEle,index)=> {
                return index !== id;
            })
        })
    }



    return (
        <div className="main-div">
            
            <div className="centerdiv">
                <br />
                <h1>Todo List</h1>
                <br />
                <input type="text"
                placeholder="Add a Items"
                onChange={itemEvent}
                value={input} 

                 />
                <button onClick={listItems}>+</button>

                <ol>

                    {items.map((itemvalue,index)=> {
                        return <TodoList 
                            text={itemvalue}
                            key={index}
                            id={index}
                            onSelect={deleteItems}
                        />
                    })}

                </ol>


            </div>


        </div>
    )
}

export default Todo
