const BASE_URL = 'https://rickandmortyapi.com/api';

const request = (url, options) => fetch(`${BASE_URL}`, options)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} - ${response.statusText}`);
  })
  .then(result => result)


// export const getCharacter = () => request('/character');
// export const getLocation = () => request('/location');


export const getCharacter = async () => {
  try {
    const response = await fetch(`${BASE_URL}/character`)
    const parsedData = await response.json();

    if (parsedData.error) {
      throw new Error(parsedData.error)  // return // она обработается в catch
    }

    return parsedData.results;
  } catch (error) {
    throw new Error(error);
  }
};

export const getEpisodes = async () => {
  try {
    const response = await fetch(`${BASE_URL}/episode`)
    const parsedData = await response.json();

    if (parsedData.error) {
      throw new Error(parsedData.error)  // return // она обработается в catch
    }

    return parsedData.results;
  } catch (error) {
    throw new Error(error);
  }
}

export const getLocation = async () => {
  try {
    const response = await fetch(`${BASE_URL}/location`)
    const parsedData = await response.json();

    if (parsedData.error) {
      throw new Error(parsedData.error)  // return // она обработается в catch
    }

    return parsedData.results;
  } catch (error) {
    throw new Error(error);
  }
}

