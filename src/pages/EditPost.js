import {React, useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css'
import { supabase } from '../client'

const EditPost = ({data}) => {

    const [post, setPost] = useState({title: data.title, author: data.author, description: data.title})
    const {id} = useParams();
    console.log(data)
    console.log(id)
    useEffect(() =>{
        setPost(data.filter((item) => item.id == id)[0]);
        console.log(post)
    },[id, data, post])
    console.log(post)

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('posts')
            .update({ title: post.title, author: post.author,  description: post.description})
            .eq('id', id);

        window.location = "/";
    }

    const deletePost = async (event) =>{
        event.preventDefault();

        await supabase
            .from('posts')
            .delete()
            .eq('id', id); 

        window.location = "http://localhost:3000/";
    }



    return (
        <div>
            <form onSubmit={updatePost}>
                <label htmlFor="title">Title</label> <br />
                <input type="text" id="title" name="title" value={post.title} onChange={(e) => setPost({...post, title: e.target.value})}/><br />
                <br/>

                <label htmlFor="author">Author</label><br />
                <input type="text" id="author" name="author" value={post.author} onChange={(e) => setPost({...post, author: e.target.value})}/><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" value={post.description} onChange={(e) => setPost({...post, description: e.target.value})}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
        </div>
    )
}

export default EditPost