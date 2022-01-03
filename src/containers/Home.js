import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className=" my container">
			<div class="jumbotron">
				<h1 class="display-4">WelCome To Luk's Blog</h1>
				<p class="lead">This is where we write different blogs to our views and To all in the world.</p>
				<hr class="my-4" />
				<p>
					We know you want to know more and Read more of our blogs in our Web Page... If you want to then
					Click below to View More
				</p>
				<Link class="btn btn-primary btn-lg" to="/blog" role="button">
					Read More
				</Link>
			</div>
		</div>
	);
};

export default Home;
