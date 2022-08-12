//as we are calling api without clicking any btn...
//api did mount = useEffect
import { useState, useEffect  } from "react";
import { getNews } from "../service/api.js";
import InfiniteScroll from 'react-infinite-scroll-component';


import Article from './Article.js';

const Articles = () => {
  const [news, setNews]= useState([]);
  const [page, setPage] = useState(0);

    // useEffect(()=>{
    //     dailyNews();
    // },[]);

    // const dailyNews=async()=>{
    // let response= await getNews(); // response ke inside mai obj hai (api =getNews)
    // setNews(response.data); // data (response ke inside mai obj ka 1 field) 
    // console.log(response);
    // }

    useEffect(() => {
      const dailyNews = async () => {
          const response = await getNews(page);
          console.log(new Set([...news, ...response.data]));
          setNews([...new Set([...news, ...response.data])]);
      }
      dailyNews();
  }, [page])

  useEffect(() => {
      console.log(news);
  }, [news])


  return (
    <InfiniteScroll
            dataLength={news.length}
            next={() => setPage(page => page + 1)}
            hasMore={true}
        >
            {
                news.map(article => (
                    <Article article={article} />
                ))
            }
        </InfiniteScroll>
  )
};

export default Articles;
