import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import axios from 'axios';
import '../assest/Bd.css';
import SkeletonDetail from '../skeleton/SkeletonDetail';
import { setAlert } from '../actions/alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Alert from '../components/Alert';

const BlogDetail = ({ setAlert }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	// useEffect(() => {
	// 	window.
	// }, []);
	const { id } = useParams();
	const [ blog, setBlogs ] = useState([]);
	const [ comments, setComments ] = useState(null);
	const [ isPending, setIsPending ] = useState(true);

	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		body: ''
	});

	const { name, email, body } = formData;
	const [ loading, setLoading ] = useState(false);
	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const onSubmit = (e) => {
		e.preventDefault();
		const config = {
			headers: {
				'Content-Type': 'application/json'
			}
		};
		setLoading(true);
		axios
			.post(
				'http://localhost:8000/comment/api/create/' + id,
				{
					name,
					email,
					body
					// message
				},
				config
			)
			.then((res) => {
				setAlert('Message Sent and will be aprove by the admin. This is done to aviod Spam', 'success');
				console.log(setAlert);
				setLoading(false);
				// window.scrollTo(0, 0);
			})
			.catch((err) => {
				setAlert('Error with Sending Message', 'error');
				setLoading(false);
				// window.scrollTo(0, 0);
			});
	};

	useEffect(
		() => {
			setTimeout(() => {
				const fetchData = async () => {
					try {
						const response = await axios.get('http://localhost:8000/comment/api/' + id);
						console.log(response);
						setComments(response.data);
						setIsPending(false);
					} catch (error) {
						alert('Error Loading Comments. Try Again..!!');
						console.error(error);
					}
				};
				fetchData();
			}, 5000);
		},
		[ id ]
	);

	useEffect(
		() => {
			setTimeout(() => {
				const fetchData = async () => {
					try {
						const response = await axios.get('http://localhost:8000/blog/api/' + id);
						console.log(response);
						setBlogs(response.data);
						setIsPending(false);
					} catch (error) {
						console.error(error);
					}
				};
				fetchData();
			}, 5000);
		},
		[ id ]
	);
	const createBlog = () => {
		return { __html: blog.content };
	};
	return (
		<div>
			<div id="main-content" className=" my blog-page">
				<div className="container">
					<div className="row clearfix">
						<div className="col-lg-8 col-md-12 left-box">
							<div className="card single_post">
								<div className="body">
									<div className="img-post">
										{isPending && (
											<div>
												Loading...<SkeletonDetail />
											</div>
										)}
										<img className="d-block img-fluid" src={blog.thumbnail} alt="" />
									</div>
									<h3>
										<Link to="blog-details.html">{blog.title}</Link>
									</h3>
									<p dangerouslySetInnerHTML={createBlog()} />
								</div>
							</div>
							<div className="card">
								<div className="header">
									<h2>Comments </h2>
								</div>
								<div className="body">
									<ul className="comment-reply list-unstyled">
										{comments &&
											comments.map((comment) => (
												<li className="row clearfix" key={comment.id}>
													<div className="icon-box col-md-2 col-4">
														<img
															className="img-fluid img-thumbnail"
															src="https://bootdey.com/img/Content/avatar/avatar7.png"
															alt="Awesome Image"
														/>
													</div>
													<div className="text-box col-md-10 col-8 p-l-0 p-r0">
														<h5 className="m-b-0">{comment.email} </h5>
														<p>{comment.body}</p>
														<ul className="list-inline">
															<li>
																<Link to="javascript:void(0);">{comment.created}</Link>
															</li>
															<li>
																<Link to="javascript:void(0);">Reply</Link>
															</li>
														</ul>
													</div>
												</li>
											))}
									</ul>
								</div>
							</div>
							<div className="card">
								<div className="header">
									<h2>
										<small>
											Leave Link reply Your email address will not be published. All Field are
											Required
										</small>
									</h2>
								</div>
								<div className="body">
									<div className="comment-form">
										<form className="row clearfix" onSubmit={(e) => onSubmit(e)}>
											<div className="col-sm-6">
												<div className="form-group">
													<input
														id="name"
														type="text"
														name="name"
														className="form-control"
														placeholder="Your Name"
														onChange={(e) => onChange(e)}
														value={name}
														required
													/>
												</div>
											</div>
											<div className="col-sm-6">
												<div className="form-group">
													<input
														type="email"
														name="email"
														className="form-control"
														placeholder="Email Address"
														onChange={(e) => onChange(e)}
														value={email}
														required
													/>
												</div>
											</div>
											<div className="col-sm-12">
												<div className="form-group">
													<textarea
														rows="4"
														name="body"
														className="form-control no-resize"
														placeholder="Please type what you want..."
														onChange={(e) => onChange(e)}
														value={body}
														required
													/>
												</div>
												<div className="form-group">
													<Alert />
												</div>

												{loading ? (
													// <button className=" btn btn-primary btn-lg btn-block">
													<Loader
														className="btn btn-block btn-primary"
														type="Oval"
														color="#424242"
														height={50}
														width={50}
													/>
												) : (
													// </button>

													<button type="submit" className="btn btn-block btn-primary">
														SUBMIT
													</button>
												)}
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 right-box">
							<div className="card">
								<div className="body search">
									<div className="input-group m-b-0">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-search" />
											</span>
										</div>
										<input type="text" className="form-control" placeholder="Search..." />
									</div>
								</div>
							</div>
							<div className="card">
								<div className="header">
									<h2>Categories Clouds</h2>
								</div>
								<div className="body widget">
									<ul className="list-unstyled categories-clouds m-b-0">
										<li>
											<Link to="javascript:void(0);">eCommerce</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">Microsoft Technologies</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">Creative UX</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">Wordpress</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">Angular JS</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">Enterprise Mobility</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">Website Design</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">HTML5</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">Infographics</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">Wordpress Development</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className="card">
								<div className="header">
									<h2>Popular Posts</h2>
								</div>
								<div className="body widget popular-post">
									<div className="row">
										<div className="col-lg-12">
											<div className="single_post">
												<p className="m-b-0">Apple Introduces Search Ads Basic</p>
												<span>jun 22, 2018</span>
												<div className="img-post">
													<img
														src="https://via.placeholder.com/280x280/87CEFA/000000"
														alt="Awesome Image"
													/>{' '}
													/
												</div>
											</div>
											<div className="single_post">
												<p className="m-b-0">new rules, more cars, more races</p>
												<span>jun 8, 2018</span>
												<div className="img-post">
													<img
														src="https://via.placeholder.com/280x280/87CEFA/000000"
														alt="Awesome Image"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="card">
								<div className="header">
									<h2>Instagram Post</h2>
								</div>
								<div className="body widget">
									<ul className="list-unstyled instagram-plugin m-b-0">
										<li>
											<Link to="javascript:void(0);">
												<img
													src="https://via.placeholder.com/100x100/87CEFA/000000"
													alt="image description"
												/>
											</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">
												<img
													src="https://via.placeholder.com/100x100/87CEFA/000000"
													alt="image description"
												/>
											</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">
												<img
													src="https://via.placeholder.com/100x100/87CEFA/000000"
													alt="image description"
												/>
											</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">
												<img
													src="https://via.placeholder.com/100x100/87CEFA/000000"
													alt="image description"
												/>
											</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">
												<img
													src="https://via.placeholder.com/100x100/87CEFA/000000"
													alt="image description"
												/>
											</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">
												<img
													src="https://via.placeholder.com/100x100/87CEFA/000000"
													alt="image description"
												/>
											</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">
												<img
													src="https://via.placeholder.com/100x100/87CEFA/000000"
													alt="image description"
												/>
											</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">
												<img
													src="https://via.placeholder.com/100x100/87CEFA/000000"
													alt="image description"
												/>
											</Link>
										</li>
										<li>
											<Link to="javascript:void(0);">
												<img
													src="https://via.placeholder.com/100x100/87CEFA/000000"
													alt="image description"
												/>
											</Link>
										</li>
									</ul>
								</div>
							</div> */}
							{/* <div className="card">
								<div className="header">
									<h2>
										Email Newsletter
										<small>Get our products/news earlier than others, lets get in touch.</small>
									</h2>
								</div>
								<div className="body widget newsletter">
									<div className="input-group">
										<input type="text" className="form-control" placeholder="Enter Email" />
										<div className="input-group-append">
											<span className="input-group-text">
												<i className="icon-paper-plane" />
											</span>
										</div>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

BlogDetail.propTypes = {
	setAlert: PropTypes.func.isRequired
};

export default connect(null, { setAlert })(BlogDetail);
