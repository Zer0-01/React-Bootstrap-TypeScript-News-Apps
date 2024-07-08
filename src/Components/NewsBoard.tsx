import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

interface Article {
  title: string;
  description: string;
  urlToImage: string;
  url: string;
}

const NewsBoard = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=my&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles));

  }, [])
  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger" >News</span></h2>
      {articles.map((news, index) => {
        return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard