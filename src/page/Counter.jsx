import { useState } from "react";

function Counter() {
	const [counter, setValue] = useState(0);
	const onClick = () => setValue((prev) => prev+1);
	return (
		<div>
			<h1>Counter: {counter}</h1>
			<button onClick={onClick}>클릭하세요</button>
		</div>
	)
}

export default Counter;