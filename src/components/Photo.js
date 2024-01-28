import React from 'react'
import "./PhotoStyle.css"
import { Link } from 'react-router-dom'

function Photo({url,title, id}) {

  return (
    <Link to={`/viewgallery/${id}`}>
      <div className='square'>
          <h2> {title} </h2>
          <img src={url} loading="lazy" alt={url}/>
      </div>
    </Link>
  )
}

export default Photo