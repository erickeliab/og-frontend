import CategoryItem from './CategoryItem'

// import Pagination from "preact-paginate";
import React from 'react';

class CategoryList extends React.Component {

  render(){
  
    const categories = this.props.categories.map(category => (<CategoryItem category={category} />))
  return (
    <section>
      	<div class="tag-widget post-tag-container mb-5 mt-5">
        <div class="tagcloud">
                        {categories}
                  </div>
             </div>
     
	  </section>
  )
}

}


export default CategoryList
