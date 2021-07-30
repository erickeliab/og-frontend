import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const Slider = () => {

    return (
        <>
         <html lang="en">
            <head>
            
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet" />

                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500&display=swap" rel="stylesheet" />

                <link href="https://fonts.googleapis.com/css?family=Arbutus+Slab&display=swap" rel="stylesheet" />

                <link rel="stylesheet" href="testimonialasset/fonts/icomoon/style.css" />

                <link rel="stylesheet" href="testimonialasset/css/owl.carousel.min.css" />

                <link rel="stylesheet" href="testimonialasset/css/animate.css" />

              
                <link rel="stylesheet" href="testimonialasset/css/bootstrap.min.css" />
                
               
                <link rel="stylesheet" href="testimonialassetm/css/style.css" />

                <title>Carousel #10</title>
            </head>
            <body>
            

            <div class="conten">
                
                <div class="container">
                {/* <h2 class="my-5 text-center text-white">Carousel #10</h2> */}
               
                    <div class="row justify-content-center pb-5">
                <div class="col-md-7 heading-section text-center ftco-animatee">
                    <span class="subheading">My</span>
                    <h2>Testimonial</h2>
                </div>
                </div>
                </div>

                <div class="site-blocks-cove">
                <div class="img-wrap" style={{backgroundImage: `url("testimonialasset/images/hero_2.jpg")`}}>
                    <div class="owl-carousel slide-one-item hero-slider">
                    {/* <div class="slide">
                       <img src="testimonialasset/images/hero_1.jpg" alt="Free Website Template by Free-Template.co" /> 
                        <div class="heading">
                        <h1 class="text-white font-weight-bold">The Studio</h1>
                        </div>
                        <div class="text sub-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi omnis qui distinctio.</p>
                        <p><a href="https://free-template.co/" target="_blank" class="btn btn-outline-primary btn-md btn-pill">Start a project</a></p>
                        </div>    
                    </div> */}
                    <div class="slide">
                    <div class="card col-md-12 mt-5" style={{maxWidth: '540px'}}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src="testimonialasset/images/hero_3.jpg" class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    
                    <div class="slide row mt-5">

                    <div class="card col-md-12 mt-5" style={{maxWidth: '540px'}}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src="testimonialasset/images/hero_2.jpg" class="card-img img-circle" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Mark Zuckeberg</h5>
                            <h6 class="card-title">Founder of Facebook</h6>
                            <p class="card-text">"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."</p>
                            <p class="card-text"><small class="text-muted"></small></p>
                        </div>
                        </div>
                    </div>
                    </div>

                    

                    
                    </div>
                    <div class="slide">
                    <div class="card col-md-12 mt-5" style={{maxWidth: '540px'}}>
                    <div class="row no-gutters">
                        <div class="col-md-4">
                        <img src="testimonialasset/images/hero_3.jpg" class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                    </div> 
                    </div>
                   
                    </div>
                </div>
                
                </div> 
            </div>
        

                <script src="testimonialasset/js/jquery-3.3.1.min.js"></script>
                <script src="testimonialasset/js/popper.min.js"></script>
                <script src="testimonialasset/js/bootstrap.min.js"></script>
                <script src="testimonialasset/js/owl.carousel.min.js"></script>
                <script src="testimonialasset/js/main.js"></script>
            </body>
            </html>
        </>
    )
}


export default Slider;