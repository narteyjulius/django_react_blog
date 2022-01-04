import React, { useState, useEffect } from 'react';
import Search from '../components/blog/search/Search';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Skeleton from '../skeleton/Skeleton';
import Skeletond from '../skeleton/Skeletond';
import Skeletonu from '../skeleton/Skeletonu';

const Blog = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const [ blogs, setBlogs ] = useState([]);
	const [ isPending, setIsPending ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			const fetchData = async () => {
				try {
					const response = await axios.get('https://djanoreact.herokuapp/blog/api/');
					console.log(response);
					setBlogs(response.data);
					setIsPending(false);
				} catch (error) {
					console.error(error);
				}
			};
			fetchData();
		}, 5000);
	}, []);

	return (
		<div>
			{/* <Skeleton />
			<Skeletond />
			<Skeletonu /> */}
			<div classNameName="my" className="container-fluid gedf-wrapper mt-10">
				<div className="row">
					<Helmet>
						<title>Luk's Blog - Blog List</title>
						<meta name="description" content="Blog List Page" />
					</Helmet>
					<div className="col-md-3">
						<div className="card">
							<div className="card-body">
								<div className="h5">@LeeCross</div>
								<div className="h7 text-muted">Fullname : Miracles Lee Cross</div>
								<div className="h7">
									Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,
									etc.
								</div>
							</div>
							<ul className="list-group list-group-flush">
								<li className="list-group-item">
									<div className="h6 text-muted">Followers</div>
									<div className="h5">5.2342</div>
								</li>
								<li className="list-group-item">
									<div className="h6 text-muted">Following</div>
									<div className="h5">6758</div>
								</li>
								<li className="list-group-item">Vestibulum at eros</li>
							</ul>
						</div>
					</div>
					{/* col-lg-6 */}

					{isPending && (
						<div className=" col-md-6  ">
							Loading...<Skeletond />
						</div>
					)}

					<div className="col-md-6 ">
						{blogs &&
							blogs.map((blog) => (
								<div className="card gedf-card" key={blog.id}>
									<div className="card-header">
										<div className="d-flex justify-content-between align-items-center">
											<div className="d-flex justify-content-between align-items-center">
												<div className="mr-2">
													{/* <img className="rounded-circle" width="45" src="https://picsum.photos/50/50" alt=""> */}
												</div>
												<div className="ml-2">
													<div className="h5 m-0">@LeeCross</div>
													<div className="h7 text-muted">Miracles Lee Cross</div>
												</div>
											</div>
											<div>
												<div className="dropdown">
													<button
														className="btn btn-link dropdown-toggle"
														type="button"
														id="gedf-drop1"
														data-toggle="dropdown"
														aria-haspopup="true"
														aria-expanded="false"
													>
														<i className="fa fa-ellipsis-h" />
													</button>
													<div
														className="dropdown-menu dropdown-menu-right"
														aria-labelledby="gedf-drop1"
													>
														<div className="h6 dropdown-header">Configuration</div>
														<Link className="dropdown-item" to="/">
															Save
														</Link>
														<Link className="dropdown-item" to="/">
															Hide
														</Link>
														<Link className="dropdown-item" to="/">
															Report
														</Link>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="card-body">
										<div className="text-muted h7 mb-2">
											<i className="fa fa-clock-o" /> {blog.month} {blog.day}
										</div>
										<Link className="card-link" to={`/blog/${blog.slug}`}>
											<h5 className="card-title">{blog.title}</h5>
										</Link>

										<p className="card-text">{blog.excerpt}</p>
										{/* {isPending && <div className="col-lg-6 col-12">Loading...</div>} */}

										<div>
											<span className="badge badge-primary">JavaScript</span>
											<span className="badge badge-primary">Android</span>
											<span className="badge badge-primary">PHP</span>
											<span className="badge badge-primary">Node.js</span>
											<span className="badge badge-primary">Ruby</span>
											<span className="badge badge-primary">Paython</span>
										</div>
									</div>
									<div className="card-footer">
										<Link to="/" className="card-link">
											<i className="fa fa-gittip" /> Like
										</Link>
										<Link to="/" className="card-link">
											<i className="fa fa-comment" /> Comment
										</Link>
										<Link to="/" className="card-link">
											<i className="fa fa-mail-forward" /> Share
										</Link>
									</div>
								</div>
							))}
					</div>

					<div className="col-md-3">
						<div className="widget-sidebar">
							<h2 className="title-widget-sidebar"> RECENT POST</h2>
							{blogs.map((blog) => (
								<div className="content-widget-sidebar">
									<ul>
										<div>
											<li className="recent-post">
												<div className="post-img">
													{/* <img src="https://lh3.googleusercontent.com/-ndZJOGgvYQ4/WM1ZI8dH86I/AAAAAAAADeo/l67ZqZnRUO8QXIQi38bEXuxqHfVX0TV2gCJoC/w424-h318-n-rw/thumbnail8.jpg" className="img-responsive"> */}
												</div>
												<Link to={`/blog/${blog.slug}`}>
													<h5>{blog.title}</h5>
												</Link>

												<p>
													<small>
														<i className="fa fa-calendar" data-original-title="" title="" />
														{blog.month} {blog.day}
													</small>
												</p>
											</li>

											{/* <br /> */}
											<hr />
										</div>
									</ul>
								</div>
							))}
						</div>
					</div>
					<div className="col-md-3">
						{/* <div className="card gedf-card">
							<div className="card-body">
								<h5 className="card-title">Card title</h5>
								<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
								<p className="card-text">
									Some quick example text to build on the card title and make up the bulk of the
									card's content.
								</p>
								<Link to="/" className="card-link">
									Card link
								</Link>
								<Link to="/" className="card-link">
									Another link
								</Link>
							</div>
						</div> */}
						{/* // <div className="card gedf-card">
						// 	<div className="card-body">
						// 		<h5 className="card-title">Card title</h5>
						// 		<h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
						// 		<p className="card-text">
						// 			Some quick example text to build on the card title and make up the bulk of the
						// 			card's content.
						// 		</p>
						// 		<Link to="/" className="card-link">
						// 			Card link
						// 		</Link>
						// 		<Link to="/" className="card-link">
						// 			Another link
						// 		</Link>
						// 	</div>
						// </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
