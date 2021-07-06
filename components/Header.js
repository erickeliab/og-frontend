import headerStyles from '../styles/Header.module.css'
import Slideshow from './Slideshow'
import { fetchdata } from '../core/fetch'
import Link from 'next/link'
const axios = require('axios');
let slide = {};

export default function Header ({slide, contact}){
console.log('slide');
console.log(contact);
  return (
    <>
   
       <div class="hero-wrap" style={slide.ShowcaseImage ? {"background-image": "url(http://localhost:1337"+slide.ShowcaseImage+")"} : {"background-image": "url(http://localhost:1337"+slide.post.CoverPhoto+")"}} data-stellar-background-ratio="0.5">
     <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text align-items-center">
          <div class="col-md-6 ftco-animate d-flex align-items-end">
          	<div class="text w-100">
	            <h1 class="mb-4">{slide.Title}</h1>
	            <p class="mb-4">{slide.Description}</p>
	            <p><a href="/contact" class="btn btn-primary py-3 px-4">Contact Me</a></p>
            </div>
          </div>
          <Link href={`/post/${slide.post.id}`}>
          <a class="img-video  d-flex align-items-center justify-content-center">
          	<span class="fa fa-sticky-note-o"></span>
          </a>
          </Link>
        </div>
      </div>
    </div>
    </>
 

  )


 
}


