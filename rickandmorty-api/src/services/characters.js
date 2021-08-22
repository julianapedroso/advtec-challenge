import api from './api';

const getCharacters = async (page = 1) => {
  try {
    const response = await api.get('character', { params: { page } });
    return { ...response.data };
  } catch (err) {
    return {
      info: {},
      results: [],
    };
  }
};

export { getCharacters };
