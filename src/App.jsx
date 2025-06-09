
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Layout/Header/Header'
import Main from './components/Main/Main'
import { useContext } from 'react'
import { MotionStudyContext } from './context'
import StudyAbroad from './components/Pages/StudyAbroad/StudyAbroad'
import HeaderMenu from './components/Layout/HeaderManu/HeaderMenu'
import Details from './components/Pages/StudyAbroad/Details/Details'

function App() {
  const {modal} = useContext(MotionStudyContext)
  let router = [
    {
      id:1,
      path:"/",
      element:<Main />
    },
      {
      id:2,
      path:"/studyabroad",
      element: <StudyAbroad />
    },
     {
      id:3,
      path:"/details",
      element: <Details />
    },
  ]
  return (
 <>
  {modal ? (
    <HeaderMenu />
  ) : (
    <>
      <Header />
      <Routes>
        {router.map((el) => (
          <Route key={el.id} path={el.path} element={el.element} />
        ))}
      </Routes>
    </>
  )}
</>

  )
}

export default App
