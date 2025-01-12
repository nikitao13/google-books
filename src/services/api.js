const API_KEY = import.meta.env.VITE_API_KEY;

const fetchApi = async (searchTerm) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("error fetching books.");
  }
  const data = await response.json();

  return data.items.map((item) => ({
    image: item.volumeInfo.imageLinks
      ? item.volumeInfo.imageLinks
      : "No image provided",
    author: item.volumeInfo.authors
      ? item.volumeInfo.authors
      : ["Unknown Author"],
    title: item.volumeInfo.title,
    description: item.volumeInfo.description
      ? item.volumeInfo.description
      : "No description available",
  }));
};

export default fetchApi;
