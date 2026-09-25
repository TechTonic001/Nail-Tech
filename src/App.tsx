import './App.css'
import { Booking } from './components/Booking'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Location } from './components/Location'
import { Navbar } from './components/Navbar'
import { Services } from './components/Services'

function App() {
  return <div className="site-shell"><Navbar /><main><Hero /><Services /><Booking /><Location /><Contact /></main><Footer /></div>
}

export default App
