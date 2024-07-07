import React from 'react'
import { Route, Router } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Home from './Home'
import Gallery from './Gallery'
import Events from './Events'
import Settings from './Settings'
import News from './News'

function Dashboard() {
  return (
    <div>
      <Navbar />
      Dashboard
    </div>
  )
}

export default Dashboard
