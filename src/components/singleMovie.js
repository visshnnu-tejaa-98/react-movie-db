const SingleMovie = ({ movie }) => {
	return (
		<div className='d-flex justify-content-center'>
			<div className='card mb-3 card-width '>
				<div className='row no-gutters'>
					<div className='col-md-4'>
						<img src={movie.imgURL} alt='...' />
					</div>
					<div className='col-md-8'>
						<div className='card-body '>
							<h5 className='card-title'>{movie.name}</h5>
							<p className='card-text'>Price: ₹ {movie.price}</p>
							<a href={movie.trailerURL} className='btn addBtn'>
								<i className='fas fa-video mr-2'></i>
								Watch Trailer
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleMovie;
