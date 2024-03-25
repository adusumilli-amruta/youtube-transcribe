import axios from "axios";

const requestOptions = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {},
  headers: {
    'X-RapidAPI-Key': process.env.YT_KEY,
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
};

const fetchApi = async (id) => {
  requestOptions.params = { id };
  const response = await axios.request(requestOptions)
  return response;
}

export { fetchApi };