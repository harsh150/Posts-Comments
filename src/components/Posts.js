import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';


const Posts = () => {

    const [posts, setPosts] = useState({ posts: [] });

    useEffect(() => {
        const fetchPostList = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await res.json();
        setPosts({ posts: data });
        };
        fetchPostList();
    }, [setPosts]);

    return (
        <div style={mainTable}>
            <h1>Latest Posts!</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                {posts.posts.map((item) => (
                    <tr key={item.id}>
                        <td>
                            <Link to={'/post/' + item.id}>{item.title}</Link>
                        </td>
                        <td>{item.body}</td>
                    </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

const mainTable = {
    width: '50%', 
    marginLeft: '25%',
}

export default Posts 
