import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dock from './components/Dock/Dock';
import { VscHome, VscBriefcase, VscFolderLibrary, VscFilePdf, VscMortarBoard } from 'react-icons/vsc';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Education from './pages/Education';

function App() {
  const items = [
    { icon: <VscHome size={18} />, label: 'Home', to: '/' },
    { icon: <VscBriefcase size={18} />, label: 'Experience', to: '/experience' },
    { icon: <VscMortarBoard size={18} />, label: 'Education', to: '/education' },
    { icon: <VscFolderLibrary size={18} />, label: 'Projects', to: '/projects' },
    { icon: <VscFilePdf size={18} />, label: 'Resume', to: '/resume' },
  ];

  return (
    <Router>
      <div className="App">
        <Dock 
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
