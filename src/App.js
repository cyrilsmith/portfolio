import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Headers';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={About} />
          <Route path="/projects" exact element={Projects} />
          <Route path="/projects/:id" element={ProjectDetail} />
          <Route path="/skills" element={Skills} />
          <Route path="/blog" element={Blog} />
          <Route path="/contact" element={Contact} />
          <Route path="/testimonials" element={Testimonials} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
