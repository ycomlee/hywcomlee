import React from 'react'
import Intro from './components/Intro'
import Profile from './components/Profile'
import ProjectList from './components/ProjectList'
import Hobby from './components/Hobby'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Intro />
      <div id="profile" className="section">
        <Profile />
      </div>
      <div id="project" className="section section-bg-alt">
        <ProjectList />
      </div>
      <div id="hobby" className="section">
        <Hobby />
      </div>
      <Footer />
    </>
  )
}

export default App
