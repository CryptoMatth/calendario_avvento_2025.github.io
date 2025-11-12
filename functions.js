// Funzione: Nascondi notifica
function hideNotification() {
	if (owlNotification) {
		owlNotification.classList.add('hidden');
	}
}

// Controlla se ci sono messaggi non letti nella casella di posta
function updateNotificationVisibility() {
	const readMessages = JSON.parse(localStorage.getItem('mailbox_read') || '[]');
	const allMessages = ['welcome', 'day5_milestone', 'day10_milestone']; // Tutti i messaggi possibili
	const unreadMessages = allMessages.filter(msg => !readMessages.includes(msg));

	if (unreadMessages.length > 0) {
		// Se ci sono messaggi non letti, mostra la notifica
		if (owlNotification) {
			owlNotification.classList.remove('hidden');
		}
	} else {
		// Se tutti i messaggi sono stati letti, nascondi la notifica
		hideNotification();
	}
}
