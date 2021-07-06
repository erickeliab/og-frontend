import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { useRouter } from "next/router";

const ActivateLinks = () => {
	 const path = useRouter().route


  return (
  
    <>
	
	        <ul class="navbar-nav ml-auto">
			<li class={"nav-item " + getActive(path,'/')}  ><a href="/" class="nav-link">Home</a></li>
			<li class={"nav-item " + getActive(path,'/laserfiche')}><a href="/laserfiche" class="nav-link">Laserfiche</a></li>
			<li class={"nav-item " + getActive(path,'/gaming')}><a href="/gaming" class="nav-link">Gaming</a></li>
			<li class={"nav-item " + getActive(path,'/videos')}><a href="/videos" class="nav-link">Videos</a></li>
			<li class={"nav-item " + getActive(path,'/about')}><a href="/about" class="nav-link">About</a></li>
			<li class={"nav-item " + getActive(path,'/contact')}><a href="/contact" class="nav-link">Contact</a></li>
	        </ul>
	     
    
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
export default ActivateLinks
