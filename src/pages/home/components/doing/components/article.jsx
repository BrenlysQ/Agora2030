import  { useState } from 'react';
import PropTypes from 'prop-types'

const ArticleComponent = ({ article,index }) => {

const [hover, setHover] = useState(false);

  return (
  
    <div className="lg:w-full m-5 cursor-pointer" onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
      <img
        className="object-fill hover:object-cover h-60 w-full rounded-xl m-auto"
        src={`https://www.nytimes.com/${article.multimedia[0]?.url}`}
        alt={article.author}
      />
      <div 
      className={`mt-6 
      ${hover  && index ===0 && 'bg-gradient-to-r from-rose-900 to-rose-700 text-white' } 
      ${hover  && index ===1 && 'bg-gradient-to-r from-orange-600 to-orange-400 text-white' } 
      ${hover  && index ===2 && 'bg-gradient-to-r from-green-600 to-green-800 text-white' } 
      rounded-xl p-5`}>
        <h1 className="font-bold">{article.headline.main}</h1>
        <p className="mt-4 text-sm">{article.snippet}</p>
      </div>
    </div>
  );
};
ArticleComponent.propTypes = {
    article: PropTypes.object.isRequired,
    index:PropTypes.number.isRequired
   
  }
export default ArticleComponent;