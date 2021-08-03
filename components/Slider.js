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
                <div class="img-wrap" style={{backgroundImage: `url("images/testimonial-background.jpg")`}}>
                    <div class="owl-carousel slide-one-item hero-slider">
                  
                    <div class="slide container">
                    <div class="card col-md-12 mt-5 mb-5" style={{maxWidth: '540px'}}>
                    <div class="row no-gutters">
                        <div class="col-md-4 container">
                        <img src="/images/mark.jpg" class="card-img img-circle mt-4 mb-4 " alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Mark Zuckerberg</h5>
                            <p class="card-text">"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."</p>
                            <p class="card-text container"><i class="fa fa-linkedin col-4 m-1" aria-hidden="true"></i>
                            <i class="fa fa-twitter col-4 m-1" aria-hidden="true"></i></p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>


                    <div class="slide container">
                    <div class="card col-md-12 mt-5 mb-5" style={{maxWidth: '540px'}}>
                    <div class="row no-gutters">
                        <div class="col-md-4 container">
                        <img src="/images/mark.jpg" class="card-img img-circle mt-4 mb-4 " alt="..." />
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Mark Zuckerberg</h5>
                            <small className="text-dark">Facebook founder</small>
                            <p class="card-text">"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."</p>
                            <p class="card-text container"><i class="fa fa-linkedin col-4 m-1" aria-hidden="true"></i>
                            <i class="fa fa-twitter col-4 m-1" aria-hidden="true"></i></p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>


                    
                   
                    {/* <div class="slide">
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
                    </div> */}
                   
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