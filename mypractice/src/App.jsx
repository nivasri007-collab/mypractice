
/* import './App.css'
 */
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
function App() {
  

  return (
    <>
<Routes>
  <Route path='/home' element={<HomePage/>} />
  <Route path='about' element={<AboutPage/>}/>
  <Route path='/contact' element={<ContactPage/>}/>
</Routes>
{/*     <HomePage />
    <AboutPage />
    <ContactPage />
 */}    </>
  )
}

export default App
