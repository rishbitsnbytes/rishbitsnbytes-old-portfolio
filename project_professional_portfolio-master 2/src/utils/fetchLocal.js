const fetchLocal = async (queryFileName) => {
  const receivedData = await fetch(`data/${queryFileName}.json`).then((response) => response.json()).then((data) => data);

  return receivedData;
};

export { fetchLocal };
