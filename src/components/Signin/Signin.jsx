import React from 'react'
import { Link } from 'react-router-dom'

function Signin() {
  return (
    //add a signin form with tailwind css
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-16 rounded shadow-2xl w-1/3">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-2">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" className="border w-full p-2 rounded" />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-800 text-sm font-medium mb-2">Password</label>
                <input type="password" id="password" name="password" placeholder="Password" className="border w-full p-2 rounded" />
            </div>
            <Link to="/dashboard">
            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Sign In</button></Link>
            </form>
        </div>
        </div>
  )
}

export default Signin