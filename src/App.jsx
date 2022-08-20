import { useState } from "react";

function App() {
	const [counter, setValue] = useState(0);
	const onClick = () => setValue((prev) => prev+1);
	return (
		<div>
			<h2>Counter: {counter}</h2>
			<button onClick={onClick}>클릭하세요</button>
		</div>
	)
}

export default App;
