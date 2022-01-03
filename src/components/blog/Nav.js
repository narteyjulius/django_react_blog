import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../Alert';

const Nav = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
				<Link className="navbar-brand" to="/">
					Luk's Blog
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-link active" to="/">
							Home <span className="sr-only">(current)</span>
						</Link>
						<Link className="nav-link" to="/blog">
							Blog
						</Link>
						<Link className="nav-link" to="/contact">
							Contact
						</Link>
						{/* <Link className="nav-link disabled">Disabled</Link> */}
					</div>
				</div>
			</nav>
			<Alert />
			{/* <nav className="navbar fixed-top navbar-light bg-white">
			
				<Link to="#" className="navbar-brand">
					Bootsbook
				</Link>
			
				<form className="form-inline">
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							aria-label="Recipient's username"
							aria-describedby="button-addon2"
						/>
						<div className="input-group-append">
							<button className="btn btn-outline-primary" type="button" id="button-addon2">
								<i className="fa fa-search" />
							</button>
						</div>
					</div>
				</form>
			</nav> */}
		</div>
	);
};

export default Nav;
