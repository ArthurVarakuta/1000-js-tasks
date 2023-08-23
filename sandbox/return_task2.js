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

let input_a = document.getElementById('rectangle_side_a_input');
let input_b = document.getElementById('rectangle_side_b_input');
let output = document.getElementById('result_div');
let btn = document.getElementById('result_button');



btn.addEventListener('click', function () {
print_rectangle_result();
})


function rectangle_calculate(width, height) {
        function rect_Perimeter(width, height) {
        let perimeter;
        return perimeter = parseInt(width * 2 + height * 2);
    }

    function rect_Area(width_, height_) {
        let area;
        return area = parseInt(width * height);

    }

    return ' Rectangle area is: ' + rect_Area(width, height) + ' Rectangle perimeter is: ' + rect_Perimeter(width, height);
}

function print_rectangle_result() {
    let width = input_a.value;
    let height = input_b.value;
    output.innerHTML = rectangle_calculate(width, height);

}
