let num = [1, 2, 3, 4, 5];
var newNumArray = num.map(function square(origin){
    return origin * origin;
});
console.log(newNumArray);