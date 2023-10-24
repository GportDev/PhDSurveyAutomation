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
  dlPreProposal.disable;
}

const dlRequiredCoursework = document.getElementById("QR~QID16");
if(dlRequiredCoursework) {
  dlRequiredCoursework.value = addSemester(initialSemester, initialYear, 4);
  dlRequiredCoursework.classList.add("check-list");
  dlRequiredCoursework.disable;
}


const dlRequestFiles = document.getElementById("QR~QID17");
if(dlRequestFiles) {
  dlRequestFiles.value = addSemester(initialSemester, initialYear, 4);
  dlRequestFiles.classList.add("check-list");
  dlRequestFiles.disable;
}


const dlTakeCompExam = document.getElementById("QR~QID18");
if(dlTakeCompExam) {
  dlTakeCompExam.value = addSemester(initialSemester, initialYear, 4);
  dlTakeCompExam.classList.add("check-list");
  dlTakeCompExam.disable;
}


const dlOralPresentation = document.getElementById("QR~QID20");
if(dlOralPresentation) {
  dlOralPresentation.value = addSemester(initialSemester, initialYear, 4);
  dlOralPresentation.classList.add("check-list");
  dlOralPresentation.disable;
}


const dlPresentResearchProposal = document.getElementById("QR~QID21");
if(dlPresentResearchProposal) {
  dlPresentResearchProposal.value = addSemester(initialSemester, initialYear, 4);
  dlPresentResearchProposal.classList.add("check-list");
  dlPresentResearchProposal.disable;
}


const dlRequestDissertationDefense = document.getElementById("QR~QID23");
if(dlRequestDissertationDefense) {
  dlRequestDissertationDefense.value = addSemester(initialSemester, initialYear, 4);
  dlRequestDissertationDefense.classList.add("check-list");
  dlRequestDissertationDefense.disable;
}


const dlDissertationDefense = document.getElementById("QR~QID24");
if(dlDissertationDefense) {
  dlDissertationDefense.value = addSemester(initialSemester, initialYear, 4);
  dlDissertationDefense.classList.add("check-list");
  dlDissertationDefense.disable;
}


const dlSubmitCopyOfDissertation = document.getElementById("QR~QID25");
if(dlSubmitCopyOfDissertation) {
  dlSubmitCopyOfDissertation.value = addSemester(initialSemester, initialYear, 4);
  dlSubmitCopyOfDissertation.classList.add("check-list");
  dlSubmitCopyOfDissertation.disable
}