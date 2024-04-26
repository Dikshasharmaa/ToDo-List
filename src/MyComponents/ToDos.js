import React from 'react'
export const ToDos = ({todos,title}) => {
  return (
    <div className="container">
        <h3>ToDo List</h3>
        {todos.map(item =>(<div className='todo' key={item.sno}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>))
        }

        </div>
  );
}


// const BlogList = ({ blogs, title}) => {
//   // const blogs = props.blogs;
//   // const title = props.title;
//   // console.log(blogs);

//   return (
//     <div className="blog-list">
//       <h2>{ title }</h2>
//       {blogs.map(blog => (
//         <div className="blog-preview" key={blog.id} >
//           <h2>{ blog.title }</h2>
//           <p>Written by { blog.author }</p>
//         </div>
//       ))}
//     </div>
//   );
// }
 
// export default BlogList;