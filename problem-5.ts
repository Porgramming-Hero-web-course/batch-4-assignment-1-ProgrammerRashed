// Sample Input:
// const person = { name: "Alice", age: 30 };
// console.log(getProperty(person, "name"));

// Sample Output:
// Alice;

// console.log(getProperty(person, "age"));


{
  //
  type Person = { name: string; age: number };

  const person: Person = { name: "Alice", age: 30 };

  const getProperty = <T, X extends keyof T>(obj: T, key: X): T[X] => {
    return obj[key];
  };

  //
}
