let jsonFinalPath = require('./MOCK_DATA_FinalStructure.json');
let jsonStudentPath = require('./StudentenMockData.json');

const makeArray = array => {
    let newArray = [];
    array.map(item => (
        newArray.push(JSON.parse(JSON.stringify(item)))
    ));
    return newArray;
};

export let finalDataArray = makeArray(jsonFinalPath);
export let studentDataArray = makeArray(jsonStudentPath);

const arrangeDataByStudent = (studentArray, existingArray) => {
    let newArray = existingArray;
    for (let i=0; i < existingArray.length; i++) {
        studentArray.forEach(item => {
            let foundName = item.name === existingArray[i].name
            if (foundName) {
              newArray[i].assignments.push({
                name: item.assignment, 
                difficulty: Number(item.difficulty), 
                funfactor: Number(item.funfactor)
              })
            }  
        })
    };
    return newArray;
};

export const wincData = arrangeDataByStudent(studentDataArray, finalDataArray);







