import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import ArticleContainer from "../../components/articles/ArticleContainer";
import Card from "../../components/common/Card";
import client from "../../data/apollo-client";
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

  const { data } = await client.query({
    query: GET_LOCATIONS,
  });
  let allArticles = data.articles.map((article) => {
    return { params: { slug: `${article.slug}` } };
  });
  return {
    paths: allArticles,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps({ params, preview = false }) {
  const slug = params.slug;
  const query = gql`
    query ($slug: String) {
      article(where: { slug: $slug }) {
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

  const { data, error } = await client.query({
    query: query,
    variables: { slug },
  });
  return {
    props: {
      article: data.article,
    },
  };
}

export default Article;
