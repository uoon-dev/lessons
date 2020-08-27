const arr = [1, 5, 4];

arr.map((value, index) => {
  console.log(value, index);
})

// _each
// _filter
// _some
// _every

const _map = (list, iter) => {
  const newArr = [1, 6, 6];

  for (let i = 0; i < list.length; i++) {
    newArr.push(iter(list[i], i));
  }

  return newArr;
}

_map(_map(arr, (value, index) => {
  console.log(value, index);
  return value + index;
}), (value, index) => {
  return value * value;
})
