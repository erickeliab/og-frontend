import axios from 'axios'
import React, {useState} from 'react'
import { backend } from '../../config';
import { useRouter } from 'next/router'
import Link from 'next/link';


const SearchForm = () => {
    const [ search, getSearch ] = useState('');
    let [ posts, getPosts ] = useState([]);
    let autos = '';

    const onChange = (e) => {
        
        e.preventDefault();

        getSearch(e.target.value);
        if(e.target.value.length == '0' ) {
            getPosts([])
           
        }else {
    
          

            axios.get(`${backend}/posts?_where[_or][0][Title_contains]=${search}&_where[_or][1][body_contains]=${search}`)
            .then(function (response) {
                getPosts(response.data)

                
               
            })
    
    
        }

    }

    const onClick = (e) => {
        getSearch(e);
        // getSearch('');
        getPosts([])
        document.getElementById("search-field").focus()
        

    }

    const router = useRouter()
    const onSubmit = (e) => {
         e.preventDefault();

        let searchy = search
        getSearch(searchy);
        getPosts([])
        console.log('working.....');
         router.push(`/search?search=${searchy}`);
        // window.location.href(`/search?search=${searchy}` )
        
    }
  return (
    <>
    <form  onSubmit={onSubmit} class="search-for container" style={autoStyle}>
    <input type="field" id="search-field" name="search" style={searchStyle} placeholder="Search" className="text-secondary col-md-12 form-control" onChange={onChange} value={search} autoComplete="off" active/>
  
    <div className="autocomplete ml-3 p-1 col-md-10 container " style={autocompleteitems}>
        <div class="list-group">
          

        {posts.map((pos) => (

        <a value={pos.Title} onClick={() => onClick(pos.Title)} class="text-dark bg-white p-1 card"><small style={linkstyle}>{pos.Title}</small></a>

        ))}    
         
               
          
       

        </div>
    </div>
    </form>
    
    </>
  )
  
}

export default SearchForm

const searchStyle = {

	marginLeft: '2px'

}

const autoStyle = {
    position: 'relative',
    display: 'inline-block'
}


const autocompleteitems = {
    position: 'absolute',
  
    borderBottom: 'none',
    borderTop: 'none',
    zIndex: '99',
    top: '100%',
    left: '0',
    right: '0'
  }


  const linkstyle = {
    cursor: 'pointer'
  }