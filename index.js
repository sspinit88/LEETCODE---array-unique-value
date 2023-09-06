
/// Вариант 1
/*

  function unique(arr) {
    return [...new Set(arr)];
  }

*/

/// Вариант 2
function unique(arr) {
  const obj = {};

  arr.forEach((item) => obj[item] = '');

  /// вывод строковых значений
  // return Object.keys(obj);

  /// вывод числовых значений. Подходит, если передается Array<number>
  return Object.keys(obj).map(item => Number(item));

}


// console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // [1, 2, 4, 3, 7]

// console.log(unique(['мыло', 'крыло', 'торт', 'мыло', 'крыло', 'топор']));
