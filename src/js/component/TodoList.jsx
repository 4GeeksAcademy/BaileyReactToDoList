import React, { useState } from "react";
import Todo from "./Todo";

const TodoList = ({todos, setTodos}) => {
    console.log(todos);
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                //for each todo from state render a todo component/comes from home
                    <Todo 
                    setTodos={setTodos} 
                    todos={todos} 
                    key={todo.id}
                    todo={todo}
                    text={todo.text}/>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

// const NewTodo = () => {
//     const [input, setInput] = useState("");
// 	//array to hold new items
// 	const [todos, setTodos] = useState("[]");
// 	//add into array-concat;delete from array-filter/update in middle use map
	
// 	function addItem() {
// 		if (!input) {
// 			alert("Please enter an item.")
// 			return;
// 		}
// 		const todo = {
// 			// id is for how to sort
// 			id: Math.floor(Math.random() * 1000),
// 			value: newItem//array to hold new items
// 		};
// 		setTodos(oldList => [...oldList, input]); 
// 		setInput("");
// 		console.log(todos)
// 		// didn't print
// 	}
// 	function deleteItem(index) {
// 		const newList = todos.filter((item, i) => i !==index);
// 		setTodos(newList);
// 	}
// 	return {
// 		<>
// 		<div className="containerList">
// 			<InputArea input={input} setInput={setInput} />
// 		</div>
// 		<div className="ulList">
// 			<ul>
// 				{todos.map((todo, index) => (
// 					<todo.id

// 				 />
// 			))}
// 			</ul>
// 		</div>
// 	</>
// 	}

// };

// export default NewTodo;