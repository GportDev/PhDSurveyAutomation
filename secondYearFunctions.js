const semesters = ['Spring', 'Summer', 'Fall'];
// const finalSemester = 'Fall'; //Entry + 8 semesters
// const finalYear = 2026; //Entry + 8 semesters

const addSemester = (entrySemester, entryYear, counter) => {
  const index = semesters.indexOf(entrySemester);

  const newIndex = (index + counter) % 3;

  const newYear = entryYear + Math.floor((index + counter) / 3);

  const finalDate = semesters[newIndex] + ' ' + newYear;

  return finalDate;
}

const deleteSemester = (finalSemester, finalYear, counter) => {
  const index = semesters.indexOf(finalSemester);

  const newIndex = (index - counter);
  const newYear = finalYear + Math.floor((index - counter) / 3);

  if (newYear < 0) {
    throw new Error("The year cannot be negative.");
  }

  const finalDate = semesters[newIndex] + ' ' + newYear;

  return finalDate;
}


// Get the entry year
const initialYear = Number(Qualtrics.SurveyEngine.getJSEmbeddedData('enteredYear'));
console.log("enteredYear: ", initialYear);


// Get the entry semester
const initialSemester = Qualtrics.SurveyEngine.getJSEmbeddedData('enteredSemester');
console.log("enteredSemester: ", initialSemester);


// Get the expected graduation year
const expectedGraduationYear = Number(Qualtrics.SurveyEngine.getJSEmbeddedData('enteredGraduationYear'));
console.log("enteredGraduationYear: ", expectedGraduationYear);


// Get the expected final semester
const finalSemester = addSemester(initialSemester, initialYear, 8).split(' ')[0];
console.log("Final semester: ", finalSemester);


const dlPreProposal = document.getElementById("QR~QID15");
if(dlPreProposal) {
  dlPreProposal.value = addSemester(initialSemester, initialYear, 3);
  dlPreProposal.classList.add("check-list");
  dlPreProposal.disabled = true;
}

const dlRequiredCoursework = document.getElementById("QR~QID16");
if(dlRequiredCoursework) {
  dlRequiredCoursework.value = addSemester(initialSemester, initialYear, 4);
  dlRequiredCoursework.classList.add("check-list");
  dlRequiredCoursework.disabled = true;
}


const dlFileRequest = document.getElementById("QR~QID17");
if(dlFileRequest) {
  dlFileRequest.value = addSemester(initialSemester, initialYear, 4);
  dlFileRequest.classList.add("check-list");
  dlFileRequest.disabled = true;
}


const dlTakeCompExam = document.getElementById("QR~QID18");
if(dlTakeCompExam) {
  dlTakeCompExam.value = addSemester(initialSemester, initialYear, 4);
  dlTakeCompExam.classList.add("check-list");
  dlTakeCompExam.disabled = true;
}