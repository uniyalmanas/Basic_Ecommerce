import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (

<>
<div className="newsletter">
<h1>Get Exclusive offers on your Email</h1>
<p>Subscribe to our news letter and stay updated</p>
<div>
    <input type="email" placeholder='your email id'/>
    <button >Subscribe </button>
</div>
</div>
</>
    )
}

export default NewsLetter