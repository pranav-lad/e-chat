import React from 'react'
import './Maincontent.css'
import Post from './Post.js'
import Write from './Write.js'
export default function Maincontent() {
  return (
    <div className='maincontent'>
      <Write />
      <Post />
      <Post />
      <Post />
      </div>
  )
}
