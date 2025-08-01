import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooters'
import MyMain from './components/MyMain'
import Details from './components/Details'
import Error from './components/Error'
import { WeatherProvider } from './components/WeatherContext'
import Segnalazioni from './components/Segnalazioni'

function App() {
  return (
    <div className="sky-gradient">
      <WeatherProvider>
        <BrowserRouter>
          <MyHeader />
          <Routes>
            <Route path="/" element={<MyMain />} />
            <Route path="/details/:cityId" element={<Details />} />
            <Route path="/segnalazioni" element={<Segnalazioni />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <MyFooter />
        </BrowserRouter>
      </WeatherProvider>
    </div>
  )
}

export default App
