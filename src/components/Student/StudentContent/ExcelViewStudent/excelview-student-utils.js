export const createExcelData = (studentData, averages) => {
    
    const rowData = [];
    const assignments = studentData.assignments;

    averages.forEach((average, index) => {
        const assignment = {
            name: assignments[index].name,
            studentDifficulty: assignments[index].difficulty, 
            studentFunfactor: assignments[index].funfactor,
            averageDifficulty: average.averageDifficulty,
            averageFunfactor: average.averageFunFactor,
        };
        rowData.push(assignment);
    })
    return rowData;
}