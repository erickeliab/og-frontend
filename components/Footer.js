import headerStyles from '../styles/Header.module.css'

const Footer = () => {
  return (
    <>
   
   <footer class="ftco-footer">
      <div class="container">
        <div class="row mb-5">
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2 logo"><a href="/">The Laserfiche Master</a></h2>
              <p>This is where Laserfiche ECM is taught to the final chapter</p>
              <ul class="ftco-footer-social list-unstyled mt-2">
                <li class="ftco-animate"><a href="#"><span class="fa fa-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="fa fa-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="fa fa-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Links</h2>
              <ul class="list-unstyled">
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>About</a></li>
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Contact</a></li>
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Laserfiche</a></li>
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Videos</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Categories</h2>
              <ul class="list-unstyled">
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Form</a></li>
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Ripository</a></li>
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Mobile</a></li>
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Workflow</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md">
             <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Games</h2>
              <ul class="list-unstyled">
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Fifa</a></li>
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>GTA</a></li>
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Assassin's Creed</a></li>
                <li><a href="#"><span class="fa fa-chevron-right mr-2"></span>Speed Force</a></li>
              </ul>
            </div>
          </div>
          <div class="col-sm-12 col-md">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Wanna get in touch?</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><span class="icon fa fa-map marker"></span><span class="text">Mikocheni B, Nyati ST, Dar es Salaam</span></li>
	                <li><a href="#"><span class="icon fa fa-phone"></span><span class="text">+255 767 000 000</span></a></li>
	                <li><a href="#"><span class="icon fa fa-paper-plane pr-4"></span><span class="text">info@og.com</span></a></li>
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

export default Footer
