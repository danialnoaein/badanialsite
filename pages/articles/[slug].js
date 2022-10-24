import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import ArticleContainer from "../../components/articles/ArticleContainer";
import Card from "../../components/common/Card";
import { getAllArticles, getSingleArticle } from "../../data/articles";
const Article = ({ article }) => {
  console.log("article page", article);
  const [title, setTitle] = useState(article.title);
  return (
    <>
      <Head>
        <title>{title} : بادانیال</title>
      </Head>
      <ArticleContainer article={article} />
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
  const { data, error } = await getSingleArticle(
    params.slug.substr(0, params.slug.indexOf("-"))
  );
  return {
    // Passed to the page component as props
    props: { article: data[0] },
  };
}

export default Article;
