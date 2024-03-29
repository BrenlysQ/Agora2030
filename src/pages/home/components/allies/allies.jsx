import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Responsive} from '../../../../config/responsiveCarousel'
//assets
import Alli1 from '../../../../assets/allies/cenpromype-e1669933554814.jpg'
import Alli2 from '../../../../assets/allies/Center-for-inclusive-growth.jpg'
import Alli3 from '../../../../assets/allies/DRIP-capital-e1669933431319.jpg'
import Alli4 from '../../../../assets/allies/kUESKI-e1669933253233.jpg'
import Alli5 from '../../../../assets/allies/Lendera-e1669933467143.jpg'
import Alli6 from '../../../../assets/allies/logo-1.png'
import Alli7 from '../../../../assets/allies/cenpromype-e1669933554814.jpg'

function Allies() {
  const allis= [Alli1, Alli2, Alli3, Alli4, Alli5, Alli6, Alli7]
  
      return (
        <div className='w-3/4 m-auto mt-12'>  
           <div className="flex justify-between"> 
              <h1 className="h-11 text-blue-950 text-3xl">Nuestros Aliados</h1>
              <div className="flex"> 
                <h4 className="font-bold text-blue-950">Súmate como aliado</h4>
              
              </div>  
          </div>
          <h6 className='mt-20 lg:mt-0'>Conoce a las organizaciones que nos acompañan por una sociedad más<br/>
          inclusiva y en sintonía con el ambiente.
          </h6>  
          <h6>Contáctate para conocer más sobre cómo colaborar con Agora<br/>Partnerships.</h6> 
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
                {allis.map((alli, index) => (
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
    
    export default Allies