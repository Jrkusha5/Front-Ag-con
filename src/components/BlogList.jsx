// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const BlogList = ({ title }) => {
//     const [blogs, setBlogs] = useState([]);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         // Replace with your actual API endpoint
//         const apiEndpoint = 'http://localhost:3000/api/v1/order/blog';

//         fetch(apiEndpoint)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then(data => {
//                 setBlogs(data);
//             })
//             .catch(error => {
//                 console.error("Error fetching blogs:", error);
//                 setError("Failed to load blogs. Please try again later.");
//             });
//     }, []);

//     return (
//         <div className="container mt-4">
//             <h1 className="text-center mb-4">{title}</h1>
//             {error && <p className="text-danger text-center">{error}</p>}
//             <div className="row">
//                 {blogs.map((blog) => (
//                     <div className="col-md-4 mb-4" key={blog.id}>
//                         <div className="card h-100">
//                             <img
//                                 src={blog.imageURL}
//                                 className="card-img-top"
//                                 alt="Image Not Found"
//                                 style={{ height: '240px', objectFit: 'cover' }}
//                             />
//                             <div className="card-body d-flex flex-column">
//                                 <h5 className="card-title">{blog.title}</h5>
//                                 <p className="card-text">Written by {blog.author}</p>
//                                 <Link to={`/blogs/${blog.id}`} className="mt-auto btn btn-primary">
//                                     Read More
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default BlogList;
