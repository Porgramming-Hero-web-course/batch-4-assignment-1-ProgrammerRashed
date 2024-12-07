// Sample Input :
// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));

// Sample Output:
// {
//   name: "Alice",
//   age: 26,
//   email: "alice@example.com"
// }




// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { name: "Rashed" }));


{
    //
    type Profile= {
        name: string;
        age: number;
        email: string;
    }


    const updateProfile  = (person:Profile, changes:Partial<Profile>):Profile =>{

        const updatedProfile = {...person, ...changes}

        return updatedProfile;
    }



    //

}