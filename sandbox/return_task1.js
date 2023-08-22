function rectangle(width, height){

    const perimeter = width *2 + height * 2;
    const area = width * height;
    return [perimeter, area];
}

const rectangleData = rectangle(20, 30);
// console.log(rectangleData[0]);  // 600 - площадь прямоугольника
// console.log(rectangleData[1]);  // 600 - площадь прямоугольника
console.log(...rectangleData);  // 100 - периметр прямоугольника
