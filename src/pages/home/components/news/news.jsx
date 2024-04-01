import { useEffect, useState } from 'react'
function News() {
    const [articles, setArticles] = useState([])
   
 
    useEffect(() => {
      localStorage.getItem('data') && setArticles(JSON.parse(localStorage.getItem('data')).slice(3,6))
    }, [])
   
   
      return (
        <div className='w-11/12 lg:w-3/4 m-auto mt-12'>  
          <h1 className="h-11 text-blue-950 text-3xl">Convocatorias y Novedades</h1>   
          <div className="flex-row lg:flex lg:justify-between mt-8">
            {articles.map((article, index) => (
                <div key={index} className="lg:w-1/3 m-5 cursor-pointer relative">
                  <h4 className="bg-gray-700 w-1/3 text-white rounded-xl text-center absolute top-3 left-3">{article.section_name}</h4>
                    <img
                        className="object-fill  h-60 w-full rounded-xl m-auto"
                        src={`https://www.nytimes.com/${article.multimedia[0]?.url}`}
                        alt={article.author}
                    />
                    <div className={`mt-6 rounded-xl p-5`}>
                        <h1 className="font-bold">{article.headline.main}</h1>
                        <p className="mt-4 text-sm">{article.snippet}</p>
                    </div>
                    <button className="bg-rose-700 text-white rounded-2xl px-4 py-2 text-xs">CONOCER MÁS</button>
                </div>
            ))}
          </div>
        </div>
      )
    }
    
    export default News