// Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
// [1, 2, 3, 4, 5]

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 3,2,5]))

{
    //
    const removeDuplicates = (numbers: number[]): number[] => {
        const uniqueArray = numbers.filter((num, index) => numbers.indexOf(num) === index);
        return uniqueArray; 
    }
    //
}