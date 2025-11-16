			// ========================================
			// Utility functions
			// ========================================
   
			function shuffleArray(array) {
				const shuffled = [...array]; 
				for (let i = shuffled.length - 1; i > 0; i--) {
					const j = Math.floor(Math.random() * (i + 1));
					[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
				}
				return shuffled;
			}
	  
			function generateBackupCode(data) {
				const jsonString = JSON.stringify(data);
				return btoa(encodeURIComponent(jsonString));
			}
	  
			function parseBackupCode(code) {
				try {
					const jsonString = decodeURIComponent(atob(code));
					return JSON.parse(jsonString);
				} catch (error) {
					throw new Error('Codice di backup non valido');
				}
			}
	  
			function showToast(message, type = 'info') {
				/*
				const container = document.getElementById('toast-container');
				const toast = document.createElement('div');
				toast.className = 'toast';
				const colors = {
					success: '#4ade80',
					error: '#f87171',
					warning: '#facc15',
					info: '#60a5fa'
				};
				toast.style.borderLeft = `4px solid ${colors[type]}`;
				toast.textContent = message;
				container.appendChild(toast);
				setTimeout(() => {
					toast.remove();
				}, 3000);
				*/
			}
