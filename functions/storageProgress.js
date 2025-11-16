// ========================================
// SISTEMA SALVATAGGIO CON LOCALSTORAGE
// ========================================
const STORAGE_KEY = 'calendarioAvventoProgress';

function loadProgressFromStorage() {
	try {
		const savedData = localStorage.getItem(STORAGE_KEY);
		if (savedData) {
			const loadedData = JSON.parse(savedData);
			console.log('✅ Progressi caricati da localStorage:', loadedData);
			return loadedData;
		}
	} catch (error) {
		console.error('❌ Errore nel caricamento da localStorage:', error);
	}
	return {};
}

function saveProgressToStorage() {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(gameProgress));
		console.log('💾 Progressi salvati in localStorage:', gameProgress);
	} catch (error) {
		console.error('❌ Errore nel salvataggio in localStorage:', error);
	}
}

let gameProgress = loadProgressFromStorage(); // Carica dati salvati

let totalGameScore = 0; // Punteggio totale in memoria

// ========================================
// SALVATAGGIO SEMPLIFICATO - MEMORIA JAVASCRIPT
// ========================================
function saveProgress(dayIndex, finalScore, attempts, hintsUsed) {
	gameProgress[dayIndex] = {
		solved: true,
		finalScore: finalScore,
		attempts: attempts,
		hintsUsed: hintsUsed,
		completedAt: new Date().toISOString()
	};
	console.log(`💾 Progresso salvato giorno ${dayIndex + 1}:`, gameProgress[dayIndex]);
	saveProgressToStorage();
}

function loadProgress() {
	return { ...gameProgress }; // Copia dell'oggetto in memoria
}

function getTotalScore() {
	return Object.values(gameProgress).reduce((sum, day) => sum + (day.finalScore || 0), 0);
}

function saveDayProgress(dayIndex, dayData) {
	gameProgress[dayIndex] = dayData;
	console.log(`💾 Dati giorno ${dayIndex + 1} aggiornati:`, dayData);
	saveProgressToStorage();
}
