import { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{
			id: 1,
			imgURL:
				'https://m.media-amazon.com/images/M/MV5BYzExZTk0ZjctOGY2Yy00YmVhLWJiNWYtNDcyYjEzMTJhOWU3XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg',
			name: 'Krack',
			price: 160,
			trailerURL: 'https://www.youtube.com/watch?v=EAvpSWmoPSA',
		},
		{
			id: 2,
			imgURL:
				'https://m.media-amazon.com/images/M/MV5BYzE4MzBhOWYtNTg1OC00NjBkLWEzOGItMDJmMThlNzk4NGFlXkEyXkFqcGdeQXVyNTgxODY5ODI@._V1_.jpg',
			name: 'Alludu Adhurs',
			price: 120,
			trailerURL: 'https://www.youtube.com/watch?v=SaiBDPfLDGc',
		},
	]);
	return (
		<MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
	);
};
