import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>Home</div>
    <Link to="/signin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Sign In
    </Link>
    </>
  )
}

export default Home
