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

// ---------------- Last Year ----------------
const dlAdmittedToCandidacy = document.getElementById("QR~QID22");
if(dlAdmittedToCandidacy) {
  dlAdmittedToCandidacy.value = addSemester(initialSemester, initialYear, 5);
  dlAdmittedToCandidacy.classList.add("check-list");
  dlAdmittedToCandidacy.disable;
}


const dlApplyForGraduation = document.getElementById("QR~QID26");
if(dlApplyForGraduation) {
  dlApplyForGraduation.value = addSemester(initialSemester, initialYear, 5);
  dlApplyForGraduation.classList.add("check-list");
  dlApplyForGraduation.disable;
}


const dlAdvSubmitCertificate = document.getElementById("QR~QID27");
if(dlAdvSubmitCertificate) {
  dlAdvSubmitCertificate.value = deleteSemester(finalSemester, expectedGraduationYear, 1);
  dlAdvSubmitCertificate.classList.add("check-list");
  dlAdvSubmitCertificate.disable;
}


const dlCompleteSurvey = document.getElementById("QR~QID28");
if(dlCompleteSurvey) {
  dlCompleteSurvey.value = deleteSemester(finalSemester, expectedGraduationYear, 1);
  dlCompleteSurvey.classList.add("check-list");
  dlCompleteSurvey.disable;
}


const dlSubmitDissertationToGradSchool = document.getElementById("QR~QID29");
if(dlSubmitDissertationToGradSchool) {
  dlSubmitDissertationToGradSchool.value = deleteSemester(finalSemester, expectedGraduationYear, 1);
  dlSubmitDissertationToGradSchool.classList.add("check-list");
  dlSubmitDissertationToGradSchool.disable;
}


const dlSubmitFinalApprovedDissertation = document.getElementById("QR~QID30");
if(dlSubmitFinalApprovedDissertation) {
  dlSubmitFinalApprovedDissertation.value = deleteSemester(finalSemester, expectedGraduationYear, 1);
  dlSubmitFinalApprovedDissertation.classList.add("check-list");
  dlSubmitFinalApprovedDissertation.disable;
}


const dlPurchaseCopies = document.getElementById("QR~QID31");
if(dlPurchaseCopies) {
  dlPurchaseCopies.value = deleteSemester(finalSemester, expectedGraduationYear, 1);
  dlPurchaseCopies.classList.add("check-list");
  dlPurchaseCopies.disable;
}


const dlReturnBooks = document.getElementById("QR~QID32");
if(dlReturnBooks) {
  dlReturnBooks.value = deleteSemester(finalSemester, expectedGraduationYear, 1);
  dlReturnBooks.classList.add("check-list");
  dlReturnBooks.disable;
}

// ---------------- End of the last Year ----------------