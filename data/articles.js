import { gql, useQuery } from "@apollo/client";
import { supabase } from "./supabaseClient";

export const getAllArticles = async () => {
  try {
    //let { data, error } = await supabase.from("Articles").select("*");
   

    const GET_LOCATIONS = gql`
    query {
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
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    return {
      data,
      error,
    };
  } catch (error) {
    return { error };
  }
};

export const getSingleArticle = async (articleId) => {
  try {
    let { data, error } = await supabase
      .from("Articles")
      .select("*")
      .eq("id", articleId);
    return { data, error };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
