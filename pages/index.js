import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import Head from "next/head";
import { useEffect, useState } from "react";
import ArticleCard from "../components/articles/ArticleCard";
import client from "../data/apollo-client";
import { getAllArticles } from "../data/articles";

const GET_LOCATIONS = gql`
  query MyQuery {
    articles {
      id
      slug
      thumbnail {
        id
        fileName
        url
      }
      title
      content {
        html
      }
    }
  }
`;

const Home = (props) => {
  const [articles, setArticles] = useState(props.articles);

  // useEffect(() => {
  //   const getA = async () => {
  //     const { data, error } = await getAllArticles();
  //     //setArticles(data);
  //     //setError(error);
  //     console.log(data ,error);
  //   };
  //   getA();
  // }, []);

  const { loading, error, data } = useQuery(GET_LOCATIONS);

  console.log(loading);
  return (
    <>
      <Head>
        <title>بادانیال - BaDanial : آموزش برنامه نویسی</title>
      </Head>
      <div className='container mt-8'>
        <div>آخرین نوشته ها</div>
        <div>
          {error && <div>Error</div>}
          {data &&
            data.articles.map((article) => (
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
export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_LOCATIONS,
  });

  return {
    props: {
      articles: data.articles,
    },
  };
}
export default Home;
