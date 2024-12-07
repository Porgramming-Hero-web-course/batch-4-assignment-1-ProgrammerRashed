// Sample Input:
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));

// Sample Output:
// true;

// console.log(validateKeys(person, ["name", "job"]));

{
    //
    const validateKeys = <T extends object>(obj: any, keys: (keyof T)[]): boolean => {
        return keys.every(key => key in obj);
    };

    //
}