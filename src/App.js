import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  About,
  Contact,
  Faqs,
  Header,
  Navbar,
  Portfolio,
  Services,
  Blog,
  Footer,
  FloatingNav,
} from './sections'
import Theme from './sections/Theme'

function App() {
  const { primary, background } = useSelector((store) => store.theme)
  const mainRef = useRef()

  const [showFloatingNav, setShowFloatingNav] = useState(true)
  const [siteYPostion, setSiteYPosition] = useState(0)

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true)
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false)
  }

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if (
      siteYPostion < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPostion > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler()
    } else {
      hideFloatingNavHandler()
    }
    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y)
  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000)

    // cleanup function
    return () => clearInterval(checkYPosition)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteYPostion])

  useEffect(() => {
    localStorage.setItem(
      'theme-port',
      JSON.stringify({
        primary,
        background,
      })
    )
  }, [primary, background])
  return (
    <main className={`${primary} ${background}`} ref={mainRef}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Blog />
      <Faqs />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  )
}

export default App
