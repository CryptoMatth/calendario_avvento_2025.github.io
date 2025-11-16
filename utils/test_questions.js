// ========================================
// NUOVA STRUTTURA: TEST PERIODICI OGNI 5 GIORNI
// ========================================

function createTestQuestions(dayRange, constellations) {
  return constellations.map((constellation, index) => {
	const shuffledOptions = shuffleArray(constellation.options);
	return {
	  dayNumber: dayRange[index],
	  constellation: constellation,
	  image: constellation.image,
	  options: shuffledOptions,
	  correctAnswer: constellation.name
	};
  });
}

function createDetailedTestQuestions(dayRange, constellations) {
  return constellations.map((constellation, index) => {
	// Esempio di domanda più particolare usando descrizione o hint
	const questionText = `Quale costellazione corrisponde a questa descrizione: "${constellation.description}"?`;

	// Opzioni mescolate
	const shuffledOptions = shuffleArray(constellation.options);

	return {
	  dayNumber: dayRange[index],
	  constellation,
	  name: constellation.name,
	  image: constellation.image,
	  questionText: questionText,
	  options: shuffledOptions,
	  correctAnswer: constellation.name,
	  hints: constellation.hints // opzionale, può servire per suggerimenti
	};
  });
}
