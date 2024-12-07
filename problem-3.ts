// Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// Sample Output:
// 1;

// console.log(countWordOccurrences("I love typescript", "typescript"))

{
    const countWordOccurrences = (text: string, word: string) : number =>{

        const textArray = text.split(" ")

        const resultArray = textArray.filter( singleWord => singleWord === word)
        const result = resultArray.length
        
        return result

    }
}