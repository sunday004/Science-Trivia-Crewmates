import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadPosts = ({data}) => {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        setPosts(data);
    }, [data]);
    
    return (
        <div className="ReadPosts">
            {
                posts && posts.length > 0 ?
                posts.map((post,index) => 
                   <Card id={post.id} title={post.title} author={post.author} description={post.description} key={index}/>
                ) : <h2>{'No Challenges Yet 😞'}</h2>
            }
            
        </div>  
    )
}

export default ReadPosts;