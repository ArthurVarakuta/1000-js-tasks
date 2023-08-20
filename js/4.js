a_map = document.getElementsByClassName("a_side_task4");
b_map = document.getElementsByClassName("b_side_task4");
c_map = document.getElementsByClassName("c_side_task4");
result_map = document.getElementsByClassName("result_task4");
btn = document.getElementById("btn_task4");


btn.addEventListener("click", function () {
    listener();
});

function listener() {
    get_all_triangle_results_from_map(triangles_map_array_maker(a_map, b_map, c_map, result_map));
}


function get_single_triangle_result(a, b, c, result) {
    result.innerHTML = calculate_triangle_area(parseInt(a.value), parseInt(b.value), parseInt(c.value));
    // console.log(parseInt(a.value), parseInt(b.value), parseInt(c.value));
}

function triangles_map_array_maker(a_map, b_map, c_map, result_map) {
    let triangles = [];
    for (let i = 0; i < a_map.length; i++) {
        let map = new Map();
        map.set(0, a_map.item(i));
        map.set(1, b_map.item(i));
        map.set(2, c_map.item(i));
        map.set(3, result_map.item(i));
        triangles.push(map);
    }
    return triangles;
}

function get_all_triangle_results_from_map(triangles) {
    // let triangle = new Map();
    triangles.forEach(function (triangle, i,triangles ){
        get_single_triangle_result(triangle.get(0), triangle.get(1), triangle.get(2), triangle.get(3));
      })
    }

function calculate_triangle_area(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        let s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else {
        alert("Please enter positive numbers");
    }
}