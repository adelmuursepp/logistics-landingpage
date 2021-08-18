import React from 'react'
import { Link } from 'gatsby'

import BlogSearch from './BlogSearch'
import './PostCategoriesNav.css'

const PostCategoriesNav = ({ categories, enableSearch }) => (
  <div className="PostCategoriesNav">
    <Link className="NavLink" exact="true" to={`/blog/`}>
      All
    </Link>
    {enableSearch && <BlogSearch />}
  </div>
)

export default PostCategoriesNav
