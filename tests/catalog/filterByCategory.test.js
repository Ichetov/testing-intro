const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("all возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
    const category = 'all';
    const expectedIds = [1, 2, 3, 4, 5, 6];

    const result = filterByCategory(products, category);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
        const category = undefined;
         const expectedIds = [1, 2, 3, 4, 5, 6];

    const result = filterByCategory(products, category);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
     const category = "";
     const expectedIds = [1, 2, 3, 4, 5, 6];

    const result = filterByCategory(products, category);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

    test("'electronics' возвращает товары с ID [1, 2]",()=>{
     const category = 'electronics';
     const expectedIds = [1, 2];

    const result = filterByCategory(products, category);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

     test("'books' возвращает товары с ID [3, 6]",()=>{
     const category = 'books';
     const expectedIds = [3, 6];

    const result = filterByCategory(products, category);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

     test("'home' возвращает товары с ID [4, 5]",()=>{
     const category = 'home';
     const expectedIds = [4, 5];

    const result = filterByCategory(products, category);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })
       test("'clothes' возвращает пустой массив",()=>{
     const category = 'clothes';
     const expectedIds = [];

    const result = filterByCategory(products, category);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

       test("'toys' возвращает пустой массив",()=>{
     const category = 'toys';
     const expectedIds = [];

    const result = filterByCategory(products, category);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })
       test("'sports' возвращает пустой массив",()=>{
     const category = 'sports';
     const expectedIds = [];

    const result = filterByCategory(products, category);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })
});
