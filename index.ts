interface MergeArray {
  merge(collection_1: number[], collection_2: number[]): number[];
}

export class CustomArray implements MergeArray {
  merge(collection_1: number[], collection_2: number[]): number[] {
    let index1 = 0; // index of collection 1
    let index2 = 0; // index of collection 2
    let result: number[] = [];
    while (index1 !== collection_1.length && index2 !== collection_2.length) {
      if (collection_1[index1] <= collection_2[index2]) {
        result.push(collection_1[index1]);
        index1 += 1;
      } else {
        result.push(collection_2[index2]);
        index2 += 1;
      }
    }
    if (index1 !== collection_1.length) {
      result = result.concat(collection_1.slice(index1));
    } else {
      result = result.concat(collection_2.slice(index2));
    }
    return result;
  }
}

// let customArray = new CustomArray();
// console.log(customArray.merge([1, 2, 3, 6, 7], [2, 3, 4, 5]));
