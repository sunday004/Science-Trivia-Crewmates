import React, { useState } from 'react';
import './CreatePost.css'
import { supabase } from '../client'

const CreatePost = () => {
    const [post, setPost] = useState({title: '', author: '', description: ''})

    
    const create = async (event) => { 
        event.preventDefault();

        await supabase
        .from('posts')
        .insert({title: post.title, author: post.author, description: post.description})
        .select();
    
        window.location = "/";
    }
    return (
        <div>
            <form onSubmit={create}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" value={post.title} name="title" onChange={(e) => setPost({...post, title: e.target.value})} /><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" value={post.author} onChange={(e) => setPost({...post, author: e.target.value})} name="author" /><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" value={post.description} onChange={(e) => setPost({...post, description: e.target.value})} cols="50" id="description" >
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
};

export default CreatePost