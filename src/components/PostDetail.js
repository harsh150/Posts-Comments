import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import { Card, FormControl, InputGroup, Button} from 'react-bootstrap';


const PostDetail = () => {

    const [comments, setComments] = useState({ comments: [] });

    useEffect(() => {
        const fetchPostList = async () => {
        const pathname = window.location.pathname.split('/').pop().toString();
        const url = 'https://jsonplaceholder.typicode.com/comments?postId=' + pathname;
        const res = await fetch(url);
        const data = await res.json();
        setComments({ comments: data });
        };
        fetchPostList();
    }, [setComments]);

    const [post, setPost] = useState({ post: [] });

    useEffect(() => {
        const fetchPostList = async () => {
        const pathname = window.location.pathname.split('/').pop().toString();
        const url = 'https://jsonplaceholder.typicode.com/posts/' + pathname;
        const res = await fetch(url);
        const data = await res.json();
        setPost({ post: data });
        };
        fetchPostList();
    }, [setPost]);

    return (
        <div style={mainPage}>
            <Card style={postCard}>
                <Card.Body>
                    <Card.Title>{post.post.title}</Card.Title>
                    <Card.Text>{post.post.body}</Card.Text>
                    <br />
                    <div style={form}>
                        <div style={formInput}>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                <br />
                                <InputGroup.Text id="inputGroup-sizing-sm">Email</InputGroup.Text>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                            <InputGroup size="sm" className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-sm">Body</InputGroup.Text>
                                <FormControl aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                            </InputGroup>
                        </div>
                        <div style={formButton}>
                            <Button variant="primary" size="lg">
                                Submit
                            </Button>{' '}
                        </div>
                    </div>
                    
                    
                </Card.Body>
            </Card>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>
                    </tr>
                </thead>
                <tbody>
                {comments.comments.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.body}</td>

                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    )
}

const mainPage = {
    width: '50%', 
    marginLeft: '25%',
}

const postCard = {
    width: '100%',
    marginTop: '2rem', 
    marginBottom: '2rem',
}

const form = {
    width: '95%', 
    display: 'inline-flex',
}

const formInput = {
    width: '80%',
}

const formButton = {
    width: '15%', 
    height: '80%',
    margin: '1rem',
}

export default PostDetail
