const CONSTELLATIONS = [
	{
		name: "Cane maggiore",
		image: "foto/Cane_maggiore.jpg",
		options: ["Cane maggiore", "Triangolo", "Giraffa", "Cane minore"],
		description: "Visibile tra gennaio e febbraio. Rappresenta il più grande tra i due di Orione. Contiene Sirio, la stella più brillante del cielo notturno. Sirio veniva chiamata dai romani \"stella canicula\", da cui \"canicola\", il periodo più caldo dell'estate.",
		hints: [
			"Contiene Sirio, la stella più brillante del cielo notturno",
			"È un animale",
			"Rappresenta il più grande tra i due di Orione"
		]
	},
	{
		name: "Giraffa",
		image: "foto/Giraffa.jpg",
		options: ["Giraffa", "Cane maggiore", "Vergine", "Pegaso"],
		description: "Visibile tra gennaio e febbraio. È una costellazione moderna, introdotta nel XVII secolo e molto poco appariscente.",
		hints: [
			"È una costellazione moderna, introdotta nel XVII secolo e molto poco appariscente",
			"È un animale",
			"Ha un lungo collo"
		]
	},
	{
		name: "Gemelli",
		image: "foto/Gemelli.jpg",
		options: ["Gemelli", "Idra", "Pegaso", "Scorpione"],
		description: "Visibile da gennaio a marzo. Ricorda Castore e Polluce, i due Dioscuri della mitologia greca. In realtà le due stelle Castore e Polluce sono molto diverse tra loro: per esempio la prima è singola, la seconda è sestupla.",
		hints: [
			"Castore e Polluce sono due stelle molto diverse tra loro",
			"È una costellazione zodiacale",
			"Castore e Polluce erano fratelli"
		]
	},
	{
		name: "Cane minore",
		image: "foto/Cane_minore.jpg",
		options: ["Cane minore", "Cane maggiore", "Ercole", "Boote"],
		description: "Visibile da gennaio a marzo. Rappresenta il più piccolo tra i due di Orione. Contiene Procione, l'ottava stella più brillante del cielo. Il nome procione non è legato all'animale ma deriva dal greco \"prima del cane\" perché sorge prima.",
		hints: [
			"È sempre in coppia",
			"È un animale",
			"Rappresenta il più piccolo tra i due di Orione"
		]
	},
	{
		name: "Idra",
		image: "foto/Idra.jpg",
		options: ["Idra", "Giraffa", "Ercole", "Andromeda"],
		description: "Visibile da marzo a maggio. È la più grande di tutte le costellazioni e contiene Alphard, una stella poco luminosa ma che risalta perché si trova in una zona povera di stelle (in arabo infatti significa \"la solitaria\").",
		hints: [
			"Contiene Alphard, una stella poco luminosa ma che risalta perché si trova in una zona povera di stelle",
			"È un animale",
			"È la più grande di tutte le costellazioni"
		]
	},
	{
		name: "Orsa Maggiore",
		image: "foto/Orsa_Maggiore.jpg",
		options: ["Orsa Maggiore", "Orsa Minore", "Cassiopea", "Cefeo"],
		description: "Visibile tra aprile e maggio. Le sette stelle che delineano il Grande Carro costituiscono l'asterisma più conosciuto del cielo boreale. Secondo la mitologia, le due Orse salvarono Zeus dall'ira del padre Crono.",
		hints: [
			"È una costellazione circumpolare",
			"Contiene l'asterisma più famoso del cielo boreale",
			"Tale asterisma è il Grande Carro",
		]
	},
	{
		name: "Chioma di Berenice",
		image: "foto/Chioma_di_Berenice.jpg",
		options: ["Chioma di Berenice", "Ofiuco", "Lira", "Cane minore"],
		description: "Visibile tra aprile e maggio. Qui si trova il polo nord galattico, ovvero guardando in questa direzione si osserva il cielo perpendicolare al piano della nostra galassia. Faceva prima parte della costellazione del Leone, ma fu dedicata a Berenice II nel III secolo a.C.",
		hints: [
			"Qui si trova il polo nord galattico",
			"Faceva prima parte della costellazione del Leone",
			"Fu dedicata a una regina egiziana"
		]
	},
	{
		name: "Vergine",
		image: "foto/Vergine.jpg",
		options: ["Vergine", "Acquario", "Capricorno", "Corona boreale"],
		description: "Visibile tra aprile e maggio. Anticamente si mostrava 1/2 mesi prima di quanto accada oggi (marzo). Per i greci rappresentava Demetra, la dea della fertilità della terra.",
		hints: [
			"Contiene Spica, stella molto brillante",
			"Rappresenta lo strumento musicale di Orfeo",
			"È piccola ma molto riconoscibile"
		]
	},
	{
		name: "Orsa Minore",
		image: "foto/Orsa_Minore.jpg",
		options: ["Orsa Minore", "Orsa Maggiore", "Boote", "Cefeo"],
		description: "Visibile tra maggio e giugno, contiene la stella polare. Comunemente definita Piccolo Carro, contiene la stella Kochab (l'antica stella polare). Secondo la mitologia, le due Orse salvarono Zeus dall'ira del padre Crono.",
		hints: [
			"Questo animale ha salvato Zeus dall'ira del padre Crono",
			"Kochab era l'antica stella polare",
			"È conosciuta come Piccolo Carro",
		]
	},
	{
		name: "Boote",
		image: "foto/Boote.jpg",
		options: ["Boote", "Bilancia", "Corona boreale", "Dragone"],
		description: "Visibile tra maggio e giugno. Si trova dietro la coda dell'Orsa Maggiore e rappresentava, per i greci, il guardiano dell'orsa. Contiene la stella Arturo, che in greco vuol dire \"guardiano dell'orso\".",
		hints: [
			"Rappresentava, per i greci, il guardiano dell'orsa",
			"Si trova dietro la coda dell'Orsa Maggiore",
			"Ha un nome strano"
		]
	},
	{
		name: "Bilancia",
		image: "foto/Bilancia.jpg",
		options: ["Bilancia", "Scorpione", "Cassiopea", "Sagittario"],
		description: "Visibile tra maggio e giugno. L'unica costellazione zodiacale a rappresentare un oggetto inanimato. Le due stelle più cospicue sono termini arabi che indicano le chele dello Scorpione, a cui apparteneva in origine.",
		hints: [
			"Le due stelle più cospicue sono termini arabi che indicano le chele",
			"È una costellazione zodiacale",
			"L'unica costellazione zodiacale a rappresentare un oggetto inanimato"
		]
	},
	{
		name: "Corona boreale",
		image: "foto/Corona_boreale.jpg",
		options: ["Corona boreale", "Chioma di Berenice", "Scorpione", "Cefeo"],
		description: "Visibile a giugno. È piccola ma caratteristica dato che assomiglia a una corona di gemme. Secondo la mitologia fu il diadema che Dioniso regalò ad Arianna dopo che Teseo l'abbandonò sull'isola di Nasso.",
		hints: [
			"Secondo la mitologia fu un regalo di Dioniso ad Arianna",
			"Assomiglia a una corona di gemme",
			"La indossi"
		]
	},
	{
		name: "Dragone",
		image: "foto/Dragone.jpg",
		options: ["Dragone", "Giraffa", "Idra", "Boote"],
		description: "Visibile tra giugno e luglio, si insinua tra le Orse. Contiene Thuban, stella polare del terzo millennio a.C. Secondo la mitologia, rappresenta il drago Ladone che faceva la guardia alle mele d'oro del giardino delle Esperidi, ucciso da Ercole.",
		hints: [
			"È situata tra le due Orse",
			"Thuban era la stella polare del terzo millennio a.C",
			"È alato, e secondo la mitologia faceva la guardia alle mele d'oro del giardino delle Esperidi",
		]
	},
	{
		name: "Acquario",
		image: "foto/Acquario.jpg",
		options: ["Acquario", "Pegaso", "Scorpione", "Gemelli"],
		description: "Visibile tra settembre e ottobre. La somiglianza con il personaggio rappresentato è sostanzialmente nulla. Il personaggio mitologico è Ganimede, coppiere degli dei, il \"portatore d'acqua\".",
		hints: [
			"È un segno zodiacale",
			"Il personaggio mitologico è Ganimede, coppiere degli dei",
			"È il segno zodiacale dello scemo"
		]
	},
	{
		name: "Ofiuco",
		image: "foto/Ofiuco.jpg",
		options: ["Ofiuco", "Serpente", "Ercole", "Acquario"],
		description: "Visibile da giugno ad agosto. Rappresenta un uomo che tiene in mano la contigua costellazione del Serpente. Nella cultura greca è Ascepio, figlio di Apollo e dio della medicina.",
		hints: [
			"Nella cultura greca è figlio di Apollo e dio della medicina.",
			"Rappresenta un uomo che tiene in mano la contigua costellazione del Serpente",
			"È anche detto Serpentario"
		]
	},
	{
		name: "Serpente",
		image: "foto/Serpente.jpg",
		options: ["Serpente", "Cassiopea", "Ofiuco", "Gemelli"],
		description: "Visibile da giugno ad agosto. È l'unica costellazione divisa in due parti separate: la Testa dalla Coda, con l'Ofiuco in mezzo. È il simbolo della guarigione.",
		hints: [
			"È il simbolo della guarigione",
			"È l'unica costellazione divisa in due parti separate",
			"È un animale"
		]
	},
	{
		name: "Scorpione",
		image: "foto/Scorpione.jpg",
		options: ["Scorpione", "Boote", "Sagittario", "Vergine"],
		description: "Visibile da giugno ad agosto. Il nome della sua stella più luminosa, Antares, deriva dal greco Anti-Ares (rivale di Marte), per il colore rosso comune ai due corpi celesti. Secondo la mitologia fu l'animale che punse a morte Orione; ecco perché Zeus li collocò in cielo entrambi.",
		hints: [
			"Il nome della sua stella più luminosa, Antares, deriva dal greco Anti-Ares",
			"È un animale",
			"Secondo la mitologia fu l'animale che punse a morte Orione"
		]
	},
	{
		name: "Lira",
		image: "foto/Lira.jpg",
		options: ["Lira", "Aquila", "Cigno", "Perseo"],
		description: "Visibile da giugno a settembre. Contiene la stella Vega (\"l'aquila che plana\") che, insieme alle stelle Altair dell'Aquila e Deneb del cigno, costituisce uno dei tre vertici dell'asterisma Triangolo Estivo. Secondo la mitologia, rappresenta lo strumento suonato da Orfeo, cantore che tentò di recuperare l'amata Euridice dagli Inferi.",
		hints: [
			"La stella Vega significa \"l'aquila che plana\"",
			"Vega, insieme alle stelle Altair dell'Aquila e Deneb del cigno, costituisce uno dei tre vertici dell'asterisma Triangolo Estivo",
			"Rappresenta lo strumento suonato da Orfeo"
		]
	},
	{
		name: "Ercole",
		image: "foto/Ercole.jpg",
		options: ["Ercole", "Dragone", "Bilancia", "Capricorno"],
		description: "Visibile da giugno a settembre. Si mostra capovolto e inginocchiato, con un piede che poggia sulla testa della costellazione del Dragone. ",
		hints: [
			"È contigua alla costellazione del Dragone",
			"Non rappresenta un animale",
			"È l'eroe più famoso della mitologia greca"
		]
	},
	{
		name: "Aquila",
		image: "foto/Aquila.jpg",
		options: ["Aquila", "Triangolo", "Cigno", "Lira"],
		description: "Visibile da luglio a settembre. La stella Altair, insieme alle stelle Vega della Lira e Deneb del Cigno, costituisce uno dei tre vertici dell'asterisma Triangolo Estivo. Nella mitologia greca è il simbolo di Zeus",
		hints: [
			"La stella Altair, insieme alle stelle Vega della Lira e Deneb del cigno, costituisce uno dei tre vertici dell'asterisma Triangolo Estivo",
			"Nella mitologia greca è il simbolo di Zeus",
			"La stella Altair significa \"aquila volante\"",
		]
	},
	{
		name: "Sagittario",
		image: "foto/Sagittario.jpg",
		options: ["Sagittario", "Orione", "Scorpione", "Perseo"],
		description: "Visibile da luglio a settembre. Osservando questa costellazione si guarda verso le regioni centrali della Via Lattea. Rappresenta un centauro in atto di scagliare una freccia.",
		hints: [
			"Osservando questa costellazione si guarda verso le regioni centrali della Via Lattea",
			"Rappresenta un centauro in atto di scagliare una freccia",
			"È una costellazione dello zodiaco"
		]
	},
	{
		name: "Cigno",
		image: "foto/Cigno.jpg",
		options: ["Cigno", "Giraffa", "Lira", "Aquila"],
		description: "Visibile da luglio a settembre. Deneb, insieme alle stelle Vega della Lira e Altair dell'Aquila, costituisce uno dei tre vertici dell'asterisma Triangolo Estivo. Prende anche il nome di Croce del Nord.",
		hints: [
			"Prende anche il nome di Croce del Nord",
			"È un animale volante",
			"Zeus si trasformò in questo animale per sedurre Leda"
		]
	},
	{
		name: "Cefeo",
		image: "foto/Cefeo.jpg",
		options: ["Cefeo", "Orione", "Acquario", "Cassiopea"],
		description: "Visibile tra settembre e ottobre, ha la forma di una casa con il tetto aguzzo. Errai, localizzata sulla punta del \"tetto\", sarà la prossima stella polare intorno all'anno 4000. Secondo la mitologia era re di Etiopia, marito della regina Cassiopea.",
		hints: [
			"Ha la forma di una casa con il tetto aguzzo",
			"Errai sarà la prossima stella polare intorno all'anno 4000",
			"Secondo la mitologia era re di Etiopia"
		]
	},
	{
		name: "Pegaso",
		image: "foto/Pegaso.jpg",
		options: ["Pegaso", "Andromeda", "Capricorno", "Idra"],
		description: "Visibile tra settembre e ottobre. La parte meglio riconoscibile è costituita da un gruppo di stelle che è chiamato Grande Quadrato. Appare capovolto, con la testa in basso e le zampe in alto.",
		hints: [
			"La parte meglio riconoscibile è costituita da un gruppo di stelle che è chiamato Grande Quadrato",
			"Non fa parte delle costellazioni dello zodiaco",
			"È un animale alato"
		]
	},
	{
		name: "Cassiopea",
		image: "foto/Cassiopea.jpg",
		options: ["Cassiopea", "Cigno", "Triangolo", "Giraffa"],
		description: "Visibile tra ottobre e novembre, è facilmente riconoscibile grazie alla sua forma a W. La costellazione è attraversata dalla Via Lattea e ospita numerose nebulose e ammassi aperti. Secondo la mitologia era la moglie di Cefeo, re d'Etiopia.",
		hints: [
			"È facilmente riconoscibile grazie alla sua forma a W",
			"Non è un animale",
			"Secondo la mitologia è sposata con Cefeo, re d'Etiopia"
		]
	},
	{
		name: "Triangolo",
		image: "foto/Triangolo.jpg",
		options: ["Triangolo", "Cigno", "Capricorno", "Lepre"],
		description: "Visibile da ottobre a dicembre. Si trova tra Andromeda, Perseo e l'Ariete. Ha banalmente la forma di un triangolo.",
		hints: [
			"È composta da tre stelle",
			"Si trova tra Andromeda, Perseo e l'Ariete",
			"È una forma geometrica"
		]
	},
	{
		name: "Orione",
		image: "foto/Orione.jpg",
		options: ["Orione", "Cane minore", "Ofiuco", "Cassiopea"],
		description: "Visibile da dicembre a febbraio. Facilmente riconosibile dalla cintura (composta da tre stelle), sembra più che altro una caffettiera. Secondo la mitologia, era un gigantesco cacciatore che, con i suoi cani, cacciava le lepri.",
		hints: [
			"Secondo la mitologia, era un gigantesco cacciatore che, con i suoi cani, cacciava le lepri",
			"Facilmente riconosibile dalla cintura (composta da tre stelle), sembra più che altro una caffettiera",
			"È accompagnato dai suoi due cani"
		]
	},
	{
		name: "Lepre",
		image: "foto/Lepre.jpg",
		options: ["Lepre", "Orsa Minore", "Cefeo", "Giraffa"],
		description: "Visibile da dicembre a febbraio. Rappresenta la preda che Orione cacciava con i suoi cani. Arneb è il nome arabo che ha come significato il nome della costellazione.",
		hints: [
			"Arneb è il nome arabo che ha come significato il nome della costellazione",
			"È un animale",
			"Rappresenta la preda che Orione cacciava con i suoi cani"
		]
	},
{
		name: "Andromeda",
		image: "foto/Andromeda.jpg",
		options: ["Andromeda", "Orsa Minore", "Cefeo", "Giraffa"],
		description: "Andromeda.",
		hints: [
			"Arneb è il nome arabo che ha come significato il nome della costellazione",
			"È un animale",
			"Rappresenta la preda che Orione cacciava con i suoi cani"
		]
	},
{
		name: "Perseo",
		image: "foto/Perseo.jpg",
		options: ["Perseo", "Orsa Minore", "Cefeo", "Giraffa"],
		description: "Perseo.",
		hints: [
			"Arneb è il nome arabo che ha come significato il nome della costellazione",
			"È un animale",
			"Rappresenta la preda che Orione cacciava con i suoi cani"
		]
	},
	{
		name: "Capricorno",
		image: "foto/Capricorno.jpg",
		options: ["Capricorno", "Ofiuco", "Acquario", "Vergine"],
		description: "Visibile tra agosto e settembre. Rappresenta una capra marina, con testa di capra e coda di pesce. Risale almeno al III millennio a.C. È ritenuta la costellazione fortunata perché, 2-3000 anni fa, quando si trovava davanti al Capricorno, il Sole iniziava il suo cammino verso Nord allungando le giornate.",
		hints: [
			"È un segno zodiacale",
			"È un animale",
			"È il tuo segno zodiacale"
		]
	}
];


// Generiamo 31 costellazioni utilizzando quelle base:
const FULL_CONSTELLATIONS = Array.from({ length: 31 }, (_, i) => {
	const base = CONSTELLATIONS[i % CONSTELLATIONS.length];
	return {
	...base,
	name: i < CONSTELLATIONS.length ? base.name : `${base.name} ${Math.floor(i / CONSTELLATIONS.length) + 1}`,
	description: i < CONSTELLATIONS.length ? base.description : `${base.description} (Variazione ${Math.floor(i / CONSTELLATIONS.length) + 1})`
	};
});
