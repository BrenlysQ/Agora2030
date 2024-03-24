import newsApi from "../../../../api/newsApi";
import { useEffect, useState } from "react";
function Works() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    newsApi
      .newsApi()
      .then((res) => {
        setArticles(res.data.articles.slice(8, 11));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-3/4 m-auto mt-12">
      <div className="flex justify-between">
        <h1 className="h-11 font-bold text-2xl">Oportunidades Laborales</h1>
        <button className="bg-rose-700 text-white px-4 py-2 text-xs rounded-3xl">
          Conoce todas nuestras vacantes
        </button>
      </div>
      <div className="flex justify-between mt-8">
        {articles.map((article, index) => (
          <div key={index} className="w-1/3 m-5 cursor-pointer">
            <img
              className="object-fill  h-60 w-full rounded-xl m-auto"
              src={article.urlToImage}
              alt={article.author}
            />
            <div className={`mt-6 rounded-xl p-5`}>
              <h1 className="font-bold">{article.title}</h1>
              <p className="mt-4 text-sm">{article.content}</p>
            </div>
            <button className="bg-rose-700 text-white rounded-2xl px-4 py-2 text-xs">
              CONOCER MÁS
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
