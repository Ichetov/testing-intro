const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {

    test("'Наушники' возвращает товар с ID 1",()=>{
     const query = 'Наушники';
     const expectedIds = [1];

    const result = searchProducts(products, query);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

    test("'Чистый код' возвращает товар с ID 6",()=>{
     const query = 'Чистый код';
     const expectedIds = [6];

    const result = searchProducts(products, query);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

    test("'Настольная лампа' возвращает товар с ID 4",()=>{
     const query = 'Настольная лампа';
     const expectedIds = [4];

    const result = searchProducts(products, query);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

     test("'javascript' возвращает товар с ID 3",()=>{
     const query = 'javascript';
     const expectedIds = [3];

    const result = searchProducts(products, query);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

      test("'ЧЕХОЛ' возвращает товар с ID 5",()=>{
     const query = 'ЧЕХОЛ';
     const expectedIds = [5];

    const result = searchProducts(products, query);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

    test("'наушники' возвращает товар с ID 1",()=>{
     const query = 'наушники';
     const expectedIds = [1];

    const result = searchProducts(products, query);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

    test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
     const query = "";
     const expectedIds = [1, 2, 3, 4, 5, 6];

    const result = searchProducts(products, query);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })
    test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
     const query = "                  ";
     const expectedIds = [1, 2, 3, 4, 5, 6];

    const result = searchProducts(products, query);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })

     test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]",()=>{
     const query =  '\t\n'               
     const expectedIds = [1, 2, 3, 4, 5, 6];

    const result = searchProducts(products, query);

    expect(result.map(it=> it.id)).toEqual(expectedIds)
  })
});
