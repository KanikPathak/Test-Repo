import React, { useEffect, useState } from 'react';
import PostItem from './PostItem';
import axios from 'axios';

const Posts = ({ selectedTopic }) => {
    const [Posts, setpost] = useState ([])
    useEffect(() => {
    const handleUpload = async () => {
        
        try {
          const response = await axios.get('http://localhost:8000/getAllData');
        //   console.log(response.data.data[0].imgname);
        //   setpost(response.data.data)
        //   console.log(Posts)
            for(var i=0; i<response.data.data.length; i++)
            {
                const resp = await axios.get(`http://localhost:8000/getImage/${response.data.data[i].imgname}`)
                
                // console.log(resp.data.imageData)
                response.data.data[i].thumbnail = resp.data.imageData
                // console.log(response.data.data[i])
                // Posts.append(response.data.data[i]);
            }
            setpost(response.data.data)
        } catch (error) {
          console.error('Error fetching image', error);
        }
    }
    
    handleUpload();
    }, []);
    const filteredPosts = selectedTopic ? Posts.filter(post => post.category === selectedTopic) : Posts;
    return (

        <section className='posts'>
        <h4 className='articlesHeading'>Featured Articles</h4>
        {
           filteredPosts.length > 0 ? <>
           <div className='container posts__container'>
                {
                filteredPosts.map(({id, thumbnail, category, title}) => 
                <PostItem postID={id} thumbnail={thumbnail} category={category} title={title}
                />)
                }
            </div>
            </> : <h2 className='center'>NO POSTS FOUND..... </h2>}
        </section>
    ) 
}

export default Posts