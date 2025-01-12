const API_KEY = import.meta.env.VITE_API_KEY;

const fetchApi = async (searchTerm) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("error fetching books.");
  }
  const { items } = await response.json();

  return items.map(({ volumeInfo }) => ({
    image: volumeInfo.imageLinks ?? "No image provided",
    author: volumeInfo.authors ?? ["Unknown Author"],
    title: volumeInfo.title ?? "No title",
    description: volumeInfo.description ?? "No description available",
  }));
};

export default fetchApi;
