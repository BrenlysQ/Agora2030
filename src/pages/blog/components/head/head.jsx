import Men from '../../../../assets/men.png'

function Head() {   
   
      return (
        <div className='lg:w-2/3 m-auto mt-12 lg:flex gap-12' >  
         <div className="bg-blue-900 rounded-xl p-5 lg:p-12">
            <h3 className='m-5 text-white'>NUESTRO BLOG</h3>
            <h2 className='m-5 text-white text-4xl'>Conoce nuestros últimos artículos y noticias</h2>
         </div>
            <img src={Men} className='rounded-xl m-3 lg:m-0 w-11/12'/>    
        </div>
      )
    }
    
    export default Head