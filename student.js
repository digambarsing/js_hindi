// arrray to hold student marks

var marks=[89,78,76,80,79]


// function to find average

function averagemarks(marks){
    let score=0;
    for (let index = 0; index < marks.length; index++) {
        
        score+=marks[index];
        
    }
    return score/marks.length;
}


// function to find grade

function gradeofstudent(average) {
    if (average >= 90) {
        return 'A';
      } else if (average >= 80) {
        return 'B';
      } else if (average >= 70) {
        return
      } else if (average >= 60) {
        return 'D';
      } else {
        return 'F';
      }

    
}

// function to gave feedback

function feedbackofstudent(grades){
    switch(grades){
        case 'A':
            return "excellent";
        
        case 'B':
            return 'Good job!';
          case 'C':
            return 'Fair, keep it up.';
          case 'D':
            return 'Needs improvement.';
          default:
            return 'You should work harder.';
    }
}


const average=averagemarks(marks)
console.log(average);

const grades=gradeofstudent(average)
console.log(grades);

const feedback=feedbackofstudent(grades)
console.log(feedback);