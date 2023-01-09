// var array = ["hello", "goodbye", "yessir"];

// array.forEach(function(greeting)
// {
//     console.log(greeting);
// });

const fruits = ['apple', 'banana', 'pineapple', 'papaya'];
const fruitInfo = {
  name: '',
  index: -1,
};

fruits.forEach(function(fruit, index, array) {
  this.name = fruit;
  this.index = index;
  console.log(this.name, this.index);
}, fruitInfo);

// let fruitsArray = [apple, banana, pineapple, papaya];
// fruitsArray.forEach(function fncn(value));