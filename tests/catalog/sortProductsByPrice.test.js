const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

const filteredById = (a, b, c) =>
  products.filter((item) => item.id === a || item.id === b || item.id === c);
const id134 = filteredById(1, 3, 4);
const id526 = filteredById(5, 2, 6);

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    expect(sortProductsByPrice(products, 'asc'))
      .toEqual(products.sort((first, second) => first.price - second.price));
  });
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    expect(sortProductsByPrice(products))
      .toEqual(products.sort((first, second) => first.price - second.price));
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    expect(sortProductsByPrice(id134, 'asc'))
      .toEqual(id134.sort((first, second) => first.price - second.price));
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    expect(sortProductsByPrice(products, 'desc'))
      .toEqual(products.sort((first, second) => second.price - first.price));
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    expect(sortProductsByPrice(id134, 'desc'))
      .toEqual(id134.sort((first, second) => second.price - first.price));
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    expect(sortProductsByPrice(id526, 'desc'))
      .toEqual(id526.sort((first, second) => second.price - first.price));
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    expect(sortProductsByPrice(id134, 'asc')).not.toBe(id134);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    expect(sortProductsByPrice(id134, 'desc')).not.toBe(id134);
  });
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    expect(sortProductsByPrice(products))
      .toEqual(products.sort((first, second) => first.price - second.price));
  });
});
