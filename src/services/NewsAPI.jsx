import axios from "axios";

const url = "https://newsapi.org/v2/top-headlines";
const API_KEY = "1055503713d0487c9ac246e93b6a132a";
const CATEGORY = "houses";
const country = "ru";

const getRequest = async (url) => {
  return await axios.get(url);
};

export const loadNews = async () => {
  const result = await getRequest(
    `${url}?country=${country}&apiKey=${API_KEY}`
  );
  return result.data.articles;
};
