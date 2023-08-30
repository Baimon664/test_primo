import { CustomArray } from ".";

describe("Custom Array Test", () => {
  let customArray = new CustomArray();
  test("Should return empty array when both collections are empty", () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    let result: number[] = customArray.merge(collection1, collection2);
    expect(result).toEqual([]);
  });

  test("Should return collection2 when collection2 has value and collection1 is empty", () => {
    const collection1: number[] = [];
    const collection2: number[] = [1, 2, 3, 4, 6, 8, 9];
    let result: number[] = customArray.merge(collection1, collection2);
    expect(result).toEqual(collection2);
  });

  test("Should return collection1 when collection1 has value and collection2 is empty", () => {
    const collection1: number[] = [4, 7, 9, 10, 14, 16];
    const collection2: number[] = [];
    let result: number[] = customArray.merge(collection1, collection2);
    expect(result).toEqual(collection1);
  });

  test("Should return collection1 concat with collection2 when collection1 has lower value than collection2", () => {
    const collection1: number[] = [1, 5, 6, 9, 10];
    const collection2: number[] = [15, 29, 53, 75, 100];
    const expectResult = collection1.concat(collection2);
    let result: number[] = customArray.merge(collection1, collection2);
    expect(result).toEqual(expectResult);
  });

  test("Should return collection2 concat with collection1 when collection2 has lower value than collection1", () => {
    const collection1: number[] = [100, 230, 500, 480];
    const collection2: number[] = [1, 2, 5];
    const expectResult = collection2.concat(collection1);
    let result: number[] = customArray.merge(collection1, collection2);
    expect(result).toEqual(expectResult);
  });

  test("Should return sorted collection when collection1 and colection2 have value", () => {
    const collection1: number[] = [1, 20, 700];
    const collection2: number[] = [0, 17, 29];
    const expectResult = collection2.concat(collection1);
    let result: number[] = customArray.merge(collection1, collection2);
    expect(result).toEqual(expectResult.sort());
  });
});
