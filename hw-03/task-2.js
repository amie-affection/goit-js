// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.

const countProps = function(obj) {

  const keys = Object.keys(obj);

  let total = 0;

for (const key in keys) {
    console.log(key);

    total += 1;

};

console.log('Total: ', total);

return total;

};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3