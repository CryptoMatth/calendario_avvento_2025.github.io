			// ===== GESTIONE IMMAGINE INGRANDIBILE SHERLOCK (VERSIONE CORRETTA) =====
			(function() {
			    console.log('🔍 Inizializzo setup immagine Sherlock...');
			    
			    let listenerAdded = false;  // 🆕 NUOVO: Flag per evitare duplicati
			    
			    function setupImageZoom() {
			        // 🆕 NUOVO: Se il listener è già stato aggiunto, non aggiungere di nuovo
			        if (listenerAdded) {
			            console.log('✅ Listener già aggiunto, skippando...');
			            return;
			        }
			        
			        const owlModalImage = document.getElementById('owlModalImage');
			        
			        if (!owlModalImage) {
			            console.warn('⚠️ Immagine owlModalImage non trovata nel DOM');
			            return;
			        }
			        
			        console.log('✅ Elemento owlModalImage trovato, aggiungo listener UNA VOLTA SOLA...');
			        
			        // 🆕 NUOVO: Segna come aggiunto
			        listenerAdded = true;
			        
			        // Aggiungi listener al click
			        owlModalImage.addEventListener('click', function(e) {
			            e.stopPropagation();
			            console.log('🖼️ Click rilevato su immagine Sherlock');
			            
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
			            
			            // Pulsante chiudi
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
			                console.log('🖼️ Pulsante X cliccato, rimuovendo modal');
			                modal.remove();
			            };
			            
			            // Immagine ingrandita
			            const img = document.createElement('img');
			            img.src = owlModalImage.src;
			            img.style.maxWidth = '90vw';
			            img.style.maxHeight = '90vh';
			            img.style.objectFit = 'contain';
			            img.style.borderRadius = '10px';
			            img.style.cursor = 'auto';
			            img.onclick = (evt) => evt.stopPropagation();
			            
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
			            
			            // Chiudi cliccando all'esterno dell'immagine
			            modal.onclick = () => {
			                console.log('🖼️ Click esterno, chiudo modal');
			                modal.remove();
			            };
			            
			            // Chiudi con ESC
			            const handleEsc = (e) => {
			                if (e.key === 'Escape') {
			                    console.log('🖼️ Tasto ESC premuto, chiudo modal');
			                    modal.remove();
			                    document.removeEventListener('keydown', handleEsc);
			                }
			            };
			            document.addEventListener('keydown', handleEsc);
			            
			            // Assembla il modal
			            modal.appendChild(closeBtn);
			            modal.appendChild(img);
			            modal.appendChild(hint);
			            document.body.appendChild(modal);
			            
			            console.log('🖼️ Modal immagine creato e visualizzato');
			        });
			        
			        console.log('✅ Setup immagine Sherlock completato');
			    }
			    
			    // 🆕 NUOVO: Esegui UNA VOLTA SOLA al caricamento del DOM
			    if (document.readyState === 'loading') {
			        document.addEventListener('DOMContentLoaded', setupImageZoom);
			    } else {
			        setupImageZoom();
			    }
			    
			    // 🆕 NUOVO: Fallback SENZA DUPLICARE il listener
			    // Usa setTimeout solo se il DOM non è ancora caricato
			    if (document.readyState === 'loading') {
			        setTimeout(setupImageZoom, 1000);
			    }
			})();
