interface ImageData {
  data: {
    images: {
      original: {
        url: string;
      };
    };
  };
}

export default async function getImage(keyword: string, apiKey: string): Promise<string> {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${keyword}`);
  const data: ImageData = await response.json();
  return data.data.images.original.url;
}