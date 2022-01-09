import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import all components
import { ProjectsProvider, SelectedProjectProvider } from './context'
import Home from './routes/Home'
import Data from './routes/Data'

const App = () => {
  return (

    <SelectedProjectProvider>
      <ProjectsProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/data' element={<Data />} />
          </Routes>
        </Router>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
}

export default App
