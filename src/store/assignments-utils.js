import { wincData } from '../json-to-js/data-utils';

const getAssignmentNames = assignments => {
    let assignmentNames = [];
    assignments.forEach(assignment => assignmentNames.push(assignment.name));
    return assignmentNames;
};

const assignmentNames = getAssignmentNames(wincData[0].assignments);

const getAllAssignments = studentData => {
    let allAssignments = [];
    studentData.forEach(student => {
        allAssignments.push(student.assignments)
    });
    return allAssignments;
};

const allAssignments = getAllAssignments(wincData);

const getAssignmentScoreFromStudent = (assignmentName, assignments, key) => {
    let score;
    assignments.forEach(item => {
        let foundAssignment = item.name ===  assignmentName;
        if (foundAssignment) {
            score = parseInt(item[key])
        }
    });
    return score;
};

const getAssignmentScores = (assignmentName, allAssignments, key) => {
    let scores = [];
    for (let i=0; i < allAssignments.length; i++) {
        let assignmentsPerStudent = allAssignments[i];
        let score = getAssignmentScoreFromStudent(assignmentName, assignmentsPerStudent, key);
        scores.push(score);
    };
    return scores;
};

const getSum = (total, num) => {
    return total + num;
};

const calculateAverage = (scores) => {
    const average = (scores.reduce(getSum) / scores.length).toFixed(2);
    return Number(average);
};

const getAverageAllAssignments = (assignmentNames, allAssignments, keyOne, keyTwo) => {
    let allAssignmentsAverage = [];
    for (let i=0; i < assignmentNames.length; i++) {
        let difficultyScores = getAssignmentScores(assignmentNames[i], allAssignments, keyOne);
        let funfactorScores = getAssignmentScores(assignmentNames[i], allAssignments, keyTwo);
        let assignmentAverage = {
            name: assignmentNames[i],
            averageDifficulty: calculateAverage(difficultyScores),
            averageFunFactor: calculateAverage(funfactorScores)
        };
        allAssignmentsAverage.push(assignmentAverage);
    };
    return allAssignmentsAverage;
};

export const averageAllAssignments = getAverageAllAssignments(assignmentNames, allAssignments, 'difficulty', 'funfactor');

// decided not to use getOverallAverageFrontend and overallAverageFrontend, but like to keep the code

// const getOverallAverageFrontend = (assignmentAverages, keyOne, keyTwo) => {
//     let overallAverage;
//     let keyOneScores = assignmentAverages.map(item => item[keyOne]);
//     let keyTwoScores = assignmentAverages.map(item => item[keyTwo]);
//     overallAverage = {
//         [keyOne]: calculateAverage(keyOneScores),
//         [keyTwo]: calculateAverage(keyTwoScores) 
//     };
//     return overallAverage;
// };

// export const overallAverageFrontend = getOverallAverageFrontend(averageAllAssignments, 'averageDifficulty', 'averageFunFactor');