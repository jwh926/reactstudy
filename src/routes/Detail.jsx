import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState([]);
	const getMovie = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
			)
		).json();
		setMovie(json.data.movie);
	};
	useEffect(() => {
		getMovie();
	}, []);
	// console.log(movie);
	return (
		<div>
			<h1>{movie.title}</h1>
			<img src={movie.large_cover_image} />
			<p><b>Year: </b>{movie.year}</p>
			<p><b>Genres</b></p>
			<ul>
				{movie.genres.map((g) => (
					<li>{g}</li>
				))}
			</ul>
		</div>
	);
}

export default Detail;
