import axios from "axios";
import { backend } from "../config";
import { useState } from "react";



const Testimonial = (props) => {
   
    const [posts, getPosts] = useState([]);
    axios.get(`${backend}/posts?Type=Laserfiche`)
    .then(function (response) {
      getPosts(response.data);
    })

    let postSlider = (
        <>
                    {posts.map(post => (
                        <div class="slide">
                        <img src="testimonialasset/images/hero_2.jpg" alt="Free Website Template by Free-Template.co" />  
                        </div>
                    ))}
               </>  
    );

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
                
               
                <link rel="stylesheet" href="testimonialasset/css/style.css" />

                <title>Carousel #10</title>
            </head>
            <body>
            

            <div class="content">
                
                <div class="container">
                {/* <h2 class="my-5 text-center text-white">Carousel #10</h2> */}
                </div>

                <div class="site-blocks-cover">
                <div class="img-wrap">
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
                        <img src="images/pic1.jpg" alt="Free Website Template by Free-Template.co" />  
                    </div>

                    <div class="slide">
                        <img src="images/pic3.jpg" alt="Free Website Template by Free-Template.co" />  
                    </div>
                    
                    <div class="slide">
                        <img src="images/pic2.jpg" alt="Free Website Template by Free-Template.co" />  
                    </div>
                    
                   
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                    <div class="col-md-6 ml-auto align-self-center">
                        <div class="intr">
                        <div class="heading">
                            <h1 class="text-dark font-weight-bold">The Og Experience </h1>
                        </div>
                        <div class="text sub-text">
                            <p>"Be brave. Take risks. Nothing can substitute experience" - Paulo Coelho</p>
                            <p><a href="/about" target="_blank" class="btn bg-primary btn-outline-primary btn-md btn-pill">Explore</a></p>
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



export default Testimonial;