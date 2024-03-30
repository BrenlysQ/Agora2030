import ArticleComponent from './components/article';
import { useEffect, useState } from 'react'

function Doing() {
  const [articles, setArticles] = useState([])
 
  useEffect(() => {
    setArticles(JSON.parse(localStorage.getItem('data')).slice(0,3))
  }, [])
 
    return (
      <div className='w-11/12 lg:w-3/4 m-auto'>  
         <div className="flex justify-between"> 
            <h1 className="h-11 text-blue-950 text-3xl">¿Qué hacemos?</h1>   
            <h4 className="font-bold cursor-pointer text-blue-950">Conocer más sobre nuestros programas</h4>
        </div>
        <h6 className="mt-10 lg:mt-0">Calibramos el ecosistema emprendedor de América Latina para<br/>
            crear prosperidad inclusiva para el individuo, la empresa, <br/>
            la comunidad y el medio ambiente.
        </h6>  
        <div className="flex-row lg:flex lg:justify-between mt-12">
          {articles.map((article, index) => (
            <ArticleComponent key={index} article={article} index={index} />
          ))}
     </div>
    </div>
      
    )
  }
  
  export default Doing