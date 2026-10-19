const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {
  test('ID 1 возвращает products[0]', ()=>{
    const id = 1;
    const expectedIds = products[0]
    
    const result = getProductById(products, id);

    expect(result).toBe(expectedIds)
  })

    test('ID 4 возвращает products[3]', ()=>{
    const id = 4;
    const expectedIds = products[3];
    
    const result = getProductById(products, id);

    expect(result).toBe(expectedIds)
  })

    test('ID 6 возвращает products[5]', ()=>{
    const id = 6;
    const expectedIds = products[5];
    
    const result = getProductById(products, id);

    expect(result).toBe(expectedIds)
  })
    test('ID 0 возвращает null', ()=>{
    const id = 0;
    const expectedIds = null;
    
    const result = getProductById(products, id);

    expect(result).toBe(expectedIds)
  })

    test('ID 999 возвращает null', ()=>{
    const id = 999;
    const expectedIds = null;
    
    const result = getProductById(products, id);

    expect(result).toBe(expectedIds)
  })

    test('ID -1 возвращает null', ()=>{
    const id = -1;
    const expectedIds = null;
    
    const result = getProductById(products, id);

    expect(result).toBe(expectedIds)
  })

    test("строковый ID '1' возвращает null", ()=>{
    const id = '1';
    const expectedIds = null;
    
    const result = getProductById(products, id);

    expect(result).toBe(expectedIds)
  })

    test('ID undefined возвращает null', ()=>{
    const id = undefined;
    const expectedIds = null;
    
    const result = getProductById(products, id);

    expect(result).toBe(expectedIds)
  })
    test('ID NaN возвращает null', ()=>{
    const id = NaN;
    const expectedIds = null;
    
    const result = getProductById(products, id);

    expect(result).toBe(expectedIds)
  })
});
