import React, { useState } from 'react'
import { Link } from "react-router-dom"
import PostAuthor from './PostAuthor'
import { ReactComponent as ArrowIcon } from '../images/right-arrow.svg';


const PostItem = ({ postID, category, title, thumbnail }) => {

  const postTitle = title;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = async () => {
    try {

      const respo = await fetch(`http://localhost:8000/clickCount`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: postID,
          category: category
        })
      });

    } catch (error) {
      console.log("it is not working for some issue");
      console.error('Error making API call:', error.message);
    }
  }

  return (
    <article className='post'>

      <div className='post__thumbnail'>
        <img src={thumbnail} alt={title} />
      </div>

      <div className='post__content'>

        <h3 style={{ fontWeight: 'normal', padding: "", fontSize: "20px" }}>{postTitle}</h3>
        <Link to={`/post/categories/${category}`} className='category'>{category}</Link>
        <Link to={`/posts/${postID}`} onClick={() => handleClick()} >
          <div className='read_more'>
            <div>Read More</div>
            <div class="arrow-container">
                <ArrowIcon className='custom-arrow'/>
            </div>
          </div>
        </Link>
      </div>
    </article>
  )
}

export default PostItem