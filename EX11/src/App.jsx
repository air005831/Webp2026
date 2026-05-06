import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

import Hello from "./cgu_hello";
import MultiButtom from "./cgu_multiButtom";
import HelloCGU from "./cgu_hello";

function App() {
	const [count, setCount] = React.useState(0);
	const [text, setText] = React.useState("hello CUG?");
	const changeText = (event) => {
		console.log(event.target);
		setText(text + "被點了!");
		setCount(count + 1);
	};

	return (
		<div className="App">
			<HelloCGU text={text} count={count} />
			<MultiButtom onButtomClick={changeText} buttomCount={10} />
		</div>
	);
}

export default App;
