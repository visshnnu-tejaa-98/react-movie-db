import SingleMovie from './singleMovie';
import MovieCount from './movieCount';
import { MovieContext } from './movieContext';
import { useContext, useEffect } from 'react';
const Home = () => {
	const [movies, setMovies] = useContext(MovieContext);

	return (
		<div className='home container'>
			<MovieCount />
			{movies.map((movie) => (
				<SingleMovie movie={movie} key={movie.id} />
			))}
		</div>
	);
};

export default Home;
