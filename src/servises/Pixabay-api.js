const fetchData = {
  url: 'https://pixabay.com/api/',
  key: '20710972-75b99232bccd614faaca28eeb',
};

const fetchPixabay = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
  return fetch(`${fetchData.url}?key=${fetchData.key}&q=${searchQuery}&page=${currentPage}&image_type=photo&per_page=${pageSize}`)
    .then(response => response.json())
    .then(data => data.hits);
};

export default { fetchPixabay };
