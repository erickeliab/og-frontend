import axios from 'axios'
import React from 'react'
import Meta from '../components/Meta'
import PageHeader from '../components/PageHeader'
import { backend } from '../config'



class contact extends React.Component {

	state = {
		contact:{},
    	slideshow:{},
    	about:{},
		message:'',
		name:'',
		email:'',
		subject:'',
		sentMessage:''
		}

	componentDidMount(){
		axios.get(`${backend}/contact`)
		.then(res => {
		  const contact = res.data;
		  this.setState({ contact });
		})

    axios.get(`${backend}/slideshow`)
		.then(res => {
		  const slideshow = res.data;
		  this.setState({ slideshow });
		})

    axios.get(`${backend}/about`)
		.then(res => {
		  const about = res.data;
		  this.setState({ about });
		})
	}


	onSubmit = (e) => {
		e.preventDefault();
		const {name,email,message,subject } = this.state
		
		
	
		  const newMessage = {
			Name: name,
			Email: email,
			Subject : subject,
			Message: message,
		  }
		 

		//   send to the backend
	

		
		axios.post(`${backend}/messages`, newMessage)
        .then(response => {
			this.setState({ sentMessage: 'Thank you ! Your Message Is Successfully Sent' })
		})
			
			


		
	  };
	
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });

	render(){

		const { name , email , message , subject , sentMessage } = this.state

	
  return (
    <div>
      <Meta title='OG - Contact' />
      <PageHeader pagename="Contact" heading="Contact Me" />
      <section class="ftco-section bg-light">
      <div class="container">
      <div class="row justify-content-center">
					<div class="col-md-12">
          <div class="wrapper px-md-4">
							<div class="row mb-5">
                
                <div class="col-md-3">
									<div class="dbox w-100 text-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-map-marker"></span>
				        		</div>
				        		<div class="text">
					            <p><span>Address:</span> {this.state.contact.address}</p>
					          </div>
				          </div>
								</div>
               

                <div class="col-md-3">
									<div class="dbox w-100 text-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-phone"></span>
				        		</div>
				        		<div class="text">
					            <p><span>Phone:</span> <a href="tel://1234567920">{this.state.contact.phone}</a></p>
					          </div>
				          </div>
								</div>
								<div class="col-md-3">
									<div class="dbox w-100 text-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-paper-plane"></span>
				        		</div>
				        		<div class="text">
					            <p><span>Email:</span> <a href="mailto:info@yoursite.com">{this.state.contact.email}</a></p>
					          </div>
				          </div>
								</div>
								<div class="col-md-3">
									<div class="dbox w-100 text-center">
				        		<div class="icon d-flex align-items-center justify-content-center">
				        			<span class="fa fa-globe"></span>
				        		</div>
				        		<div class="text">
					            <p><span>Website</span> <a href="#">{this.state.contact.website}</a></p>
					          </div>
				          </div>
								</div>
                </div>

                <div class="row no-gutters">
								<div class="col-md-7">
									<div class="contact-wrap w-100 p-md-5 p-4">
										<h3 class="mb-4">Contact Us</h3>
										<form id="contactForm" onSubmit={this.onSubmit} name="contactForm" class="contactForm">
											<div class="row">
												<div class="col-md-6">
													<div class="form-group">
														<label class="label" for="name">Full Name</label>
														<input type="text" class="form-control" name="name" id="name" placeholder="Name" onChange={this.onChange} value={name} required />
													</div>
												</div>
												<div class="col-md-6"> 
													<div class="form-group">
														<label class="label" for="email">Email Address</label>
														<input type="email" class="form-control" name="email" id="email" placeholder="Email" onChange={this.onChange} value={email} required />
													</div>
												</div>
												<div class="col-md-12">
													<div class="form-group">
														<label class="label" for="subject">Subject</label>
														<input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" onChange={this.onChange} value={subject}  required/>
													</div>
												</div>
												<div class="col-md-12">
													<div class="form-group">
														<label class="label" for="#">Message</label>
														<textarea name="message" class="form-control" id="message" cols="30" rows="4" placeholder="Message" onChange={this.onChange} value={message} required ></textarea>
													</div>
												</div>
												<div class="col-md-12">
													<div class="form-group">
														<input type="submit" value="Send Message" class="btn btn-primary" />
														<div class="submittig">{sentMessage}</div>
														
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
								<div class="col-md-5 order-md-first d-flex align-items-stretch">
									
								</div>
							</div>
                </div>
          </div>
        </div>
        </div>
        </section>
    </div>
  )
	}
}

export default contact
