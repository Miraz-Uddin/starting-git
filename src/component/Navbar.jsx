import { NavLink } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='container mt-2'>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<NavLink className='navbar-brand'>Navbar</NavLink>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse  '
						id='navbarSupportedContent'
					>
						<ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
							<NavLink className='nav-item' to='/giash'>
								<span className='nav-link ' aria-current='page'>
									Giash
								</span>
							</NavLink>
							<NavLink className='nav-item' to='/ruhi'>
								<span className='nav-link'>Ruhi</span>
							</NavLink>
							<NavLink className='nav-item' to='/mustakim'>
								<span className='nav-link'>Mustakim</span>
							</NavLink>
							<NavLink className='nav-item' to='/rabbi'>
								<span className='nav-link'>Rabbi</span>
							</NavLink>
							<NavLink className='nav-item' to='/kawsar'>
								<span className='nav-link'>
									Kawsar
								</span>
							</NavLink>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
