import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
	return (
		<div>
			<h2>{title}</h2>
			<img src={coverImg} alt={title} />
			<p>{summary}</p>
			<ul>
				{genres.map((g) => (
					<li key={g}>{g}</li>
				))}
			</ul>
		</div>
	);
}

Movie.propTypes = {
	coverImg: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
