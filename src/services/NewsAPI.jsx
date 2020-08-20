import axios from "axios";

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: `https://newsapi.org/v2/`,
//     headers: {
//       "API-KEY": "1055503713d0487c9ac246e93b6a132a",
//     },
//   });

// export const baseUrl = `https://newsapi.org/v2/`;
// export const newNewsUrl = `${baseUrl}news.json`;
// export const newsUrl = `${baseUrl}top-headlines`;

// export const getNews = async (newsId) => {
//     const result = await axios.get(`${newsUrl + newsId}.json`).then(({data}) => data);
//     return result;
// };

// export const getNewsIds = async () => {
//   const result = await axios.get(newNewsUrl).then(({ data }) => data);
//   return result;
// };

const url = "https://newsapi.org/v2/top-headlines";
const API_KEY = "1055503713d0487c9ac246e93b6a132a";
const CATEGORY = "science";
const country = "ru";

export const loadNewsFetch = async () => {
  const result = await fetch(`${url}?country=${country}&apiKey=${API_KEY}`);
  console.log(result);
};
