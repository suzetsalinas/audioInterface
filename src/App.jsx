import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import layout from './components/layout'
import sidebar from './components/sidebar'
import content from './components/content'
import general from './pages/Settings/general'
import basic from './pages/settings/basic'

function App() {
  return (
    <Router>
      <Routes>
        {/* nested routes within Layout component wrapper */}
        <Route>path="/" element={<layout />}
            <Route>index element={<general />}</Route>
            <Route>path="" element={<basic />}</Route>
            {/* todo: add routes for rest of pages */}
        </Route>
        
      </Routes>
    </Router>
  )
}

export default App
