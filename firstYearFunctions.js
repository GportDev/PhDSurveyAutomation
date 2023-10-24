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

// -------------- First Year ----------------
const dlBSPhDAssessmentInterview = document.getElementById("QR~QID35"); // BS to Phd
if(dlBSPhDAssessmentInterview) {
  dlBSPhDAssessmentInterview.value = addSemester(initialSemester, initialYear, 1);
  dlBSPhDAssessmentInterview.classList.add("check-list");
  dlBSPhDAssessmentInterview.disable;
}

const dlFinishTentative = document.getElementById("QR~QID7");
if(dlFinishTentative) {
  dlFinishTentative.value = addSemester(initialSemester, initialYear, 2);
  dlFinishTentative.classList.add("check-list");
  dlFinishTentative.disable;  
}

const dlChooseSupervisor = document.getElementById("QR~QID8");
if(dlChooseSupervisor) {
  dlChooseSupervisor.value = addSemester(initialSemester, initialYear, 2);
  dlChooseSupervisor.classList.add("check-list");
  dlChooseSupervisor.disable;
}

const dlChooseSupervisorCommittee = document.getElementById("QR~QID10");
if(dlChooseSupervisorCommittee) {
  dlChooseSupervisorCommittee.value = addSemester(initialSemester, initialYear, 2);
  dlChooseSupervisorCommittee.classList.add("check-list");
  dlChooseSupervisorCommittee.disable;
}

const dlBSPhDChooseSupervisorCommittee = document.getElementById("QR~QID33"); // Bs to Phd
if(dlBSPhDChooseSupervisorCommittee) {
  dlBSPhDChooseSupervisorCommittee.value = addSemester(initialSemester, initialYear, 4);
  dlBSPhDChooseSupervisorCommittee.classList.add("check-list");
  dlBSPhDChooseSupervisorCommittee.disable;
}

const dlSelectResearchTopic = document.getElementById("QR~QID13");
if(dlSelectResearchTopic) {
  dlSelectResearchTopic.value = addSemester(initialSemester, initialYear, 2);
  dlSelectResearchTopic.classList.add("check-list");
  dlSelectResearchTopic.disable;
}

// ---------------- End of the first Year ----------------