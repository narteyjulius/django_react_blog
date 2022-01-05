import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import '../assest/Contact.css';

const Contact = ({ setAlert }) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		subject: '',
		// subject: '',
		message: ''
	});
	const { name, email, subject, message } = formData;
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
				'https://djanoreact.herokuapp.com/contact/api/',
				{
					name,
					email,
					subject,
					message
				},
				config
			)
			.then((res) => {
				setAlert('Message Sent', 'success');
				console.log(setAlert);
				setLoading(false);
				window.scrollTo(0, 0);
			})
			.catch((err) => {
				setAlert('Error with Sending Message', 'error');
				setLoading(false);
				window.scrollTo(0, 0);
			});
	};
	return (
		<div className="container">
			<div className="row justify-content-center ">
				<div className="col-md-6 col-md-offset-3">
					<div className="well well-sm">
						<Helmet>
							<title>Luk's Blog - Contact</title>
							<meta name="description" content="Contact us" />
						</Helmet>

						<form className="form-horizontal" onSubmit={(e) => onSubmit(e)}>
							<fieldset className="my">
								<legend className=" col-md-12 text-center">Contact us</legend>

								<div className="form-group">
									<label className="col-md-3 control-label" htmlFor="name">
										Name
									</label>
									<div className="col-md-9">
										<input
											id="name"
											name="name"
											type="text"
											placeholder="Full Name"
											className="form-control"
											onChange={(e) => onChange(e)}
											value={name}
											required
										/>
									</div>
								</div>

								<div className="form-group">
									<label className="col-md-3 control-label" htmlFor="email">
										Your E-mail
									</label>
									<div className="col-md-9">
										<input
											id="email"
											name="email"
											type="email"
											placeholder="example@gmail.com"
											className="form-control"
											onChange={(e) => onChange(e)}
											value={email}
											required
										/>
									</div>
								</div>

								<div className="form-group">
									<label className="col-md-3 control-label" htmlFor="email">
										Subject
									</label>
									<div className="col-md-9">
										<input
											id="email"
											name="subject"
											type="text"
											placeholder="Subject"
											className="form-control"
											onChange={(e) => onChange(e)}
											value={subject}
											required
										/>
									</div>
								</div>

								<div className="form-group">
									<label className="col-md-3 control-label" htmlFor="message">
										Your message
									</label>
									<div className="col-md-9">
										<textarea
											className="form-control"
											id="message"
											name="message"
											placeholder="Please enter your message here..."
											rows="5"
											onChange={(e) => onChange(e)}
											value={message}
											required
										/>
									</div>
								</div>

								<div className="form-group  ">
									<div className="col-md-12 text-center">
										{loading ? (
											// <button className=" btn btn-primary btn-lg btn-block">
											<Loader type="Oval" color="#424242" height={50} width={50} />
										) : (
											// </button>
											<button htmltype="submit" className=" btn btn-primary btn-lg btn-block">
												Submit
											</button>
										)}
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

Contact.propTypes = {
	setAlert: PropTypes.func.isRequired
};

// export default Contact;
export default connect(null, { setAlert })(Contact);
