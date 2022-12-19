import Head from "next/head";
import { useEffect, useState } from "react";
import ArticleCard from "../components/articles/ArticleCard";
import { getAllArticles } from "../data/articles";

const Home = (props) => {
  const [articles, setArticles] = useState(props.allArticles);
  const [error, setError] = useState(props.error);
  useEffect(() => {
    const getA = async () => {
      const { data, error } = await getAllArticles();
      //setArticles(data);
      //setError(error);
      //console.log(data);
    };
    getA();
  }, []);
  return (
    <>
      <Head>
        <title>بادانیال - BaDanial : آموزش برنامه نویسی</title>
      </Head>
      <div className='container mt-8'>
        <div>آخرین نوشته ها</div>
        <div>
          {error && <div>Error</div>}
          {!error &&
            articles.map((article) => (
              <ArticleCard
                key={article.id}
                data={article}
              />
            ))}
        </div>
      </div>
    </>
  );
};
export async function getStaticProps() {
  const { data: allArticles, error } = await getAllArticles();
  console.log(allArticles, error);
  return {
    props: { allArticles, error },
  };
}
export default Home;
