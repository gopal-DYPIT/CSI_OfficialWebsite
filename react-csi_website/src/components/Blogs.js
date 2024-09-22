import React from 'react';
export const Blogs = () => {
    const blogs = [
      { title: 'The Future of AI', author: 'John Doe', date: '2024-09-15', excerpt: 'Exploring the potential impact of AI on various industries...' },
      { title: 'Web Development Trends 2025', author: 'Jane Smith', date: '2024-09-10', excerpt: 'A look at the emerging technologies shaping the web...' },
      // Add more blog posts here
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">CSI Blog</h1>
        <div className="space-y-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-4">By {blog.author} on {blog.date}</p>
              <p>{blog.excerpt}</p>
              <a href="#" className="text-blue-600 hover:underline mt-2 inline-block">Read more</a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  