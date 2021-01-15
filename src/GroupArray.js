function GroupArray(arr, size) {
  if (arr === undefined) {
    return false;
  }

  const removeNegativeNumbers = arr.filter((val) => val > 0);

  const divideArrayBySize = (filteredArr, groupSize) =>
    Array.from(
      {
        length: Math.ceil(filteredArr.length / groupSize),
      },
      (v, i) => filteredArr.slice(i * groupSize, i * groupSize + groupSize)
    );

  return divideArrayBySize(removeNegativeNumbers, size);
}

export default GroupArray;
