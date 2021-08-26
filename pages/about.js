import axios from 'axios'
import React from 'react'
import Meta from '../components/Meta'
import PageHeader from '../components/PageHeader'
import { backend } from '../config'


class about extends React.Component {

	state = {
		contact:{},
		about:{}
		}

	componentDidMount(){
		axios.get(`${backend}/contact`)
		.then(res => {
		  const contact = res.data;
		  this.setState({ contact });
		})

		axios.get(`${backend}/about`)
		.then(res => {
		  const about = res.data;
		  this.setState({ about });
		})
	}

	render(){
  return (
    <div>
      <Meta title='OG - About' />
      <PageHeader pagename="About" heading="About Me" />

      <section class="ftco-section">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-lg-3 ftco-animatee">
						<div class="staff">
							<div class="img-wrap d-flex align-items-stretch">
								<div class="img align-self-stretch" style={{backgroundImage: 'url(' + `${backend}${this.state.about.CoverPhotoLink}` + ')'}}></div>
							</div>
							<div class="text pt-3 text-center">
								<h3>{this.state.about.FullName}</h3>
								<span class="position mb-2">{this.state.about.Designation}</span>
								<div class="faded">
									<p>{this.state.about.Bio}</p>
									<ul class="ftco-social text-center">
		                <li class="ftco-animate"><a href={`${this.state.contact.facebook_Link}`} class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a></li>
		                <li class="ftco-animate"><a href={`${this.state.contact.twitter_Link}`} class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"><i class="sr-only">Twitter</i></span></a></li>
		                <li class="ftco-animate"><a href={`${this.state.contact.instagram_Link}`} class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a></li>
		                <li class="ftco-animate"><a href={`${this.state.contact.linkedin_Link}`} class="d-flex align-items-center justify-content-center"><span class="fa fa-linkedin"><i class="sr-only">Dribbble</i></span></a></li>

			    			
			    			
			    			
			    	
					  
					  </ul>
	              </div>
							</div>
						</div>
					</div>
					<div class="col-md-6 col-lg-8 ftco-animatee">
						<div class="staff">
						<h3>My Short Story</h3>
						<p>{this.state.about.AboutMe}</p>
						</div>

						<div class="staff">
						<h3>My Vision</h3>
						<p>{this.state.about.Vission}</p>

						</div>

						<div class="staff">
						<h3>My Mission</h3>
						<p>{this.state.about.Mission}</p>
						</div>
					</div>
          </div>
			</div>
		</section>
    </div>

  )
	}
}

export default about
