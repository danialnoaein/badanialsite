import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Card from "../../components/common/Card";
import { getAllArticles, getSingleArticle } from "../../data/articles";
const Article = (props) => {
  const [title, setTitle] = useState(props.article.title);
  const [poster, setPoster] = useState(props.article.poster);
  return (
    <>
      <Head>
        <title>{title} : بادانیال</title>
      </Head>
      <div className='container mt-8'>
        <Card>
          <div className='text-4xl text-center font-bold'>{title}</div>
          <div>{poster}</div>
          <div>text</div>
          <div>rate</div>
        </Card>
      </div>
    </>
  );
};

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  const { data: articles, error } = await getAllArticles();
  if (error) {
    console.log(error, articles);
  }
  let allArticles = articles.map((article) => {
    return { params: { slug: `${article.id}-${article.slug}` } };
  });
  return {
    paths: allArticles,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params, preview = false }) {
  console.log("params", params);
  const { data: article, error } = await getSingleArticle(
    params.slug.substr(0, params.slug.indexOf("-"))
  );
  return {
    // Passed to the page component as props
    props: { article },
  };
}

export default Article;
