import React, { useState } from 'react'
import { Container, } from 'react-bootstrap'
import './Contact.css'

export default function Contact() {
	const [userData, setUserData] = useState({
		fullname: "",
		email: "",
		subject: "",
		message: "",
	});

	let name, value;
	const postUserData = (event) => {
		name = event.target.name;
		value = event.target.value;
		setUserData({ ...userData, [name]: value });
	};


	const submitData = async (event) => {
		event.preventDefault();
		const {fullname,email,subject,message} = userData

		if(fullname && email && subject && message){

		const res = fetch(
			'https://perfect-enterprises-default-rtdb.firebaseio.com/contactUsData.json',{
				method:"POST",
				headers:{
					"Content-Type":"application/json",
				},
				body: JSON.stringify({fullname,email,subject,message}),
			}
			);

			if(res){
				setUserData({
					fullname: "",
					email: "",
					subject: "",
					message: "",
				});
				alert("Data is stored")
			}else{
				alert("Please fill the data")
			}
		}
		else{
			alert("Please fill the data")
		}
	}

	return (
		<div style={{}}>
			<section class="ftco-section">
				<Container className="con-container">

					<div class="row justify-content-center">
						<div class="col-md-12">
							<div class="wrapper">
								<div class="row no-gutters mb-5">
									<div class="col-md-7">
										<div class="contact-wrap w-100 p-md-5 p-4">
											<h3 class="mb-4">Contact Us</h3>
											<div id="form-message-warning" class="mb-4"></div>
											<div id="form-message-success" class="mb-4">
												Your message was sent, thank you!
				      		</div>
											<form method="POST" id="contactForm" name="contactForm" class="contactForm">
												<div class="row">
													<div class="col-md-6">
														<div class="form-group">
															<label class="label" for="name">Full Name</label>
															<input type="text"
																className="form-control"
																name="fullname"
																id="name"
																placeholder="Name"
																value={userData.fullname}
																onChange={postUserData}
																required />
														</div>
													</div>
													<div class="col-md-6">
														<div className="form-group">
															<label class="label" for="email">Email Address</label>
															<input type="email"
																className="form-control"
																name="email"
																id="email"
																placeholder="Email"
																value={userData.email}
																onChange={postUserData}
																required

															/>
														</div>
													</div>
													<div class="col-md-12">
														<div class="form-group">
															<label class="label" for="subject">Subject</label>
															<input type="text"
																class="form-control"
																name="subject" id="subject"
																placeholder="Subject"
																value={userData.subject}
																onChange={postUserData}
																required />
														</div>
													</div>

													
													 <div class="col-md-12">
														<div class="form-group">
															<label class="label" for="#">Message</label>
															<textarea name="message"
																class="form-control"
																id="message" cols="30"
																rows="4"
																placeholder="Message"
																value={userData.message}
																onChange={postUserData}
																required>

															</textarea>
														</div>
													</div> 
													<div class="col-md-12">
														<div class="form-group">
															<input type="submit" onClick={submitData} value="Send Message" class="btn btn-primary" />
															<div class="submitting"></div>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div class="col-md-5 d-flex align-items-stretch">
										<iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.3749234231514!2d74.37764851489737!3d18.825990187231785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a9d25cd50c486b7!2sPerfect%20Enterprises%2C%20Shirur!5e0!3m2!1sen!2sin!4v1634206048838!5m2!1sen!2sin" style={{ width: '100%', height: "100%", border: '0', allowFullscreen: "", loading: "lazy" }}>
										</iframe>			          </div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-3">
									<div class="dbox w-100 text-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="fas fa-map-marker-alt"></span>
										</div>
										<div class="text">
											<p><span>Address</span></p><p>  Mahalaxmi Trade Center, Joshiwadi Rd, Shirur, Maharashtra 412210</p>
										</div>
									</div>
								</div>
								<div class="col-md-3">
									<div class="dbox w-100 text-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span className="fa fa-phone"></span>
										</div>
										<div class="text">
											<p><span>Phone</span> </p><p>  <a href="tel://8830354434">+91 8830 354 434</a></p>
										</div>
									</div>
								</div>
								<div class="col-md-3">
									<div class="dbox w-100 text-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="fa fa-paper-plane"></span>
										</div>
										<div class="text">
											<p><span>Email</span></p><p>  <a href="mailto:nareshbhagat@gmail.com">nareshbhagat@gmail.com</a></p>
										</div>
									</div>
								</div>
								<div class="col-md-3">
									<div class="dbox w-100 text-center">
										<div class="icon d-flex align-items-center justify-content-center">
											<span class="fa fa-globe"></span>
										</div>
										<div class="text">
											<p><span>Website</span></p><p> <a href="/">perfect-enterprises-shirur.in</a></p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* </div> */}
				</Container>
			</section>
		</div>
	)
}
