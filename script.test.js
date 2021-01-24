const {add2,calcTax}= require('./script');
const { TestScheduler } = require('jest');

describe("add2のテスト",()=>{
    test("引数1で3を出力",()=>{
        expect(add2(1)).toEqual(3);
    });
    test("引数0で2を出力",()=>{
        expect(add2(0)).toEqual(2);
    });
    test("引数が数字以外でnullを出力",()=>{
        expect(add2("こんにちは")).toEqual(null);
    });
    // test("失敗するテスト",()=>{
    //     expect(2).toEqual(1);
    // });
});

// test ("テストが動いているか確認",()=>{
//     expect(1).toBe(1);
// });

// test("テストが動いているか確認2",()=>{
//     expect(1).toBe(10);
// });

//E2Eテスト
//統合テスト
//ユニットテスト(単体テスト)
