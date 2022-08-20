import { useState } from "react";

function App() {
	const [counter, setValue] = useState(0);
	const onClick = () => setValue((prev) => prev+1);
	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button onClick={onClick}>Click</button>
		</div>
	)
}

export default App;
