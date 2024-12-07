
// Sample Input 1:
// const car = new Car("Honda", "Civic", 2018);
// car.getCarAge();

// Sample Output 1:
// 6 (assuming current year is 2024)



// const car = new Car("Honda", "Civic", 2001);
// console.log(car.getCarAge())
{
    //
    class Car {
        make: string;
        model: string;
        year: number;
    
        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
    
        getCarAge(): number {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }


    //
}