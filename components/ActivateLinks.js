import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import { useRouter } from "next/router";

const ActivateLinks = () => {
	 const path = useRouter().route


  return (
  
    <>
	
	        <ul class="navbar-nav ml-auto">
			<li class={"nav-item " + getActive(path,'/')}  ><Link href="/"><a  class="nav-link">Home</a></Link></li>
			<li class={"nav-item " + getActive(path,'/laserfiche')}><Link href="/laserfiche" class="nav-link"><a  class="nav-link">Laserfiche</a></Link></li>
			<li class={"nav-item " + getActive(path,'/gaming')}><Link href="/gaming" class="nav-link"><a  class="nav-link">Gaming</a></Link></li>
			<li class={"nav-item " + getActive(path,'/videos')}><Link href="/videos" class="nav-link"><a  class="nav-link">Videos</a></Link></li>
			<li class={"nav-item " + getActive(path,'/about')}><Link href="/about" class="nav-link"><a  class="nav-link">About</a></Link></li>
			<li class={"nav-item " + getActive(path,'/contact')}><Link href="/contact" class="nav-link"><a  class="nav-link">Contact</a></Link></li>
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
