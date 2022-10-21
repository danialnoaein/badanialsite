import Head from "next/head";
import ArticleCard from "../components/articles/ArticleCard";
import { getAllArticles } from "../data/articles";

const Home = (props) => {
  return (
    <>
      <Head>
        <title>بادانیال - BaDanial : آموزش برنامه نویسی</title>
      </Head>
      <div className='container mt-8'>
        <div>آخرین نوشته ها</div>
        <div>
          {props.error && <div>Error</div>}
          {!props.error &&
            props.allArticles.map((article) => (
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
  return {
    props: { allArticles, error },
  };
}
export default Home;
