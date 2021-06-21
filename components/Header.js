import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <>
   
       <div class="hero-wrap" style={{"background-image": "url('/images/og-bg.jpg')"}} data-stellar-background-ratio="0.5">
     <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center">
          <div class="col-md-6 ftco-animate d-flex align-items-end">
          	<div class="text w-100">
	            <h1 class="mb-4">This is where Laserfiche ECM is taught to the final chapter</h1>
	            <p class="mb-4">Learn how to become proffessional CMS engineer from the best in the field with over 8 years of engineering Laserfiche CMS process and other products</p>
	            <p><a href="#" class="btn btn-primary py-3 px-4">Contact Me</a> <a href="#test" class="btn btn-white py-3 px-4">Read more</a></p>
            </div>
          </div>
          <a href="https://vimeo.com/45830194" class="img-video popup-vimeo d-flex align-items-center justify-content-center">
          	<span class="fa fa-play"></span>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
