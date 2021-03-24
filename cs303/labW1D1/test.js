const student1={ studentId: "s101", quizAnswer:[1,1,2,3]};
const student2={ studentId: "s102", quizAnswer:[2,1,2,2]};
const student3={ studentId: "s103", quizAnswer:[13,1,3,4]};
const key = [3,1,2,4];
const quiz= [];
quiz.push(student1);
quiz.push(student2);
quiz.push(student3);
function gradeQuiz(quizArray,keyArrray){
    const report = {};
    for(const student of quizArray){
        const score = scoreQuiz(student.quizAnswer,keyArrray);
        report[student.studentId] = score;
    
    }
    return report;
}

