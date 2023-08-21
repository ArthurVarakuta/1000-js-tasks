// let reverted_word = document.getElementById("reverted_word_task5");
// word = "w3resource";
// reverted_word.innerHTML = Array.from(word).reverse();

//now harder

let input = document.getElementById('word_input-task5');
let output = document.getElementById('output_reversed_word_task5');
let btn_task5 = document.getElementById('reverse_button_task5');

btn_task5.addEventListener('click', function () {
    get_input_text();
    input_text_reverter();

})

function get_input_text(input_text) {
    input_text= input.value;
    return input_text;
}

function input_text_reverter() {
    output.innerHTML  = Array.from(get_input_text()).reverse();
}