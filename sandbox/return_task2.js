// function rectangle(width, height){
//
//     const rectPerimeter = width *2 + height * 2;
//     const rectArea = width * height;
//     return {perimeter: rectPerimeter, area: rectArea};
// }
//
// const rectangleData = rectangle(20, 30);
// console.log("Perimeter:", rectangleData.perimeter);  // 100 - периметр прямоугольника
// console.log("Area:", rectangleData.area);  // 600 - площадь прямоугольника

let input = document.getElementById('rectangle_sides_input');
let output = document.getElementById('result_div');
let btn = document.getElementById('result_button');

btn.addEventListener('click', function () {
    print_rectangle_result();
})

function print_rectangle_result() {

    output.innerHTML =   rectangle_calculate(input.value);



}

function rectangle_calculate(width, height) {

    const rect_Perimeter = width * 2 + height * 2;
    const rect_Area = width * height;
    return{perimeter:rect_Perimeter, area: rect_Area};
}

