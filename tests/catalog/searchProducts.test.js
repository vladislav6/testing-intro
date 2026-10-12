const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    expect(...searchProducts(products, 'Наушники')).toBe(products[0]);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    expect(...searchProducts(products, 'Чистый код')).toBe(products[5]);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    expect(...searchProducts(products, 'Настольная лампа')).toBe(products[3]);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    expect(...searchProducts(products, 'javascript')).toBe(products[2]);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    expect(...searchProducts(products, 'ЧЕХОЛ')).toBe(products[4]);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    expect(...searchProducts(products, 'наушники')).toBe(products[0]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '')).toEqual(products);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '   ')).toEqual(products);
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, '\t\n')).toEqual(products);
  });
});
