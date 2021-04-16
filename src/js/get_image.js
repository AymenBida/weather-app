/* eslint-disable import/no-unresolved */
const axios = require('axios');
/* eslint-enable import/no-unresolved */

export default async function getImage(keyword, apiKey) {
  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${keyword}`);
    return response.data.data.images.original.url;
  } catch (error) {
    return error;
  }
}