// Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// Sample Output 1:
// 78.54;

// Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// Sample Output 2:
// 24;


// console.log(calculateShapeArea({
//     shape: "rectangle",
//     width: 4,
//     height: 6,
//   }))

{
  //

  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (value: Shape) => {
    if (value.shape === "circle") {
      return Math.PI * value.radius ** 2;
    } else {
      return value.width * value.height;
    }
  };



  //
}
