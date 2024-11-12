// Importar apenas uma vez no topo do arquivo
const { getData } = require('../src/swapiClient');

// Configurar o tempo limite globalmente para todos os testes
jest.setTimeout(10000);  // Aumenta o tempo limite para 10 segundos

describe('Testando Filmes', () => {
  test('Deve retornar a lista de filmes', async () => {
    const data = await getData('films/');
    expect(data).toHaveProperty('results');
    expect(Array.isArray(data.results)).toBe(true);
  });
});

describe('Testando o número de filmes', () => {
  test('Deve retornar 6 filmes', async () => {
    const data = await getData('films/');
    expect(data.results.length).toBe(6);
  });
});

describe('Testando rota inválida', () => {
  test('Deve retornar erro para rota inexistente', async () => {
    try {
      await getData('heroes/'); // Rota inválida
    } catch (error) {
      expect(error.message).toContain('Erro ao buscar dados de heroes');
    }
  });
});

describe('Testando Pessoas', () => {
  test('Deve retornar a lista de pessoas', async () => {
    const data = await getData('people/');
    expect(data).toHaveProperty('results');
    expect(Array.isArray(data.results)).toBe(true);
  });
});

describe('Testando Planeta Específico', () => {
  test('Deve retornar detalhes de Tatooine', async () => {
    const data = await getData('planets/1/');
    expect(data).toHaveProperty('name', 'Tatooine');
  });
});

describe('Testando Planetas', () => {
  test('Deve retornar a lista de planetas', async () => {
    const data = await getData('planets/');
    expect(data).toHaveProperty('results');
    expect(Array.isArray(data.results)).toBe(true);
  });
});

describe('Testando Paginação de Planetas', () => {
  test('Deve retornar uma nova página de planetas', async () => {
    const data = await getData('planets/?page=2');
    expect(data).toHaveProperty('next');
    expect(Array.isArray(data.results)).toBe(true);
  });
});

describe('Testando Espécies', () => {
  test('Deve retornar a lista de espécies', async () => {
    const data = await getData('species/');
    expect(data).toHaveProperty('results');
    expect(Array.isArray(data.results)).toBe(true);
  });
});

describe('Testando Nave Específica', () => {
  test('Deve retornar detalhes da Millennium Falcon', async () => {
    const data = await getData('starships/10/');
    expect(data).toHaveProperty('name', 'Millennium Falcon');
  });
});

describe('Testando Naves', () => {
  test('Deve retornar a lista de naves', async () => {
    const data = await getData('starships/');
    expect(data).toHaveProperty('results');
    expect(Array.isArray(data.results)).toBe(true);
  });
});
