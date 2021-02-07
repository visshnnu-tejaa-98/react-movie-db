import { MovieContext } from './movieContext';
import { useContext } from 'react';
const MovieCount = () => {
	const [movies, setMovies] = useContext(MovieContext);
	return (
		<div className='mb-4'>
			<h5 className='text-center '>
				Total No.of Movies: <span className='span'> {movies.length}</span>
			</h5>
		</div>
	);
};

export default MovieCount;
