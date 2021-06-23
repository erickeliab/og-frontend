import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { useRouter } from "next/router";

const Nav = () => {
	const path = useRouter().route

	console.log( path);
  return (
  
    <>
	<div class="wrap">
			<div class="container">
				<div class="row">
					<div class="col-md-6 d-flex align-items-center">
						<p class="mb-0 phone pl-md-2">
							<a href="#" class="mr-2"><span class="fa fa-phone mr-1"></span>+255 759 401 073</a> 
							<a href="#"><span class="fa fa-paper-plane mr-1"></span> gilbertobadia830@gmail.com</a>
						</p>
					</div>
					<div class="col-md-6 d-flex justify-content-md-end">
						<div class="social-media">
			    		<p class="mb-0 d-flex">
			    			<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-facebook"><i class="sr-only">Facebook</i></span></a>
			    			<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-twitter"><i class="sr-only">Twitter</i></span></a>
			    			<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-instagram"><i class="sr-only">Instagram</i></span></a>
			    			<a href="#" class="d-flex align-items-center justify-content-center"><span class="fa fa-linkedin"><i class="sr-only">Dribbble</i></span></a>
			    		</p>
		        </div>
					</div>
				</div>
			</div>
		</div>
    
	  <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	      <a class="navbar-brand" href="/">Eng OG</a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>

	      <div class="collapse navbar-collapse" id="ftco-nav">
	        <ul class="navbar-nav ml-auto">
			<li class={"nav-item " + getActive(path,'/')}  ><a href="/" class="nav-link">Home</a></li>
			<li class={"nav-item " + getActive(path,'/laserfiche')}><a href="/laserfiche" class="nav-link">Laserfiche</a></li>
			<li class={"nav-item " + getActive(path,'/gaming')}><a href="/gaming" class="nav-link">Gaming</a></li>
			<li class={"nav-item " + getActive(path,'/videos')}><a href="/videos" class="nav-link">Videos</a></li>
			<li class={"nav-item " + getActive(path,'/about')}><a href="/about" class="nav-link">About</a></li>
			<li class={"nav-item " + getActive(path,'/contact')}><a href="/contact" class="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    
    </>
  )
}

const getActive = function (path , pathname){
	
	if ( path == pathname) {
		return 'active';
	}else {
		return '';
	}
}
export default Nav
