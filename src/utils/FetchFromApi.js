import axios from 'axios';

const Base_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const FetchFromApi = async (url) => {
      const response = await axios.get(`${Base_URL}/${url}` , options);

      return response.data;

  }