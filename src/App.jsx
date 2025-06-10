
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/Layout/Header/Header'
import Main from './components/Main/Main'
import { useContext } from 'react'
import { MotionStudyContext } from './context'
import Country from './components/Pages/Country/Country'
import CountryUniversity from './components/Pages/CountryUniversity/CountryUniversity'
import HeaderMenu from './components/Layout/HeaderManu/HeaderMenu'
import UniversityDetails from './components/Pages/UniversityDetails/UniversityDetails'


function App() {
  const {modal} = useContext(MotionStudyContext)
  let router = [
    {
      id:1,
      path:"/",
      element:<Main/>
    },
      {
      id:2,
      path:"/country",
      element: <Country />
    },
     {
      id:3,
      path:"/countrydetails/:countryID",
      element:<CountryUniversity />
    },
     {
      id:4,
      path:"/countryuniversity",
      element:<UniversityDetails />
    },
    

  ]
  return (
 <>
  {modal ? (
    <HeaderMenu/>
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
