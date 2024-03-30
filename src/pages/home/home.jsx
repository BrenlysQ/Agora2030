import Banner from '../../assets/banner.png'
import Doing from '../home/components/doing/doing'
//import News from '../home/components/news/news'
import Allies from '../home/components/allies/allies'
import Financiers from './components/financiers/financiers'
import Metrics from './components/metrics/metrics'
//import Works from './components/works/works'
import Support from './components/support/support'

function Home() {

  return (
    <div className='flex-row'>  
      <img src={Banner} className="w-full" /> 
       <div className='mt-20 m-auto'>
          <Doing/> 
        {/*   <News/> */}
          <Allies/>
          <Financiers/>
          <Metrics/>
         {/*  <Works/>*/}
          <Support/>
        </div>
    </div>
  )
}

export default Home