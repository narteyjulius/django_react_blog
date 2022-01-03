import React from 'react';
// import 'skeleton-screen-css';
// import 'placeholder-loading-css';
import { Link } from 'react-router-dom';

const Skeletond = () => {
	const mystyle = {
		// backgroundColor: 'DodgerBlue'
		// padding: '10px',
		// fontFamily: 'Arial',
		// lines: '5',
		// width: '100%',
		// height: '100%'
	};
	return (
		<div>
			{/* ph-item */}
			<div class="card gedf-card ph-item">
				<div className="card-header">
					<div className="d-flex justify-content-between align-items-center">
						<div className="d-flex justify-content-between align-items-center">
							<div className="mr-2" />
							<div className="ml-2">
								<div class="ph-col-4" />
							</div>
						</div>
					</div>
				</div>
				<div class="ph-col-12">
					<div class="ph-row">
						<div class="ph-col-4" />
						<div class="ph-col-8 empty" />
						<div class="ph-col-12" />
					</div>
					<div class="ph-picture" style={mystyle} />
					<div class="ph-row">
						<div class="ph-col-4" />
						<div class="ph-col-8 empty" />
						<div class="ph-col-12" />
					</div>
				</div>

				<div>
					<div class="ph-row">
						<div class="ph-col-12" />
						<div class="ph-col-2" />
						<div class="ph-col-10 empty" />
						<div class="ph-col-8 big" />
						<div class="ph-col-4 big empty" />
					</div>
				</div>
				<div className="card-footer">
					{/* <Link to="/" className="card-link">
						<i className="fa fa-gittip" /> Like
					</Link>
					<Link to="/" className="card-link">
						<i className="fa fa-comment" /> Comment
					</Link>
					<Link to="/" className="card-link">
						<i className="fa fa-mail-forward" /> Share
					</Link> */}
				</div>
			</div>
		</div>
	);
};

export default Skeletond;
