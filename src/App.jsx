import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/layout'
import Sidebar from './components/sidebar'
import Content from './components/content'
import General from './pages/settings/general'
import Basic from './pages/settings/basic'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* nested routes within Layout component wrapper */}
        <Route path="/" element={<Layout />}>
            <Route index element={<General />}></Route>
            <Route path="basic" element={<Basic />}></Route>
            {/* todo: add routes for rest of pages */}
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App
