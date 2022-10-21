import { supabase } from "./supabaseClient";

export const getAllArticles = async () => {
  try {
    let { data, error } = await supabase.from("Articles").select("*");
    return { data, error };
  } catch (error) {
    console.log(error);
    return { error };
  }
};
