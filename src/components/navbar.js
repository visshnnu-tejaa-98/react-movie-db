import { Link } from 'react-router-dom';
const NavBar = () => {
	return (
		<div className='my-3'>
			<div className='container d-flex justify-content-between'>
				<div>
					<h2 className='brand d-flex align-items-center'>
						<i className='fas fa-video mr-2'></i> Movie Hub
					</h2>
				</div>
				<div className='d-flex align-items-center'>
					<Link to='/' className='mx-3 navHome'>
						Home
					</Link>
					<Link to='/add' className='mx-3 btn addBtn '>
						Add Movie
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
