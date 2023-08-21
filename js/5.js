// let reverted_word = document.getElementById("reverted_word_task5");
// word = "w3resource";
// reverted_word.innerHTML = Array.from(word).reverse();

//now harder

let input = document.getElementById('word_input-task5');
let output = document.getElementById('output_reversed_word_task5');
let btn_task5 = document.getElementById('reverse_button_task5');

btn_task5.addEventListener('click', function () {
    print_reverted_text();
})

function print_reverted_text() {
    output.innerHTML = input_text_reverter(input.value);
}

function input_text_reverter(input_text) {
    return Array.from(input_text).reverse().join('');
}