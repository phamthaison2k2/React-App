import { useState, useEffect } from 'react'

function Blog() {

    const [blogs, setBlogs] = useState([])

    const apiBlogs = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        fetch(apiBlogs)
            .then(res => res.json())
            .then(response => {
                setBlogs(response)
            })
    }, []);

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            margin: '0 20px 0 25px',
        }}>
            {blogs.map(blog => (
                <div
                    style={{
                        border: '1px solid #fff',
                        borderRadius: '3px',
                        padding:' 5px',
                        margin:' 10px',
                        maxWidth: '260px'
                    }}
                    key={blog.id}
                
                >
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Blog;