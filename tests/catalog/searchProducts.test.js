const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const resultId = searchProducts(products, 'Наушники');
    expect(resultId.map((item) => item.id)).toEqual([1]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const resultId = searchProducts(products, 'Чистый код');
    expect(resultId.map((item) => item.id)).toEqual([6]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const resultId = searchProducts(products, 'Настольная лампа');
    expect(resultId.map((item) => item.id)).toEqual([4]);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const resultId = searchProducts(products, 'javascript');
    expect(resultId.map((item) => item.id)).toEqual([3]);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const resultId = searchProducts(products, 'ЧЕХОЛ');
    expect(resultId.map((item) => item.id)).toEqual([5]);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    const resultId = searchProducts(products, 'наушники');
    expect(resultId.map((item) => item.id)).toEqual([1]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const resultId = searchProducts(products, '');
    expect(resultId.map((item) => item.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const resultId = searchProducts(products, '   ');
    expect(resultId.map((item) => item.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const resultId = searchProducts(products, '\t\n');
    expect(resultId.map((item) => item.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
