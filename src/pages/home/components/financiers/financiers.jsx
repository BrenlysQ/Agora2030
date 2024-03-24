import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Responsive} from '../../../../config/responsiveCarousel'
//assets
import Finan1 from '../../../../assets/financier/Arguidius.jpg'
import Finan2 from '../../../../assets/financier/Athena-Fundation.jpg'
import Finan3 from '../../../../assets/financier/BID-Lab-Color_SPA.png'
import Finan4 from '../../../../assets/financier/cenpromype-e1669933554814.jpg'
import Finan5 from '../../../../assets/financier/citibanamex.jpg'
import Finan6 from '../../../../assets/financier/Embajada-EEUU-en-mexico.jpg'
import Finan7 from '../../../../assets/financier/EYElliance.jpg'

function Financiers() {
  const financis= [Finan1, Finan2, Finan3, Finan4, Finan5, Finan6, Finan7]
  
      return (
        <div className='w-3/4 m-auto mt-12'>  
            <h1 className="h-11 font-bold text-2xl">Nuestros Financiadores</h1>              
            <div className='mt-10'>
                <Carousel
                additionalTransfrom={0}
                minimumTouchDrag={80}
                infinite
                draggable
                pauseOnHover
                autoPlay
                swipeable
                slidesToSlide={1}
                itemClass='flex items-center'
                responsive={Responsive}
                autoPlaySpeed={3000}
                arrows={false}
                >
                    {financis.map((alli, index) => (
                        <div key={index}>
                            <img
                                className="w-2/3"
                                src={alli}
                            />
                        </div>
                    ))}
                </Carousel>
        </div>
        </div>
               
      )
    }
    
    export default Financiers