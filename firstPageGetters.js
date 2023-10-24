//Get the selected entry semester
Qualtrics.SurveyEngine.addOnload(function() {
	const question = this;

	function getAnswerAndStore() {
		const choiceId = question.getSelectedChoices();
		console.log('Choice: ', choiceId);
		
		let entrySemester = 'None'
		
		switch(choiceId[0]) {
			case '1':
				entrySemester = 'Fall';
				break;
			case '2':
				entrySemester = 'Spring';
				break;
			case '3':
				entrySemester = 'Summer';
				break;
		}
		
		console.log('Initial semester selected: ', entrySemester);
		
		Qualtrics.SurveyEngine.setJSEmbeddedData('enteredSemester', entrySemester);
	}
	
	jQuery("#NextButton").on("click", getAnswerAndStore);
	
});

// Get the typed year
Qualtrics.SurveyEngine.addOnload(function() {
	function getAnswerAndStore() {
		const entryYear = document.getElementById("QR~QID3").value;
		console.log('Entry year: ', entryYear);
		
		Qualtrics.SurveyEngine.setJSEmbeddedData('enteredYear', entryYear);
	}
	
	jQuery("#NextButton").on("click", getAnswerAndStore);
	
});

// Get the typed expected graduation year
Qualtrics.SurveyEngine.addOnload(function() {

	function getAnswerAndStore() {
		const expectedGraduation = document.getElementById("QR~QID6").value;
		console.log('Graduation year: ', expectedGraduation);
		
		Qualtrics.SurveyEngine.setJSEmbeddedData('enteredGraduationYear', expectedGraduation);
	}
	
	jQuery("#NextButton").on("click", getAnswerAndStore);

});