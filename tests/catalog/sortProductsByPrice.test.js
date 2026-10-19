const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {

  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]",()=>{
     const querydirection = 'asc';
     const expectedIds = [3, 6, 5, 4, 2, 1];

    const result =sortProductsByPrice(products, querydirection);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

    test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]',()=>{
     const expectedIds = [3, 6, 5, 4, 2, 1];

    const result =sortProductsByPrice(products);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })
  
test("товары [1, 3, 4] с 'asc' сортируются как [3, 4, 1]", () => {
  const direction = "asc";
  const selectedProducts = products.filter((product) =>
    [1, 3, 4].includes(product.id)
  );
  const expectedIds = [3, 4, 1];

  const result = sortProductsByPrice(selectedProducts, direction);

  expect(result.map((item) => item.id)).toEqual(expectedIds);
});

    test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]",()=>{
     const querydirection = 'desc';
     const expectedIds = [1, 2, 4, 5, 6, 3];

    const result =sortProductsByPrice(products, querydirection);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })
    test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]",()=>{
     const querydirection = 'desc';
     const selectedProducts = [3, 1, 4].map((id) =>
  products.find((product) => product.id === id)
);
     const expectedIds = [1, 4, 3];

    const result =sortProductsByPrice(selectedProducts, querydirection);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })
    test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]",()=>{
     const querydirection = 'desc';
     const selectedProducts = [5, 2, 6].map((id) =>
  products.find((product) => product.id === id)
);
     const expectedIds = [2, 5, 6];

    const result =sortProductsByPrice(selectedProducts, querydirection);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })
test("'asc' не меняет исходный массив [1, 3, 4]", () => {
  const direction = 'asc';

  const selectedProducts = products.filter((product) =>
    [1, 3, 4].includes(product.id)
  );

  const expectedIds = [1, 3, 4];

  sortProductsByPrice(selectedProducts, direction);

  expect(selectedProducts.map(it => it.id)).toEqual(expectedIds);
});

  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
  const direction = 'desc';

  const selectedProducts = products.filter((product) =>
    [1, 3, 4].includes(product.id)
  );

  const expectedIds = [1, 3, 4];

  sortProductsByPrice(selectedProducts, direction);

  expect(selectedProducts.map(it => it.id)).toEqual(expectedIds);
});
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const expectedIds = products.map(it => it.id);
    sortProductsByPrice(products);

  expect(expectedIds).toEqual(products.map(it => it.id));
});
});
