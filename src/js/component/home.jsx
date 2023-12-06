import React, { useState } from "react";
import Heading from "./Heading";
import Form from "./Form";
import TodoList from "./TodoList";
import Count from "./Count";

const Home = () => {
	const [inputText, setInputText] = useState("");
	const [todos, setTodos] = useState([]);
	return (
		<div className="heading">
			<Heading />
			<Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
			<TodoList setTodos={setTodos} todos={todos} />
			
		</div>
	)
};

export default Home;
