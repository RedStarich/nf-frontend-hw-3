'use client';
import React from 'react'

const Home = () => {
  const handleAuthorization = () => {
    console.log('Authorization')
  }
  return (
    <div>
      <h1>Authorization</h1>
      <form>
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button onSubmit={handleAuthorization}>Log in</button>
      </form>
    </div>
  )
}

export default Home