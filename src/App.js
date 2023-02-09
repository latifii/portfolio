import {
  About,
  Contact,
  Faqs,
  Header,
  Navbar,
  Portfolio,
  Services,
  Testimonials,
  Footer,
  FloatingNav,
} from './sections'

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Faqs />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  )
}

export default App
