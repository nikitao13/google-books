import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.API_KEY;

const fetchApi = async (searchTerm) => {
  let url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

  if (API_KEY) {
    url += `&key=${API_KEY}`;
  } else {
    console.log("continuing without api key...");
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("error fetching books.");
  }

  const { items } = await response.json();

  return items.map(({ volumeInfo }) => ({
    image: volumeInfo.imageLinks ?? "No image",
    author: volumeInfo.authors ?? ["Unknown Author"],
    title: volumeInfo.title ?? "No title",
    subtitle: volumeInfo.subtitle ?? "No subtitle",
    description: volumeInfo.description ?? "No description available",
    publisher: volumeInfo.publisher ?? "No publisher"
  }));
};

export default fetchApi;
