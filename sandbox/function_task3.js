// (function(){
//     console.log("Привет мир");
// }());
//
// (function (n){
//
//     var result = 1;
//     for(var i=1; i<=n; i++)
//         result *=i;
//     console.log("Факториал числа " + n + " равен " + result);
// }(4));

(function sqar_root(n) {
    var result = 1;

    for (var i = 0; i <= n; i++) {
        return Math.sqrt(i);
    }
    console.log('Sqare root of ' + n + " = " + result);
}(5));