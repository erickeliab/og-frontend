import axios from 'axios'
import React from 'react'
import { backend } from '../config'
import headerStyles from '../styles/Header.module.css'

let ContactData;

class Footer extends React.Component {
  state = {
		contact:{},
    slideshow:{},
    about:{},
    email: '',
    categories: [],
    games: [],
    SuccessMessage: ''
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

    axios.get(`${backend}/categories`)
		.then(res => {
		  const categories = res.data;
		  this.setState({ categories });
		})

    axios.get(`${backend}/posts?Type=Gaming`)
		.then(res => {
		  const games = res.data;
		  this.setState({ games });
		})
	}

  
	onSubmit = (e) => {
		e.preventDefault();
		const { email } = this.state
	
		  const newSubscriber = {

			Email: email,
      Active: true
	
		  }
	

		//   send to the backend
    axios.get(`${backend}/subscribers`)
    .then(res => {
      console.log(res.data);
      let IsSubscibed = false
      res.data.forEach(subscriber => {
        if (subscriber.Email == email) {
          IsSubscibed = true
        }
      });

      if (!IsSubscibed) {

        axios.post(`${backend}/subscribers`, newSubscriber)
        .then(response => {

			  this.setState({ SuccessMessage: 'Thank you for Subscribing ! '})
     
		    })
      }else {
        this.setState({ SuccessMessage: 'Opps, it seems you already subscribed ! '})
      }

    })
    
		
   
			

	  };
	
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });


  getContact = () => (this.state.contact)

  render(){
    const { email, categories, games } = this.state


    const DisplayCat = categories.map(cat => ( <li><a href={`search?search=${cat.Name}`}><span class="fa fa-chevron-right mr-2"></span>{cat.Name}</a></li>))

    const DisplayGames = games.map(game => ( <li><a href={`search?search=${game.Title}`}><span class="fa fa-chevron-right mr-2"></span>{game.Title}</a></li>))

    ContactData = this.state.contact;
  return (
    <>
   
   <footer class="ftco-footer">
      <div class="container">
        <div class="row mb-5">
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2 logo"><a href="/">{this.state.slideshow.AppName}</a></h2>
              <p>{this.state.about.AboutSite}{email}</p>
              <form  onSubmit={this.onSubmit} class="search-form">
                <div class="form-group">
                  <input type="email" class="form-contro mt-1 mb-1 p-1" placeholder="Your mail"  name="email" onChange={this.onChange} value={email} required/>
                  <button type="submit" className="btn btn-md btn-success">Subscribe </button>
                  <p>{this.state.SuccessMessage}</p>
                </div>
              </form>
              <ul class="ftco-footer-social list-unstyled mt-2">
                <li class="ftco-animate"><a href={`${this.state.contact.twitter_Link}`}><span class="fa fa-twitter"></span></a></li>
                <li class="ftco-animate"><a href={`${this.state.contact.facebook_Link}`}><span class="fa fa-facebook"></span></a></li>
                <li class="ftco-animate"><a href={`${this.state.contact.instagram_Link}`}><span class="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Links</h2>
              <ul class="list-unstyled">
                <li><a href="/about"><span class="fa fa-chevron-right mr-2"></span>About</a></li>
                <li><a href="/contact"><span class="fa fa-chevron-right mr-2"></span>Contact</a></li>
                <li><a href="/laserfiche"><span class="fa fa-chevron-right mr-2"></span>Laserfiche</a></li>
                <li><a href="/videos"><span class="fa fa-chevron-right mr-2"></span>Videos</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Categories</h2>
              <ul class="list-unstyled">
                {DisplayCat}
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Games</h2>
              <ul class="list-unstyled">
              {DisplayGames}
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Wanna get in touch?</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon fa fa-map marker"></span><span class="text">{this.state.contact.address}</span></li>
	                <li><a href="#"><span class="icon fa fa-phone"></span><span class="text">{this.state.contact.phone}</span></a></li>
	                <li><a href="#"><span class="icon fa fa-paper-plane pr-4"></span><span class="text">{this.state.contact.email}</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid px-0 py-5 bg-black">
      	<div class="container">
      		<div class="row">
	          <div class="col-md-12">
		
	            <p class="mb-0" style={{color: "rgba(255,255,255,.5)"}}>
              Copyright &copy;<script>{new Date().getFullYear()}</script><a href="https://og.com" target="_blank">og.com</a>
              </p>
	          </div>
	        </div>
      	</div>
      </div>
    </footer>
    </>
  )
  }
}

export default Footer


export const ContactDat = ContactData;