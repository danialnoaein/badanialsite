import { useEffect } from "react";
import ArticleCard from "../components/articles/ArticleCard";
import { fetch as fetchPolyfill } from "whatwg-fetch";
import { supabase } from "../data/supabaseClient";

const Home = () => {
  useEffect(() => {
    getArticles();
  });

  return (
    <>
      <div className='container mt-8'>
        <div>آخرین نوشته ها</div>

        <div>
          {}
          <ArticleCard />
        </div>
      </div>
    </>
  );
};

export default Home;
const getArticles = async () => {
  try {
    let { data: articles, error } = await supabase.from("Articles").select("*");
  } catch (error) {
    alert("Error loading user data!");
    console.log(error);
  }
};
