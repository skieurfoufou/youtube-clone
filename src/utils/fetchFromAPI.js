import axios from "axios";
// const options = {
//     method: 'GET',
//     url: 'https://youtube-v31.p.rapidapi.com/captions',
//     params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
//     headers: {
//       'X-RapidAPI-Key': 'cb16907690msh18f93810452a958p1296fbjsn88b4f9e030c3',
//       'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
//   };
export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
