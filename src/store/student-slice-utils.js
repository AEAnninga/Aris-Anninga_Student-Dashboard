import { wincData } from '../json-to-js/data-utils';

export const getSum = (total, num) => {
  return total + num;
};

export const calculateAverage = (scores) => {
  const average = (scores.reduce(getSum) / scores.length).toFixed(2);
  return Number(average);
};

export const getOverallAverage = (assignments, keyOne, keyTwo) => {
  let keyOneScores = assignments.map(item => Number(item[keyOne]));
  let keyTwoScores = assignments.map(item => Number(item[keyTwo]));
  let overallAverage = [calculateAverage(keyOneScores), calculateAverage(keyTwoScores)];
  return overallAverage 
};

export const initialStudentState = [];

wincData.forEach(item => {
  const averages = getOverallAverage(item.assignments, 'difficulty', 'funfactor');
  const hasMoreFun = averages[0] < averages[1];
  initialStudentState.push({
    id: item.id,
    name: item.name,
    showStudent: false,
    topFiveFun: false,
    hasMoreFun: hasMoreFun ? true : false,
    excelChecked: false,
    averages: {
      difficulty: averages[0],
      funfactor: averages[1]
    }
  });
});