import { useEffect, useState } from 'react'
import Pagination from "./pagination";


function Articles() {
    const [articles, setArticles] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 9;

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const currentPosts = articles.slice(indexOfFirstPost, indexOfLastPost);
  
 
    useEffect(() => {
      localStorage.getItem('data') && setArticles(JSON.parse(localStorage.getItem('data')))
    }, [])
     const category = articles.slice(0, 6);
     console.log(category)
   
      return (
        <div className='lg:w-2/3 m-auto mt-12'>
          <div className="lg:flex lg:w-2/3 m-auto bg-gray-800 rounded-xl items-center">
            {category.map((article, index) => (
              <div key={index} className="lg:w-1/4 m-5 p-1 lg:p-0 cursor-pointer">                    
                <h4 className="text-sm text-white">{article.section_name}</h4>                     
              </div>
            ))}
          </div>
          <div className="lg:flex lg:flex-wrap lg:justify-between mt-8">
            {currentPosts.map((article, index) => (
                <div key={index} className="lg:w-1/3 p-3 cursor-pointer relative">
                  <h4 className="bg-gray-700 w-1/3 text-white rounded-xl text-center absolute top-6 left-6">{article.section_name}</h4>
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
          <Pagination totalPosts={articles.length} postsPerPage={postsPerPage} paginate={paginate} />
        </div>
      )
    }
    
    export default Articles