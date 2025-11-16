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



					  
const PERIODIC_TESTS = [
	{
		testNumber: 1,
		dayRange: [1, 2, 3, 4, 5],
		daysBetween: "Tra il 5 e il 6 dicembre",
		questions: createDetailedTestQuestions([1, 2, 3, 4, 5], FULL_CONSTELLATIONS.slice(0, 5))
	},
	{
		testNumber: 2,
		dayRange: [6, 7, 8, 9, 10],
		daysBetween: "Tra il 10 e l'11 dicembre",
		questions: createTestQuestions([6, 7, 8, 9, 10], FULL_CONSTELLATIONS.slice(5, 10))
	},
	{
		testNumber: 3,
		dayRange: [11, 12, 13, 14, 15],
		daysBetween: "Tra il 15 e il 16 dicembre",
		questions: createTestQuestions([11, 12, 13, 14, 15], FULL_CONSTELLATIONS.slice(10, 15))
	},
	{
		testNumber: 4,
		dayRange: [16, 17, 18, 19, 20],
		daysBetween: "Tra il 20 e il 21 dicembre",
		questions: createTestQuestions([16, 17, 18, 19, 20], FULL_CONSTELLATIONS.slice(15, 20))
	},
	{
		testNumber: 5,
		dayRange: [21, 22, 23, 24, 25],
		daysBetween: "Tra il 25 e il 26 dicembre",
		questions: createTestQuestions([21, 22, 23, 24, 25], FULL_CONSTELLATIONS.slice(20, 25))
	},
	{
		testNumber: 6,
		dayRange: [26, 27, 28, 29, 30],
		daysBetween: "Tra il 30 e il 31 dicembre",
		questions: createTestQuestions([26, 27, 28, 29, 30], FULL_CONSTELLATIONS.slice(25, 30))
	}
];
