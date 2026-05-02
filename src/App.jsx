import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/home';
import Navbar from './Pages/Navbar';
import About from './Pages/About/about';
import Skills from './Pages/Skills/skills';
import Projects from './Pages/Projects/projects';
import ParticlesBg from './Component/ParticlesBg/ParticlesBg';

const routerBasename=
import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/,'');

function App() {

  return (
    <div className="relative isolate flex min-h-dvh w-full max-w-full flex-1 flex-col bg-white text-gray-900 antialiased transition-colors duration-200 dark:bg-black dark:text-white">
      <ParticlesBg />
      <BrowserRouter basename={routerBasename}>
        <Navbar />
        <main className="relative z-10 flex w-full min-h-0 flex-1 flex-col pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
