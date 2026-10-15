const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, 'all')).toEqual(products);
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, undefined)).toEqual(products);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(filterByCategory(products, '')).toEqual(products);
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    expect(filterByCategory(products, 'electronics'))
      .toEqual(products.filter((item) => item.id === 1 || item.id === 2));
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    expect(filterByCategory(products, 'books'))
      .toEqual(products.filter((item) => item.id === 3 || item.id === 6));
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    expect(filterByCategory(products, 'home'))
      .toEqual(products.filter((item) => item.id === 4 || item.id === 5));
  });
  test("'clothes' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'clothes')).toEqual([]);
  });
  test("'toys' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'toys')).toEqual([]);
  });
  test("'sports' возвращает пустой массив", () => {
    expect(filterByCategory(products, 'sports')).toEqual([]);
  });
});
