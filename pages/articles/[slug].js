import Head from "next/head";
import { useRouter } from "next/router";
import Card from "../../components/common/Card";
import { getAllArticles } from "../../data/articles";
const Article = (props) => {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  const title = "fsdlka fjaskld;f as";
  if (slug) {
    const articleId = slug.substr(0, slug.indexOf("-"));
    console.log(articleId);
  }

  console.log(props);

  return (
    <>
      <Head>
        <title>{title} : بادانیال</title>
      </Head>
      <div className='container mt-8'>
        <Card>
          <div className='text-4xl text-center font-bold'>{title}</div>
          <div>{}</div>
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
  const { data: articles, error } = await getAllArticles();
  let allArticles = articles.map((article) => {
    return {
      params: {
        slug: `${article.id}-${article.slug}`,
        title: article.title,
        poster: article.poster,
        text: article.text,
      },
    };
  });
  return {
    // Passed to the page component as props
    props: { post: allArticles },
  };
}

export default Article;
