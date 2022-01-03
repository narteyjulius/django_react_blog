import React from 'react';
import './Search.css';

const Search = () => {
	return (
		<div>
			{/* <div class="container">
				<div class="row">
					<div class="col-md-6 col-md-offset-3">
						<h1>Expandable Search Form</h1>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4 col-md-offset-3">
						<form action="" class="search-form">
							<div class="form-group has-feedback">
								<label for="search" class="sr-only">
									Search
								</label>
								<input
									type="text"
									class="form-control"
									name="search"
									id="search"
									placeholder="search"
								/>
								<span class="glyphicon glyphicon-search form-control-feedback" />
							</div>
						</form>
					</div>
				</div>
			</div> */}
			<div class="container h-100">
				<div class="d-flex justify-content-center h-100">
					<div class="searchbar">
						<input class="search_input" type="text" name="" placeholder="Search..." />
						<a href="#" class="search_icon">
							<i class="fas fa-search" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
