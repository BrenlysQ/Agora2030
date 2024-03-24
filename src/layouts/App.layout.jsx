import { Outlet } from 'react-router-dom';
import Footer from './footer/footer'
import Header from './header/header'

function AppLayout () {
  
    return (
      <div>     
        <Header />       
          <div>        
            <Outlet />        
          </div>
        
          <Footer />
      </div>
    )
  }
  
  export default AppLayout