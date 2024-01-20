import React, { useState} from 'react'
import {Link} from "react-router-dom"
import PostAuthor from './PostAuthor'

const PostItem = ({postID, category, title, thumbnail}) => {

const postTitle = title;

const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <article className='post'>
        <Link to={`/posts/${postID}`} >
            <div
                className={`post__thumbnail ${isHovered ? 'hovered' : ''}`}
                style={{
                    backgroundImage: `url(${thumbnail})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    position: 'relative',
                    width: '100%',
                    
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="blur-layer"></div>

                <div className='post__content'>
                    
                        <h3 style={{ fontFamily: 'Oswald', fontWeight: 'normal'}}>{postTitle}</h3>
                    <div className='post__footer'>
                        <Link to={`/posts/categories/${category}`} className='btn category'>{category}</Link>
                    </div>
                </div>
            </div>
        </Link>
    </article>
  )
}

export default PostItem