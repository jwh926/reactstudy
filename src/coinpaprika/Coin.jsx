import { useEffect, useState } from "react";

function Coin() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers")
		.then((res) => res.json())
		.then((json) => {
			setCoins(json);
			setLoading(false);
		});
	}, []);
	
	const [value, setValue] = useState(1);
	const [coin, setCoin] = useState([]);

	function onValueChange(event) {
		setValue(event.target.value);
		console.log(coin);
	}

	function onCoinChange(event) {
		setCoin(coins[event.target.selectedIndex-1]);
		console.log(coin);
	}

	function onSubmit(event) {
		event.preventDefault();
		const result = document.getElementById("result");
		result.innerText =
			Math.round((value * coin.quotes.USD.price) * 100) / 100;
	}

	return (
		<div>
			<h1>코인 {loading ? "" : `(${coins.length} total)`}</h1>
			{loading ? null : (
				<input
					type="text"
					onChange={onValueChange}
					placeholder="coins to USD"
					value={value}
				/>
			)}
			<form onSubmit={onSubmit}>
				{loading ? (
					<strong>로딩중</strong>
				) : (
					<select onChange={onCoinChange}>
						<option>
							select coin
						</option>
						{coins.map((coin) => (
							<option>
								{coin.name} ({coin.symbol}):{" "}
								{coin.quotes.USD.price} USD
							</option>
						))}
					</select>
				)}
				{loading ? null : <input type="submit" value="conversion" />}
			</form>
			<p id="result"></p>
		</div>
	);
}

export default Coin;
