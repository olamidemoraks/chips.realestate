import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";
// headers: {
//     'X-RapidAPI-Key': '23856642c0mshd49f3146d704702p1b1863jsn7ce7d86a898a',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "23856642c0mshd49f3146d704702p1b1863jsn7ce7d86a898a",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  return data;
};
