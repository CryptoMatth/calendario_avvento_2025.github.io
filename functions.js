// 🆕 NUOVO: Funzione per mostrare messaggi periodici
function showPeriodicMessage(messageData, messageId) {
	const isRead = localStorage.getItem(`periodic_${messageId}`) === 'true';

	// Crea il modal della busta
	const envelopeModal = document.createElement('div');
	envelopeModal.className = 'envelope-modal';
	envelopeModal.id = 'periodicEnvelopeModal';
	
	const envelopeBox = document.createElement('div');
	envelopeBox.className = 'envelope-box';

	// Pulsante chiudi
	const closeBtn = document.createElement('div');
	closeBtn.className = 'envelope-close';
	closeBtn.innerHTML = '×';
	closeBtn.onclick = (e) => {
		e.stopPropagation();
		envelopeModal.remove();
	};

	// Icona busta
	const envelopeIcon = document.createElement('div');
	envelopeIcon.className = 'envelope-icon';
	envelopeIcon.innerHTML = isRead ? '📭' : '📬';
	
	// Titolo
	const envelopeTitle = document.createElement('div');
	envelopeTitle.className = 'envelope-text';
	envelopeTitle.innerHTML = messageData.title;

	// Pulsante
	const button = document.createElement('button');
	button.className = 'envelope-button';
	button.innerHTML = 'Leggi il Messaggio';
	button.onclick = (e) => {
		e.stopPropagation();
		localStorage.setItem(`periodic_${messageId}`, 'true');
		envelopeModal.remove();
		// Mostra il modal principale con il messaggio
		showPeriodicMessageContent(messageData);
	};

	// Assembla
	envelopeBox.appendChild(closeBtn);
	envelopeBox.appendChild(envelopeIcon);
	envelopeBox.appendChild(envelopeTitle);
	envelopeBox.appendChild(envelopeSubtitle);
	envelopeBox.appendChild(button);
	
	envelopeModal.appendChild(envelopeBox);

	// Chiudi cliccando fuori
	envelopeModal.onclick = (e) => {
		if (e.target === envelopeModal) {
			envelopeModal.remove();
		}
	};

	// Chiudi con ESC
	const handleEsc = (e) => {
		if (e.key === 'Escape') {
			envelopeModal.remove();
			document.removeEventListener('keydown', handleEsc);
		}
	};
	document.addEventListener('keydown', handleEsc);

	document.body.appendChild(envelopeModal);
}
