import { useState, useContext } from 'react';
import { MovieContext } from './movieContext';
import { useHistory } from 'react-router-dom';
const AddMovie = () => {
	const history = useHistory();
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [img, setImg] = useState('');
	const [trailer, setTrailer] = useState('');
	const [id, setId] = useState('');
	const [movies, setMovies] = useContext(MovieContext);
	const updateName = (e) => {
		setName(e.target.value);
	};
	const updatePrice = (e) => {
		setPrice(e.target.value);
	};
	const updateimg = (e) => {
		setImg(e.target.value);
	};
	const updatetrailer = (e) => {
		setTrailer(e.target.value);
	};
	const updateId = (e) => {
		setId(e.target.value);
	};
	const addItem = (e) => {
		e.preventDefault();
		setMovies((prevMovies) => [
			...prevMovies,
			{ name, price, imgURL: img, trailerURL: trailer, id: +id },
		]);
		history.push('/');
	};
	return (
		<div className='addMovie'>
			<h1 className='container'>Add Movie Here</h1>
			<form className='container' onSubmit={addItem}>
				<div className='row'>
					<div className='col col-6'>
						<div className='form-group'>
							<label htmlFor='name'>Movie Name: </label>
							<input
								type='text'
								className='form-control'
								id='name'
								value={name}
								onChange={updateName}
								requried={name.toString()}
							/>
						</div>
					</div>
					<div className='col col-6'>
						<div className='form-group'>
							<label htmlFor='price'>Price:</label>
							<input
								type='text'
								className='form-control'
								id='price'
								value={price}
								onChange={updatePrice}
								requried={price.toString()}
							/>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col col-6'>
						<div className='form-group'>
							<label htmlFor='img'>Img URL:</label>
							<input
								type='text'
								className='form-control'
								id='img'
								value={img}
								onChange={updateimg}
							/>
						</div>
					</div>
					<div className='col col-6'>
						<div className='form-group'>
							<label htmlFor='trailer'>Trailer Link:</label>
							<input
								type='text'
								className='form-control'
								id='trailer'
								value={trailer}
								onChange={updatetrailer}
							/>
						</div>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='id'>Id:</label>
					<input type='number' className='form-control' id='id' value={id} onChange={updateId} />
				</div>
				<button type='submit' className='btn addBtn'>
					Add Movie
				</button>
			</form>
		</div>
	);
};

export default AddMovie;
