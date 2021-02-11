//find the intersection of two sorted arrays

/*const intersection  = function(a,b){
    const result = [];
    for(let i =0 ; i < a.length ; i++){
        const valueA = a[i];
        for(let j = 0 ; j < b.length ; j++){
            const valueB = b[j];
            if(valueA === valueB){
                result.push(valueA);
                b = b.slice(j+1);
                break;
            }
        }
    }
    return result;
}*/

//O(n^2)

const intersection = function(a,b){
    const mergedArray = a.concat(b);
    mergedArray.sort();

    const result = [];
    for(let i = 0 ; i < mergedArray.length ; i++){
        if(mergedArray[i] === mergedArray[i+1]){
            result.push(mergedArray[i])
            i++
        }
    }
    return result;
}

//O(n)

console.log(intersection([1, 2, 3], [1, 3, 4, 7])); // [1, 3]
console.log(intersection([], [1, 3, 4, 7])); // []
console.log(intersection([], [])) // []
console.log(intersection([1,2,3] , [4,5,6])); // []
console.log(intersection([1,3] , [1, 1, 1,1 ,1])); // [1]
console.log(intersection([1, 1, 3], [1, 1, 1, 1])); // [1, 1]
console.log(intersection([-2, -1, 1, 3], [-1, 3, 6])); // [-1, 3]
console.log(intersection([1, 2, 2.5] , [1, 2.5])) // [1, 2.5]
