import Link from 'next/link';
import { backend } from '../../config'
import articleStyles from '../../styles/Article.module.css'

const CategoryItem = (category) => {

  return (
    <>  
    <a class="tag-cloud-link">{category.category.Name}</a>
    </>
  )
}

export default CategoryItem
