import React from 'react';
import '../../styles/Blog.scss';
import Decor1 from './Decor1';
import Decor2 from './Decor2';
import Decor3 from './Decor3';
import blogPosts from "../../assets/blogData.json";
import { RiExternalLinkFill } from "react-icons/ri";
const Index = () => {
  return (
    <section id="blog">
    <h2>Blog</h2>
    <ul className='posts'>
    {blogPosts.map((post, i) => (
      <li className="card" key={i}>
        <div className="blog-decor">
          {(i%3===0)?<Decor3 />:((i%2===0)?<Decor2 />:<Decor1 />)}
        </div>
        <div className="card-title">
          <h3>{post.title}</h3>
        </div>
        <div className="card-content">
          <p>{post.description?post.description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, necessitatibus.'}
          </p>
        </div>
        <a className="card-link" href={post.url} title="visit"><RiExternalLinkFill /></a>
      </li>
    ))}
      <li className="card">
        <h3>More posts here</h3>
        <a href="https://dev.to/jsha">https://dev.to/jsha</a>
      </li>
    </ul>
    </section>
  )
}

export default Index