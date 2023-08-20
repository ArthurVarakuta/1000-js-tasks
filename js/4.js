a_side = document.getElementById("a_side_task4");
b_side = document.getElementById("b_side_task4");
c_side = document.getElementById("c_side_task4");
result_task4 = document.getElementById("result_task4");
btn = document.getElementById("btn_task4");

function get_input_params() {
  a=parseInt(a_side.value);
  b=parseInt(b_side.value);
  c=parseInt(c_side.value);
  console.log(a, b, c);
}

function calculate_area(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        let s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else {
        alert("Please enter positive numbers");
    }
}

btn.addEventListener("click", function () {
    get_input_params();
    result_task4.innerHTML = calculate_area(a, b, c);
})
