// Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// Sample Output:
// 15;

// const result = sumArray([1, 2, 3, 4, 5])
// console.log(result) 

{
//
    const sumArray = (number: number[]) : number => {
        const result = number.reduce((num1, num2) =>  num1 + num2, 0)
        return result
    }
    
//
}