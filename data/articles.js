import { supabase } from "./supabaseClient";

export const getAllArticles = async () => {
  try {
    let { data, error } = await supabase.from("Articles").select("*");
    return {
      data: [
        {
          id: 1,
          created_at: "2022-10-21T16:59:43+00:00",
          title: "سلام دنیا",
          text: "این اولین نوشته من در این سایت هست.",
          slug: "hello-world",
          poster:
            "https://dwnknioyygkqwaqvblwb.supabase.co/storage/v1/object/public/images/postposters/23b382ee-4c65-4187-ac1f-2ea18fa57d24_1698x1002.webp",
        },
        {
          id: 2,
          created_at: "2022-10-22T19:48:36+00:00",
          title: "سلام دنیا",
          text: "سلام دنیا سلام دنیا سلام دنیا سلام دنیا",
          slug: "hello",
          poster:
            "https://dwnknioyygkqwaqvblwb.supabase.co/storage/v1/object/public/images/postposters/23b382ee-4c65-4187-ac1f-2ea18fa57d24_1698x1002.webp",
        },
      ],
      error,
    };
  } catch (error) {
    console.log(error);
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
