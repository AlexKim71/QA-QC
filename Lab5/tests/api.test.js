const axios = require('axios');
const fetchPosts = require('../src/api');

jest.mock('axios');

describe('api:fetchPosts', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('повертає пости з відповіді API', async () => {
    const response = {
      data: [
        { userId: 1, id: 1, title: 'Тестова назва 1', body: 'Тестовий контент 1' },
        { userId: 1, id: 2, title: 'Тестова назва 2', body: 'Тестовий контент 2' },
      ],
    };
    axios.get.mockResolvedValue(response);

    const posts = await fetchPosts();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
    expect(posts).toEqual(response.data);
    expect(posts[1]).toMatchObject({ id: 2, title: 'Тестова назва 2' });
  });

  test('передає помилку API викликувачу', async () => {
    const error = new Error('Сервер недоступний');
    axios.get.mockRejectedValue(error);

    await expect(fetchPosts()).rejects.toThrow('Сервер недоступний');
  });
});
