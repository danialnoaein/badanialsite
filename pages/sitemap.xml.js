import { gql } from "@apollo/client";
import client from "../data/apollo-client";

const EXTERNAL_DATA_URL = "https://badanial.site/article";
const GET_ARTICLES = gql`
  query MyQuery {
    articles {
      id
      title
    }
  }
`;

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://badanial.site</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const { data } = await client.query({
    query: GET_ARTICLES,
  });

  const sitemap = generateSiteMap(data.articles);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
