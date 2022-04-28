import '@/styles/globals.css'
import { wrapper } from '@/modules/store'
import { Header,Footer, Layout, Modal, Pagination, Table, Nav } from '@/components/Index'

const App = ({ Component, pageProps }) => {
  return <>
  <Header/>
  <Nav/>
  <Component {...pageProps} />
  <Footer/>
  </>
  
}

export default wrapper.withRedux(App)