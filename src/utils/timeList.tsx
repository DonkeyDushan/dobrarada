const generateTimeList = (interval: number) => {
  const MS_IN_DAY = 86400000;
  const MS_IN_MINUTE = 60000;
  const newArr = [...Array(MS_IN_DAY/(interval * MS_IN_MINUTE)).keys()].map(i => i * (interval * MS_IN_MINUTE));
  return newArr;
};

export default generateTimeList;
