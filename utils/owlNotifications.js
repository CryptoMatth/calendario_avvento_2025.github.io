// Funzione: Nascondi notifica
function hideNotification() {
	const owlNotification = document.getElementById('owlNotification');
	if (owlNotification) {
		owlNotification.classList.add('hidden');
	}
}

// Controlla se ci sono messaggi non letti nella casella di posta
function updateNotificationVisibility() {
	const owlNotification = document.getElementById('owlNotification');
	const readMessages = JSON.parse(localStorage.getItem('mailbox_read') || '[]');
	const allMessages = ['welcome', 'day5_milestone', 'day10_milestone', 'day15_milestone', 'day20_milestone', 'day25_milestone', 'day30_milestone', 'day31_milestone']; // Tutti i messaggi possibili
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

// ===== GESTIONE MODAL GUFO CON BOX BUSTA INTERMEDIA =====
function initializeOwl() {
	const owlButton = document.getElementById('owlButton');
	//const gameModal = document.getElementById('gameModal');
	//const closeModal = document.getElementById('closeModal');
	const owlNotification = document.getElementById('owlNotification');
	
	hideNotification();
	updateNotificationVisibility();

	// Al caricamento pagina
	updateNotificationVisibility();

	//CONTROLLO PERIODICO MESSAGGI NON LETTI
	setInterval(function() {
		//console.log('🔍 Controllo periodico messaggi non letti...');
	  
		const readMessages = JSON.parse(localStorage.getItem('mailbox_read') || '[]');
		const savedProgress = JSON.parse(localStorage.getItem('calendarioAvventoProgress') || '{}');
	  
		// Messaggi che devono essere veramente presenti
		const potentialMessages = ['welcome'];  // Welcome è sempre presente
	  
		// Aggiungi milestone solo se il giorno relativo è stato completato
		if (savedProgress[4]?.solved) {
			potentialMessages.push('day5_milestone');  // Giorno 5 completato
		}
		if (savedProgress[9]?.solved) {
			potentialMessages.push('day10_milestone');  // Giorno 10 completato
		}
		if (savedProgress[14]?.solved) {
			potentialMessages.push('day15_milestone');  // Giorno 10 completato
		}
		if (savedProgress[19]?.solved) {
			potentialMessages.push('day20_milestone');  // Giorno 10 completato
		}
		if (savedProgress[24]?.solved) {
			potentialMessages.push('day25_milestone');  // Giorno 10 completato
		}
		if (savedProgress[29]?.solved) {
			potentialMessages.push('day30_milestone');  // Giorno 10 completato
		}
		if (savedProgress[30]?.solved) {
			potentialMessages.push('day31_milestone');  // Giorno 10 completato
		}
	  
		// Ora filtra solo i messaggi che REALMENTE ESISTONO
		const unreadMessages = potentialMessages.filter(msg => !readMessages.includes(msg));

		if (unreadMessages.length > 0) {
			// Ci sono messaggi non letti: MOSTRA la notifica
			const owlNotification = document.getElementById('owlNotification');
			if (owlNotification) {
				owlNotification.classList.remove('hidden');
				console.log('✅ Notifica MOSTRA (messaggi non letti trovati)');
			}
		} else {
			// Nessun messaggio non letto: NASCONDI la notifica
			const owlNotification = document.getElementById('owlNotification');
			if (owlNotification) {
				owlNotification.classList.add('hidden');
				//console.log('✅ Notifica NASCOSTA (tutti i messaggi letti)');
			}
		}
	}, 100);  // ← CAMBIA da 1000 a 3000 (3 secondi)


	// ===== EVENTO: Click sul gufo =====
	owlButton.addEventListener('click', function() {
		console.log('🦉 Click gufo - Aprendo la casella di posta');

		// Verifica che PERIODIC_MESSAGES esista
		if (typeof PERIODIC_MESSAGES === 'undefined') {
			console.error('❌ PERIODIC_MESSAGES non è definito!');
			return;
		}

		const readMessages = JSON.parse(localStorage.getItem('mailbox_read') || '[]');
		const savedProgress = JSON.parse(localStorage.getItem('calendarioAvventoProgress') || '{}');

		const messages = [];

		// MESSAGGIO BENVENUTO - SEMPLICE
		const welcomeMsg = {
			id: 'welcome',
			triggerDay: null,
			icon: '📬',
			subject: 'Benvenuto al Calendario',
			content: 'Benvenuto al Calendario dell\'Avvento!',
			image: 'foto/Sherlock_natalizio.png',
			fullDescription: '<p style="margin-bottom: 15px;"><strong>Crocchette</strong><br>Ehilà, sono io! Ti mando anche una foto per mostrarti come sto.<br>Ho saputo che quello sciagurato del tuo ragazzo l\'anno scorso ha provato a farti un calendario dell\'avvento a tema costellazioni ma ha fallito miseramente. Ci penso io, dai.<br>Non cercare troppi bug per favore, non è semplice programmare con queste zampine al Polo Nord.<br>Buon divertimento, e buon calendario dell\'avvento!</p>'
		};

		// MESSAGGI MILESTONE - PRESI DIRETTAMENTE DA PERIODIC_MESSAGES
		const milestoneMessages = [];

		// DAY 5
		if (PERIODIC_MESSAGES && PERIODIC_MESSAGES.day5_milestone) {  // ← CAMBIA a day5_MILESTONE
			milestoneMessages.push({
				id: 'day5_milestone',
				triggerDay: 5,
				icon: '📬',
				subject: PERIODIC_MESSAGES.day5_milestone.title || 'Mezzo Cammino!',  // ← CAMBIA
				image: PERIODIC_MESSAGES.day5_milestone.image || 'foto/Sherlock_natalizio.png',  // ← CAMBIA
				fullDescription: PERIODIC_MESSAGES.day5_milestone.description || 'Messaggio'  // ← CAMBIA
			});
			console.log('✅ DAY5 caricato:', PERIODIC_MESSAGES.day5_milestone.title);  // ← CAMBIA
		} else {
			console.warn('⚠️ day5_milestone non trovato in PERIODIC_MESSAGES');  // ← CAMBIA
		}
		updateNotificationVisibility();

		// DAY 10
		if (PERIODIC_MESSAGES && PERIODIC_MESSAGES.day10_milestone) {  // ← CAMBIA a day10_MILESTONE
			milestoneMessages.push({
				id: 'day10_milestone',
				triggerDay: 10,
				icon: '📬',
				subject: PERIODIC_MESSAGES.day10_milestone.title || 'Primo Test Completato!',  // ← CAMBIA
				content: PERIODIC_MESSAGES.day10_milestone.subtitle || 'Complimenti!',  // ← CAMBIA
				image: PERIODIC_MESSAGES.day10_milestone.image || 'foto/Sherlock_natalizio.png',  // ← CAMBIA
				fullDescription: PERIODIC_MESSAGES.day10_milestone.description || 'Messaggio'  // ← CAMBIA
			});
			console.log('✅ DAY10 caricato:', PERIODIC_MESSAGES.day10_milestone.title);  // ← CAMBIA
		} else {
			console.warn('⚠️ day10_milestone non trovato in PERIODIC_MESSAGES');  // ← CAMBIA
		}
		updateNotificationVisibility();
		
		// DAY 15
		if (PERIODIC_MESSAGES && PERIODIC_MESSAGES.day15_milestone) {  // ← CAMBIA a day15_milestone
			milestoneMessages.push({
				id: 'day15_milestone',
				triggerDay: 15,
				icon: '📬',
				subject: PERIODIC_MESSAGES.day15_milestone.title || 'Primo Test Completato!',  // ← CAMBIA
				content: PERIODIC_MESSAGES.day15_milestone.subtitle || 'Complimenti!',  // ← CAMBIA
				image: PERIODIC_MESSAGES.day15_milestone.image || 'foto/Sherlock_natalizio.png',  // ← CAMBIA
				fullDescription: PERIODIC_MESSAGES.day15_milestone.description || 'Messaggio'  // ← CAMBIA
			});
			console.log('✅ DAY10 caricato:', PERIODIC_MESSAGES.day15_milestone.title);  // ← CAMBIA
		} else {
			console.warn('⚠️ day15_milestone non trovato in PERIODIC_MESSAGES');  // ← CAMBIA
		}
		updateNotificationVisibility();
		
		// DAY 20
		if (PERIODIC_MESSAGES && PERIODIC_MESSAGES.day20_milestone) {  // ← CAMBIA a day20_milestone
			milestoneMessages.push({
				id: 'day20_milestone',
				triggerDay: 20,
				icon: '📬',
				subject: PERIODIC_MESSAGES.day20_milestone.title || 'Primo Test Completato!',  // ← CAMBIA
				content: PERIODIC_MESSAGES.day20_milestone.subtitle || 'Complimenti!',  // ← CAMBIA
				image: PERIODIC_MESSAGES.day20_milestone.image || 'foto/Sherlock_natalizio.png',  // ← CAMBIA
				fullDescription: PERIODIC_MESSAGES.day20_milestone.description || 'Messaggio'  // ← CAMBIA
			});
			console.log('✅ DAY10 caricato:', PERIODIC_MESSAGES.day20_milestone.title);  // ← CAMBIA
		} else {
			console.warn('⚠️ day20_milestone non trovato in PERIODIC_MESSAGES');  // ← CAMBIA
		}
		updateNotificationVisibility();		

		// DAY 25
		if (PERIODIC_MESSAGES && PERIODIC_MESSAGES.day25_milestone) {  // ← CAMBIA a day25_milestone
			milestoneMessages.push({
				id: 'day25_milestone',
				triggerDay: 25,
				icon: '📬',
				subject: PERIODIC_MESSAGES.day25_milestone.title || 'Primo Test Completato!',  // ← CAMBIA
				content: PERIODIC_MESSAGES.day25_milestone.subtitle || 'Complimenti!',  // ← CAMBIA
				image: PERIODIC_MESSAGES.day25_milestone.image || 'foto/Sherlock_natalizio.png',  // ← CAMBIA
				fullDescription: PERIODIC_MESSAGES.day25_milestone.description || 'Messaggio'  // ← CAMBIA
			});
			console.log('✅ DAY10 caricato:', PERIODIC_MESSAGES.day25_milestone.title);  // ← CAMBIA
		} else {
			console.warn('⚠️ day25_milestone non trovato in PERIODIC_MESSAGES');  // ← CAMBIA
		}
		updateNotificationVisibility();

		// DAY 30
		if (PERIODIC_MESSAGES && PERIODIC_MESSAGES.day30_milestone) {  // ← CAMBIA a day30_milestone
			milestoneMessages.push({
				id: 'day30_milestone',
				triggerDay: 30,
				icon: '📬',
				subject: PERIODIC_MESSAGES.day30_milestone.title || 'Primo Test Completato!',  // ← CAMBIA
				content: PERIODIC_MESSAGES.day30_milestone.subtitle || 'Complimenti!',  // ← CAMBIA
				image: PERIODIC_MESSAGES.day30_milestone.image || 'foto/Sherlock_natalizio.png',  // ← CAMBIA
				fullDescription: PERIODIC_MESSAGES.day30_milestone.description || 'Messaggio'  // ← CAMBIA
			});
			console.log('✅ DAY10 caricato:', PERIODIC_MESSAGES.day30_milestone.title);  // ← CAMBIA
		} else {
			console.warn('⚠️ day30_milestone non trovato in PERIODIC_MESSAGES');  // ← CAMBIA
		}
		updateNotificationVisibility();

		// DAY 31
		if (PERIODIC_MESSAGES && PERIODIC_MESSAGES.day31_milestone) {  // ← CAMBIA a day31_milestone
			milestoneMessages.push({
				id: 'day31_milestone',
				triggerDay: 31,
				icon: '📬',
				subject: PERIODIC_MESSAGES.day31_milestone.title || 'Primo Test Completato!',  // ← CAMBIA
				content: PERIODIC_MESSAGES.day31_milestone.subtitle || 'Complimenti!',  // ← CAMBIA
				image: PERIODIC_MESSAGES.day31_milestone.image || 'foto/Sherlock_natalizio.png',  // ← CAMBIA
				fullDescription: PERIODIC_MESSAGES.day31_milestone.description || 'Messaggio'  // ← CAMBIA
			});
			console.log('✅ DAY10 caricato:', PERIODIC_MESSAGES.day31_milestone.title);  // ← CAMBIA
		} else {
			console.warn('⚠️ day31_milestone non trovato in PERIODIC_MESSAGES');  // ← CAMBIA
		}
		updateNotificationVisibility();					

		
		// Aggiungi sempre il benvenuto
		messages.push({
			...welcomeMsg,
			isOpen: readMessages.includes('welcome'),
			icon: readMessages.includes('welcome') ? '📭' : '📬'
		});

		// Aggiungi milestone se il giorno è completato
		milestoneMessages.forEach(msg => {
			const dayEntry = savedProgress[msg.triggerDay - 1];
			if (dayEntry && dayEntry.solved) {
				messages.unshift({
					...msg,
					isOpen: readMessages.includes(msg.id),
					icon: readMessages.includes(msg.id) ? '📭' : '📬'
				});
				console.log('✅ Messaggio milestone aggiunto:', msg.subject);
			}
		});

		updateNotificationVisibility();

		console.log('📋 Messaggi totali:', messages.length, messages);

		// ===== CREA MODAL CASELLA =====
		const mailboxModal = document.createElement('div');
		mailboxModal.className = 'mailbox-modal';

		const container = document.createElement('div');
		container.className = 'mailbox-container';

		const closeBtn = document.createElement('button');
		closeBtn.className = 'mailbox-close-btn';
		closeBtn.innerHTML = '×';
		closeBtn.onclick = (e) => {
			e.stopPropagation();
			mailboxModal.remove();
		};

		const title = document.createElement('h2');
		title.className = 'mailbox-title';
		title.innerHTML = '📬 Casella di Posta';

		const messagesList = document.createElement('div');
		messagesList.className = 'messages-list';

		messages.forEach((msg) => {
			const item = document.createElement('div');
			item.className = 'mailbox-item';

			const header = document.createElement('div');
			header.className = 'mailbox-item-header';

			const icon = document.createElement('span');
			icon.className = 'mailbox-icon';
			icon.innerHTML = msg.icon;

			const subject = document.createElement('span');
			subject.className = 'mailbox-subject';
			subject.innerHTML = msg.subject;

			header.appendChild(icon);
			header.appendChild(subject);
			item.appendChild(header);

			// CLICK
			item.onclick = (e) => {
				e.stopPropagation();

				if (!readMessages.includes(msg.id)) {
				readMessages.push(msg.id);
				localStorage.setItem('mailbox_read', JSON.stringify(readMessages));
				}
				// Aggiorna la visibilità della notifica dopo aver letto il messaggio
				updateNotificationVisibility();

				icon.innerHTML = '📭';

				// MODAL MESSAGGI
				const messageModal = document.createElement('div');
				messageModal.style.position = 'fixed';
				messageModal.style.top = '0';
				messageModal.style.left = '0';
				messageModal.style.width = '100%';
				messageModal.style.height = '100%';
				messageModal.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
				messageModal.style.display = 'flex';
				messageModal.style.alignItems = 'center';
				messageModal.style.justifyContent = 'center';
				messageModal.style.zIndex = '3000';
				messageModal.style.backdropFilter = 'blur(5px)';
				messageModal.style.overflowY = 'auto';
				messageModal.style.padding = '20px';

				const messageContent = document.createElement('div');
				messageContent.style.background = 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)';
				messageContent.style.border = '3px solid #FFD700';
				messageContent.style.borderRadius = '20px';
				messageContent.style.padding = '40px';
				messageContent.style.maxWidth = '700px';
				messageContent.style.width = '100%';
				messageContent.style.maxHeight = '90vh';
				messageContent.style.overflowY = 'auto';
				messageContent.style.position = 'relative';
				messageContent.style.boxShadow = '0 10px 50px rgba(255, 215, 0, 0.3)';

				// CHIUDI X
				const closeMessageBtn = document.createElement('button');
				closeMessageBtn.innerHTML = '×';
				closeMessageBtn.style.position = 'absolute';
				closeMessageBtn.style.top = '15px';
				closeMessageBtn.style.right = '15px';
				closeMessageBtn.style.background = '#8B0000';
				closeMessageBtn.style.color = 'white';
				closeMessageBtn.style.border = '2px solid #FFD700';
				closeMessageBtn.style.borderRadius = '50%';
				closeMessageBtn.style.width = '40px';
				closeMessageBtn.style.height = '40px';
				closeMessageBtn.style.fontSize = '1.5rem';
				closeMessageBtn.style.cursor = 'pointer';
				closeMessageBtn.style.transition = 'all 0.3s';
				closeMessageBtn.style.display = 'flex';
				closeMessageBtn.style.alignItems = 'center';
				closeMessageBtn.style.justifyContent = 'center';

				closeMessageBtn.onmouseover = () => {
					closeMessageBtn.style.background = '#FF0000';
					closeMessageBtn.style.transform = 'rotate(90deg)';
				};
				closeMessageBtn.onmouseout = () => {
					closeMessageBtn.style.background = '#8B0000';
					closeMessageBtn.style.transform = 'rotate(0deg)';
				};

				closeMessageBtn.onclick = (e) => {
					e.stopPropagation();
					messageModal.remove();
				};

				messageContent.appendChild(closeMessageBtn);

				// TITOLO
				const msgTitle = document.createElement('h2');
				msgTitle.style.color = '#FFD700';
				msgTitle.style.fontSize = '2rem';
				msgTitle.style.fontWeight = 'bold';
				msgTitle.style.marginBottom = '20px';
				msgTitle.style.textAlign = 'center';
				msgTitle.innerHTML = msg.subject;
				messageContent.appendChild(msgTitle);

				// IMMAGINE - IMPORTANTE!
				if (msg.image) {
					console.log('🖼️ Tentando di caricare immagine:', msg.image);

					const img = document.createElement('img');
					img.src = msg.image;
					img.alt = msg.subject;
					img.style.width = '100%';
					img.style.maxHeight = '400px';
					img.style.objectFit = 'cover';
					img.style.borderRadius = '10px';
					img.style.marginBottom = '20px';
					img.style.border = '2px solid #FFD700';
					img.style.cursor = 'pointer';

					img.onerror = () => {
						console.error('❌ ERRORE: Immagine non trovata:', msg.image);
						img.style.display = 'none';
					};

					img.onload = () => {
						console.log('✅ SUCCESSO: Immagine caricata:', msg.image);
					};

					// CLICK PER INGRANDIRE L'IMMAGINE
					img.addEventListener('click', function(e) {
						e.stopPropagation();
						console.log('🖼️ Click rilevato su immagine nel messaggio');

						// Crea il modal fullscreen
						const modal = document.createElement('div');
						modal.style.position = 'fixed';
						modal.style.top = '0';
						modal.style.left = '0';
						modal.style.width = '100%';
						modal.style.height = '100%';
						modal.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
						modal.style.display = 'flex';
						modal.style.alignItems = 'center';
						modal.style.justifyContent = 'center';
						modal.style.zIndex = '9999';
						modal.style.backdropFilter = 'blur(5px)';
						modal.style.animation = 'fadeIn 0.3s ease-in-out';

						// Pulsante X
						const closeBtn = document.createElement('button');
						closeBtn.innerHTML = '✕';
						closeBtn.style.position = 'absolute';
						closeBtn.style.top = '20px';
						closeBtn.style.right = '20px';
						closeBtn.style.fontSize = '2.5rem';
						closeBtn.style.color = 'white';
						closeBtn.style.background = 'none';
						closeBtn.style.border = 'none';
						closeBtn.style.cursor = 'pointer';
						closeBtn.style.zIndex = '10000';
						closeBtn.style.transition = 'transform 0.2s';
						closeBtn.style.padding = '10px 15px';

						closeBtn.onmouseover = () => {
							closeBtn.style.transform = 'scale(1.3)';
							closeBtn.style.color = '#ff6b6b';
						};
						closeBtn.onmouseout = () => {
							closeBtn.style.transform = 'scale(1)';
							closeBtn.style.color = 'white';
						};
						closeBtn.onclick = (evt) => {
							evt.stopPropagation();
							console.log('🖼️ X cliccato, chiudendo modal');
							modal.remove();
						};

						// Immagine ingrandita
						const fullImg = document.createElement('img');
						fullImg.src = msg.image;
						fullImg.style.maxWidth = '90vw';
						fullImg.style.maxHeight = '90vh';
						fullImg.style.objectFit = 'contain';
						fullImg.style.borderRadius = '10px';
						fullImg.style.cursor = 'auto';
						fullImg.onclick = (evt) => evt.stopPropagation();

						// Hint in basso
						const hint = document.createElement('div');
						hint.innerHTML = 'Clicca per chiudere';
						hint.style.position = 'absolute';
						hint.style.bottom = '20px';
						hint.style.left = '50%';
						hint.style.transform = 'translateX(-50%)';
						hint.style.color = '#aaa';
						hint.style.fontSize = '0.9rem';
						hint.style.opacity = '0.7';
						hint.style.pointerEvents = 'none';

						// Chiudi cliccando fuori
						modal.onclick = () => {
							console.log('🖼️ Click esterno, chiudo modal');
							modal.remove();
						};

						// Chiudi con ESC
						const handleEsc = (e) => {
							if (e.key === 'Escape') {
								console.log('🖼️ ESC premuto, chiudo modal');
								modal.remove();
								document.removeEventListener('keydown', handleEsc);
							}
						};
						document.addEventListener('keydown', handleEsc);

						// Assembla il modal
						modal.appendChild(closeBtn);
						modal.appendChild(fullImg);
						modal.appendChild(hint);
						document.body.appendChild(modal);

						console.log('🖼️ Modal immagine creato');
					});

					messageContent.appendChild(img);  // AGGIUNGE L'IMMAGINE AL DOM!
					console.log('✅ Immagine aggiunta al DOM');
				} else {
					console.warn('⚠️ msg.image è vuoto o undefined');
				}

				// TESTO
				const msgText = document.createElement('div');
				msgText.style.color = '#e0e0e0';
				msgText.style.fontSize = '1rem';
				msgText.style.lineHeight = '1.8';
				msgText.style.marginTop = '20px';
				msgText.innerHTML = msg.fullDescription || msg.content;
				messageContent.appendChild(msgText);

				messageModal.appendChild(messageContent);

				messageModal.onclick = (e) => {
					if (e.target === messageModal) {
						messageModal.remove();
					}
				};

				const handleEsc = (e) => {
					if (e.key === 'Escape') {
						messageModal.remove();
						document.removeEventListener('keydown', handleEsc);
					}
				};
				document.addEventListener('keydown', handleEsc);

				document.body.appendChild(messageModal);
				console.log('📭 Modal messaggio aperto:', msg.subject);
			};

			messagesList.appendChild(item);
		});

		container.appendChild(closeBtn);
		container.appendChild(title);
		container.appendChild(messagesList);
		mailboxModal.appendChild(container);

		mailboxModal.onclick = (e) => {
			if (e.target === mailboxModal) {
				mailboxModal.remove();
			}
		};

		const handleEsc = (e) => {
			if (e.key === 'Escape') {
				mailboxModal.remove();
				document.removeEventListener('keydown', handleEsc);
			}
		};
		document.addEventListener('keydown', handleEsc);

		document.body.appendChild(mailboxModal);
		console.log('📬 Casella di posta aperta con', messages.length, 'messaggi');
	});
}
