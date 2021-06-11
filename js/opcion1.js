function onMyLoad(){
	selectDia();
	selectMes();
	primerSigno();
	segundoSigno();
	abrirModal();
}
function selectDia(){
	let dia=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
	for (var i in dia){
		document.getElementById("selectDia").innerHTML+="<option value='"+dia[i]+"'>"+dia[i]+"</option>";
	}
}
function selectMes(){
	let mes=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	for (var i in mes){
		document.getElementById("selectMes").innerHTML+="<option value='"+mes[i]+"'>"+mes[i]+"</option>";
	}
}
function infoSigno(){
	let dia=document.getElementById("selectDia").value
	let mes=document.getElementById("selectMes").value
	switch(mes){
		case "Enero": 
		if (dia>=20) {
			document.getElementById("result").innerHTML="Acuario"
		} 
		else{
			document.getElementById("result").innerHTML="Capricornio"
		}
		break;
		case "Febrero": 
		if (dia<=18) {
			document.getElementById("result").innerHTML="Acuario"
		}
		else{
			document.getElementById("result").innerHTML="Piscis"
		}
		break;
		case "Marzo": 
		if (dia>=21) {
			document.getElementById("result").innerHTML="Aries"
		}
		else {
			document.getElementById("result").innerHTML="Piscis"
		}
		break;
		case "Abril": 
		if (dia<=20) {
			document.getElementById("result").innerHTML="Aries"
		}
		else {
			document.getElementById("result").innerHTML="Tauro"
		}
		break;
		case "Mayo": 
		if (dia<=20) {
			document.getElementById("result").innerHTML="Tauro"
		}
		else {
			document.getElementById("result").innerHTML="Geminis"
		}
		break;
		case "Junio": 
		if (dia<=20) {
			document.getElementById("result").innerHTML="Geminis"
		}
		else {
			document.getElementById("result").innerHTML="Cancer"
		}
		break;
		case "Julio": 
		if (dia<=20) {
			document.getElementById("result").innerHTML="Cancer"
		}
		else {
			document.getElementById("result").innerHTML="Leo"
		}
		break;
		case "Agosto": 
		if (dia<=21) {
			document.getElementById("result").innerHTML="Leo"
		}
		else {
			document.getElementById("result").innerHTML="Virgo"
		}
		break;
		case "Septiembre": 
		if (dia<=22) {
			document.getElementById("result").innerHTML="Virgo"
		}
		else {
			document.getElementById("result").innerHTML="Libra"
		}
		break;
		case "Octubre": 
		if (dia<=22) {
			document.getElementById("result").innerHTML="Libra"
		}
		else {
			document.getElementById("result").innerHTML="Escorpio"
		}
		break;
		case "Noviembre": 
		if (dia<=22) {
			document.getElementById("result").innerHTML="Escorpio"
		}
		else {
			document.getElementById("result").innerHTML="Sagitario"
		}
		break;
		case "Diciembre": 
		if (dia<=20) {
			document.getElementById("result").innerHTML="Sagitario"
		}
		else {
			document.getElementById("result").innerHTML="Capricornio"
		}
		break;
	}
}
function aries(){
	document.getElementById('tituloCartas').innerHTML='ARIES'
	document.getElementById('textoSigno').innerHTML='Un Aries es una persona llena de energía y entusiasmo. Pionero y aventurero, le encantan los retos, la libertad y las nuevas ideas. A los Aries les gusta liderar y prefieren dar instrucciones a recibirlas. ... Aries es el primer signo del zodiaco, y en este sentido su papel es empezar algo y liderar.'
}
function tauro(){
	document.getElementById('tituloCartas').innerHTML='TAURO'
	document.getElementById('textoSigno').innerHTML='Tauro se caracteriza por ser plácido gran parte del tiempo, como impetuoso y hasta brutal cuando se enoja, como el animal que lo representa. Pertenece al elemento Tierra, con lo cual es práctico, ordenado, trabajador, ambicioso, serio y pragmático.'
}
function geminis(){
	document.getElementById('tituloCartas').innerHTML='GEMINIS'
	document.getElementById('textoSigno').innerHTML='Los géminis tienes una gran adaptabilidad y versatilidad. Las personas que nacieron bajo este signo son intelectuales, elocuentes, cariñosos, comunicativos e inteligentes. Tienen mucha energía y vitalidad. Les gusta hablar, leer, hacer varias cosas a la vez.'
}
function piscis(){
 	document.getElementById('tituloCartas').innerHTML='PISCIS'
 	document.getElementById('textoSigno').innerHTML='Los Piscis son personas tranquilas, pacientes y amables. Son sensibles a los sentimientos de los demás y responden con simpatía y tacto al sufrimiento de las personas que los rodean. Son muy queridos por los demás porque tienen un carácter afable, cariñoso y amable.'
}
function virgo(){
	document.getElementById('tituloCartas').innerHTML='VIRGO'
	document.getElementById('textoSigno').innerHTML='Virgo busca la perfección en todo lo que hace, es práctico, lógico y siente la necesidad de que todo funcione como un relojito. No les gusta recibir favores, tienen vocación de servicio y saben disfrutar realmente del deber cumplido. Nunca pisa un suelo que no conoce, es honesto y muy inteligente.'
}
function cancer(){
	document.getElementById('tituloCartas').innerHTML='CANCER'
	document.getElementById('textoSigno').innerHTML='Cáncer, cuarto signo del Zodíaco, cardinal, y primero del elemento Agua, representa lo femenino, lo fecundo y está regido por las emociones de la Luna. ... Leales, emotivos, constantes, protectores, tradicionalistas, sensuales, intuitivos, y golosos, a este signo de Agua se lo asocia con la necesidad de seguridad.'
}
function leo(){
	document.getElementById('tituloCartas').innerHTML='LEO'
	document.getElementById('textoSigno').innerHTML='Leo pertenece al elemento Fuego y está caracterizado por su coraje, convicción y capacidad de liderazgo. Independiente e inconformista, su mente activa es siempre generadora de empresas brillantes y lucrativas. Suelen ser muy orgullosos por lo cual no les gusta pedir ayuda, ellos se bastan para lo que sea.'
}
function libra(){
	document.getElementById('tituloCartas').innerHTML='LIBRA'
	document.getElementById('textoSigno').innerHTML='Los libra se encuentran entre los signos más civilizados del zodiaco. Tienen encanto, elegancia y buen gusto, y son amables y pacíficos. Les gusta la belleza y la armonía y son capaces de ser imparcial ante conflictos. ... Un libra tiende a ser sensible a las necesidades de los demás y suele ser muy sociable.'
}
function escorpio(){
	document.getElementById('ttituloCartas').innerHTML='ESCORPIO'
	document.getElementById('textoSigno').innerHTML='Escorpio es un signo intenso con una energía emocional única en todo el zodiaco. Son emocionales y fácilmente heridos o aludidos. De hecho pueden perder totalmente el genio al percibir, incluso erróneamente, que alguien les ha insultado. No saben morderse la lengua y pueden ser muy críticos.'
}
function sagitario(){
	document.getElementById('tituloCartas').innerHTML='SAGITARIO'
	document.getElementById('textoSigno').innerHTML='Su carácter es jovial y su principal ideal, la justicia. Es sincero, curioso, ágil e impulsivo, con una búsqueda constante de superación personal. Le gusta el contacto con la gente, viajar, explorar y estar en continuo movimiento. Entre sus virtudes se destacan su actitud benévola, la generosidad y franqueza.'
}
function capricornio(){
	document.getElementById('tituloCartas').innerHTML='CAPRICORNIO'
	document.getElementById('textoSigno').innerHTML='Un capricornio es un de los signos del zodiaco más estables, seguros y tranquilos. Son trabajadores, responsables y prácticos y dispuestos a persistir hasta sea necesario para conseguir su objetivo. Son fiables y muchas veces tienen el papel de terminar un proyecto iniciado por uno de los signos más pioneros.'
}

function acuario(){
	document.getElementById('tituloCartas').innerHTML='ACUARIO'
	document.getElementById('textoSigno').innerHTML='Un acuario representa la revolución y su símbolo figura el agua; pertenece junto a Géminis y Libra al elemento aire. El hombre y la mujer de este signo zodiacal pueden ser de personalidad fuerte o tímida, pasiva, también, una persona de acuario es honesta, tolerante, sin perjuicios, sincero, refinado y humano.'
}


function primerSigno() {
	let zodiaco=["Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
	for (var i in zodiaco){
		document.getElementById("primerSigno").innerHTML += "<option value='"+zodiaco[i]+"'>"+zodiaco[i]+"></option>";
	}
}
function segundoSigno() {
	let zodiacoSegundo=["Aries", "Tauro", "Geminis", "Cancer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
	for (var i in zodiacoSegundo){
		document.getElementById("segundoSigno").innerHTML += "<option value='"+zodiacoSegundo[i]+"'>"+zodiacoSegundo[i]+"></option>";
	}
}
function compatibility(){
	let zodiaco=document.getElementById("primerSigno").value
	let zodiacoSegundo=document.getElementById('segundoSigno').value
	if ((zodiaco=="Aries" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Dos hijos de Marte juntos pueden provocar, con sólo una mirada, chispas y hasta fuegos artificiales, aunque también es fácil que predominen luchas de egos; lo suyo no son las medias tintas sino el todo o nada.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Tauro") || (zodiaco=="Tauro" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Aries es impaciente y le gustan las sorpresas mientras que Tauro se caracteriza por su estoicismo y temple. La relación promete ser estable si ambos están dispuestos a aprender, pues el equilibrio de la compensación es una de las principales lecciones a aprender por ambas partes.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Geminis") || (zodiaco=="Geminis" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Los dos se sienten muy a gusto nada más conocerse y al segundo se hacen amigos inseparables. La relación estará basada en grandes horas de conversación sobre todo tipo de temas, mucho sentido del humor y un parecido gusto por la diversión y las risas.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Cancer") || (zodiaco=="Cancer" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='El Agua voluble y emocional de Cáncer y el Fuego cálido e imprevisible de Aries se funden en esta relación que necesita grandes dosis de paciencia por parte del ansioso Aries y de respetar la libertad del otro para el celoso “cangrejo”.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Leo") || (zodiaco=="Leo" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre Aries y Leo es altísima. Ambos son signos de fuego, lo cual puede dar lugar a algunas confrontaciones y a un choque de egos. Tanto Aries como Leo son individuos impulsivos, con una gran creatividad, por lo que ambos están en condiciones de entender y apoyar las ambiciones del otro.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Son dos almas que ponen toda su pasión en cada cosa que hacen. Disfrutan de la vida y saben bien cómo exprimirle todo su jugo. Sin embargo, ese fuego de Aries es el que provoca la chispa que Libra necesita para encender sus ilusiones.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Muchos signos simplemente no tienen la energía necesaria para seguir el ritmo de Escorpio, pero Aries tiene ambas, tanto física como mental, otro punto a favor para el éxito de la relación. Sexualmente son muy compatibles, puesto que ambos están regidos por el apasionado Marte.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Ambos son joviales, buscadores, aventureros y espontáneos. Hacen una pareja estupenda, y nada se les pondrá por delante cuando tomen la decisión de viajar por el mundo, o de compartir la vida, juntos.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Capricornio se sentirá felizmente rejuvenecido con el intrépido Aries y éste encontrará su apoyo más fiel en el signo de la cabra. Además, para que la relación no caiga en la desidia, Capricornio deberá abrirse y aprender a decir “te quiero” más a menudo.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Aries y Acuario tienen mucho en común y un grado de compatibilidad muy alto. Ambos signos son independientes, humanitarios, optimistas y entusiastas. Les gustan las emociones fuertes, la valentía y carácter progresivo de los Acuario tienden a atraer mucho a los Aries.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Si logran formar una pareja estable, es probable que sea una relación fuera de lo común. El fuego de Aries puede a veces ser extinguido por el agua de Piscis, que puede pertubar el lado feliz y divertido de su pareja Aries. Aries es un signo muy optimista, mientras Piscis tiende a ser mucho más pesimista y cauteloso.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Es muy alta. Tauro es el signo de la tierra y esto constituye una base muy sólida para la relación. Hay algo simple y franco en los Tauro. Son prácticos y no se complican demasiado, por lo que son muy compatibles en una relación.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Geminis") || (zodiaco=="Geminis" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Un signo tímido como Tauro se sentirá muy atraído por la rapidez, ingenio e inteligencia de Géminis ya que despertará su interés por conocer cosas nuevas y estar al día; Y Géminis admirará la determinación con la que Tauro llega a conseguir cualquier meta y también el modo en que se guía por sus sentidos y emociones.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Cancer") || (zodiaco=="Cancer" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Es una unión excelente para convivir disfrutando de los pequeños y grandes placeres que ofrece la vida. Cáncer también sabrá cómo darle a Tauro esa devoción que tanto necesita mientras que Tauro otorgará dosis de paciencia para calmar los constantes cambio de ánimo del cangrejo.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Leo") || (zodiaco=="Leo" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Se atraen y son la pareja ideal para un apasionado romance sin mayores compromisos. Aunque si les tienta el riesgo y las experiencias fuertes siempre tendrán la opción de sellar la relación con un compromiso más formal.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Virgo") || (zodiaco=="Virgo" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML=' Tanto Virgo como Tauro son prácticos; los dos son signos de Tierra y cuando se combina Tierra con Tierra se obtiene una base sólida, para una larga relación. Ambos signos se complementarán entre sí a muchos niveles: físicamente, emocionalmente y mentalmente.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Se sienten atraídos, el uno al otro, desde el principio pero el carácter de Libra choca con el inalterable espíritu de Tauro, principalmente porque Libra se pasa la mayor parte de su vida cambiando sus decisiones y eso pone de los nervios a un signo con opiniones fijas e inalterables.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Son dos signos opuestos que sienten una atracción física y psíquica al momento. La relación puede ser fecunda y apasionada pero para que Tauro pueda sentirse seguro del terreno que pisa y las emociones de Escorpio no se desborden, es fundamental que ambos respeten sus libertades básicas.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Se trata de una relación un tanto compleja, sobre todo para Tauro, que no ganará para sustos al ver cómo se tambalea su estabilidad al trote de Sagitario que siempre buscará salir de casa y experimentar mil aventuras.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre Capricornio y Tauro es muy alta, porque tienen mucho en común y pueden esperar ser muy felices juntos. El sentido práctico de Capricornio se lleva bien con la actitud realista de Tauro. Su conexión inicial con Capricornio será buena y Tauro encontrará muchas similitudes con su pareja.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Le encanta su manera de enfocar la realidad, sus pies siempre en el suelo y Tauro se siente intrigado por un signo tan visceral y extraño. Relación fecunda y duradera, en la que Piscis disfrutará de una agradable estabilidad emocional y Tauro de la ternura y comprensión que anhela.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Es una relación en la que Tauro se lo va a tener que trabajar mucho más si no quiere que Acuario salga volando, pero para ello deberá vivir el presente sin programar el futuro y hacer un gran esfuerzo por abrirse al mundo y romper, sin miedo, alguna de sus ajustadas normas.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='La compatibilidad de Géminis con Géminis es alta y lo más probable, que una pareja de dos Géminis tengan una relación llena de diversión, aventura y variedad aunque tengan que aprender virtudes como la paciencia y el compromiso para que funcione a largo plazo. Aunque no sean excesivamente celosos, los Géminis sí son muy posesivos en sus relaciones de pareja, y en este sentido ambos tendrán que llevar cuidado para no darle motivos para desconfiar a su pareja.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Cancer") || (zodiaco=="Cancer" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='En el lado positivo de la relación ambos son dos signos muy soñadores y con una tremenda imaginación que se complementa además de tener un humor brillante y mutable que no todo el mundo puede llegar a entender. Lo mejor. Lo que pueden aprender juntos el uno del otro.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Leo") || (zodiaco=="Leo" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre Leo y Géminis es bastante alta y en esta relación ambos descubrirán tener mucho en común. Tanto a Géminis como a Leo les encanta divertirse. Los dos tienen una naturaleza aventurera y disfrutan de la vida. Se encontrarán mutuamente fascinantes y disfrutarán en compañía del otro.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Virgo") || (zodiaco=="Virgo" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='En principio pueden llegar a ser excelentes amigos, pero si pasan de la amistad al amor de pareja, la convivencia puede ser algo más compleja, sobre todo, porque Virgo siempre querrá atar corto a un signo que siempre necesitará sus dosis de libertad para ser feliz.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='Presentan una excelente compatibilidad, por lo que si esta es la combinación de tu relación hay muchas probabilidades de que seas extremadamente feliz durante mucho tiempo. Incluso se trata de una combinación tan afortunada, que se podría decir que existe un toque de magia entre ambos signos.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='Si Géminis cede protagonismo y acepta al Escorpión, pueden ser una pareja especial. Son dos signos muy particulares y eso queda muy patente en cuanto se encuentran frente a frente. La rapidez mental de Géminis unida a la intensidad con que se entregará Escorpio, hará que formen una pareja muy sólida.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='Se trata de dos signos libres como el viento que necesitan su propio espacio para ser felices y sentirse plenos. Además, los dos son muy inquietos y respetan profundamente la libertad de cada uno. Son también dos signos muy divertidos, seductores y muy sociables.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='Se trata de dos signos muy distintos que compaginan muy bien en el terreno intelectual. Además, trabajando juntos forman un equipo envidiable, tanto, que se pasan horas y horas en la cama hablando de sus sueños y de la manera de materializarlos.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='La compatibilidad de Géminis y Piscis es como la que poseen cerebro y corazón. Lo uno y lo otro hacen que vean y vivan la vida de formas muy distintas: Piscis se mueve más por impulsos e intuiciones; Géminis, sin embargo es terriblemente racional en comparación, basando sus decisiones en cosas más tangibles.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre los signos Acuario y Géminis es muy alta, ya que ambos esperan sacar más o menos lo mismo de la vida. Tienen planteamientos muy parecidos e incluso a nivel intelectual son compatibles. Es una de las combinaciones más compatibles del zodiaco, porque la conexión kármica es muy fuerte.'
	}
    if ((zodiaco=="Cancer" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='La combinación entre dos Cáncer puede ser realmente buena, porque ambos se levantarán la moral, comprenderán los cambios de humor y cambios en el estado de ánimo mutuamente y con facilidad. Sin embargo, deberán evitar convertirse en un espejo de la debilidad del otro y ahogarse mutuamente en el sentimentalismo.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Leo") || (zodiaco=="Leo" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Son dos signos que conectan a la primera, sobre todo, porque Leo está encantado de tener un fiel seguidor de sus andanzas y un oído fiel al que contar sus aventuras. Leo se dejará mimar y Cáncer se sentirá protegido. Poco a poco irán creando, con solidez, un estable futuro, juntos.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Virgo") || (zodiaco=="Virgo" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Una combinación Cáncer y Virgo tiene compatibilidad muy alta. Esta es una combinación rica y fértil de dos signos femeninos del zodiaco, regidos por la Luna y por Mercurio, respectivamente. La combinación de Cáncer y Virgo produce grandes resultados a todos los niveles.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Son dos signos con un particular sentido del humor. Sin embargo, si Libra es capaz de compartir momentos especiales con la familia del cangrejo hará que éste se abra e incluso que comprenda las “escapadas” de su pareja que, por otro lado, es el signo más social del Zodíaco.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Ambos son apasionados y les gusta vivir las emociones fuertes en la intimidad. ... Escorpio también deberá saber que la ternura y los mimos son fundamentales para Cáncer y éste deberá imprimir un cierto halo de misterio para tener siempre intrigado al inquieto escorpión.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Es una convivencia muy movida y llena de altibajos, sobre todo porque no comparten a la par los quehaceres de la vida, pues mientras Cáncer necesita echar raíces y sentirse emocionalmente seguro, Sagitario viaja ligero de equipaje y adora el riesgo.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Se trata de dos signos opuestos que se complementan a la perfección principalmente porque ambos son leales por naturaleza y aunque pueden tener diferentes puntos de vista con buena voluntad, pueden llegar a conectar y hacer sus vidas más cómodas y confortables.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Sienten las mismas necesidades y se entienden de forma instintiva y en décimas de segundo. Está claro que es una de las relaciones más estables del planeta Zodíaco ya que ambos reúnen todo lo necesario para ser una pareja plenamente llena de sueños y emotividad a flor de piel.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Ese complemento perfecto se puede llegar a conseguir mediante el sentido del humor de ambos, la ternura y la sinceridad. ... El cangrejo deberá soltar lastre, dejar libre a Acuario y vencer así sus miedos. El resultado será una pareja absolutamente auténtica.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Entre ambos deben tener presente que se juntará demasiada fuerza de carácter en poco espacio, lo ideal sería unir esa fuerza para que mire en la misma dirección y así se podría producir una maravillosa relación llena de magia, pasión y aventura.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Virgo") || (zodiaco=="Virgo" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre Leo, que es puro fuego, y Virgo, que es totalmente tierra, es algo compleja y complicada. Demasiado diferentes para coincidir en gustos, ideas y costumbres. Leo puede cansarse de la ordenada pulcritud de Virgo y Virgo puede sentirse relegado ante el éxito social de Leo.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Son dos signos que derrochan energía y unas tremendas ganas de vivir y de disfrutar de la vida. ... Además Libra es capaz de caer rendido ante la sensualidad de Leo y éste feliz por todo el montón de halagos que puede prodigarle, por minuto, el encantador Libra.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='A ambos les encanta el dramatismo e impactar y eso les convierte en dos actores a punto de salir a escena. ... Al principio, puede que Escorpio ceda buscando tranquilidad, pero si Leo se envalentona, la convivencia se resentirá y acabará convirtiéndose en una batalla campal.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Es una relación de grandes coincidencias: Coinciden en fuerza y temperamento, a la vez que en generosidad y nobleza, suficiente para que su unión además de apasionada y divertida, goce de sentido común y comprensión.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Tendrán que hacer ambos un sacrificio importante para que esta relación sea lo más duradera posible, algo que conseguirán no tomándose la vida y el amor con tanta solemnidad y pomposidad. Lo mejor. Admiración, sensualidad, deleite, lealtad y estímulo de superación.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Leo aportará seguridad al emocional Piscis, que se sentirá encantado en el reino dorado del Rey de la selva y este disfrutará de todo el manantial de atenciones que le brinda Piscis. Son sin duda un felino y un pez que se adorarán.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Ambos signos forman un mismo eje zodiacal, siendo cada uno el complemento natural del otro, pero para que esto se note en la convivencia, además de la atracción que les une, deberá existir también la mutua confianza y el deseo de compartir una vida con similares alicientes y deseos.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="virgo")) {
		document.getElementById("juntos").innerHTML='La compatibilidad de Virgo con Virgo es muy alta y en esta relación la palabra clave es el perfeccionismo y de ahí se deriva el principal problema, que deban superar - exigencias excesivas. Virgo es tremendamente aplicado y si funcionan como pareja, juntos serán capaces de mover montañas.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Virgo")) {
		document.getElementById("juntos").innerHTML='Los dos son sumamente detallistas y atentos y podrían llegar a ser una pareja feliz si centran sus atenciones el uno en el otro. Esto es algo que a Virgo no le importará lo más mínimo, sin embargo el signo de la balanza no ve las cosas tan claras, le gusta dispersarse con otras personas y disfrutar del flirteo.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Virgo")) {
		document.getElementById("juntos").innerHTML='Forman un buen equipo en todos los aspectos; por un lado los dos son trabajadores y responsables, y por otro, les une la fluidez en la comunicación y la afinidad en gustos. Además se sienten muy seguros el uno junto al otro.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Virgo")) {
		document.getElementById("juntos").innerHTML='Ambos son dos signos mutables y eso significa que van a intentar adaptarse. Sagitario deberá aprender a ser más cauto y realista y Virgo a ser más audaz y desprendido. También deberá respetar las excentricidades y ese excesivo entusiasmo que siempre demuestra el arquero.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Virgo")) {
		document.getElementById("juntos").innerHTML='La compatibilidad de Capricornio con Virgo es muy alta gracias a una combinación de elementos similares, que da una buena base para su relación. Virgo tendrá una compenetración inmediata con Capricornio. Por algún motivo, Capricornio parece menos serio, para Virgo que para otros signos del Zodiaco.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Virgo")) {
		document.getElementById("juntos").innerHTML='La compatibilidad de Piscis con Virgo es muy buena a pesar de una contradicción entre los dos signos. ... Ambos signos son inconstantes y de humor variable. Piscis es un signo de agua y, por tanto, es sensible y extremadamente intuitivo. Los Virgo, en cambio, son signo de tierra y son racionales y menos emocionales.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="virgo")) {
		document.getElementById("juntos").innerHTML='Si Virgo se olvida de los convencionalismos sociales y se permite algún que otro divertido atrevimiento, la relación resultará emocionante y llena de estímulos para los dos, además, Acuario encontrará en Virgo la virtud de la previsión y la constancia.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='Al principio todo entre ellos destila armonía, buen gusto, perfección, belleza y estética. ... Para que el fuego de este amor basado en la belleza y en los extremos no se apague, ambos deberán echarle mucha ilusión, generosidad y confianza.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='Libra considera que Escorpio es demasiado intenso y se siente abrumado por sus ataques de celos; y el signo del escorpión se siente frustrado ante las cambiantes decisiones de Libra. Para evitar altibajos y discusiones en esta relación conviene ir poco a poco y no darlo todo en las primeras citas.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='Se apoyarán mutuamente y juntos serán capaces de afrontar todo tipo de contratiempos. Además, la insaciable curiosidad de Libra puede verse colmada viviendo junto al imprevisible signo del arquero quien, asimismo, se beneficiará de los oportunos consejos de su pareja.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='El respeto y admiración que Capricornio infunde en Libra puede ser un buen estímulo para comenzar una interesante y fructífera relación, que pronto se convertirá en mutua fascinación.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='Libra encuentra siempre a Piscis como un signo maravilloso y lleno de matices. ... Para ello muchas dosis de amor y cariñitos por parte de Libra y adoración y admiración constantes por parte de Piscis. Así ambos estarán felices y contentos y el equilibrio estará asegurado.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='Son dos signos que sintonizan en cuerpo y alma. Tienen similares ideales y un entendimiento de la vida muy parecido. Acuario verá en Libra alguien con quien compartir sus ideales y, después, se animará a compartir también su vida sin miedo a perder su libertad.'
	}
	if ((zodiaco=="Escorpio" && zodiacoSegundo=="Escorpio")) {
		document.getElementById("juntos").innerHTML='El suyo puede ser un amor épico, de novela, al que no le faltarán desatinos, tormentos, melodrama y una pasión sin freno que puede llevar a ambos a hacer todo tipo de locuras. La convivencia estará repleta de sobresaltos, rupturas pasajeras y ardientes reconciliaciones.'
	}
	if ((zodiaco=="Escorpio" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Escorpio")) {
		document.getElementById("juntos").innerHTML='Se trata de una forma de vivir el amor muy diferente, casi podríamos decir que opuesta; Escorpio necesita tener y retener a la persona amada, sentirla como suya y aspirar al amor eterno; para Sagitario, por el contrario, es vital no verse sujeto a nadie. Pero, los opuestos se atraen y al juntarse saltarán las chispas.'
	}
	if ((zodiaco=="Escorpio" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Escorpio")) {
		document.getElementById("juntos").innerHTML='Aunque es un signo de Agua y otro de Tierra, son dos signos que se compenetran bastante bien e incluso ambos pueden llegar a ser la pareja ideal que decide compartir su vida en lo bueno y en lo malo.'
	}
	if ((zodiaco=="Escorpio" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Escorpio")) {
		document.getElementById("juntos").innerHTML='Sus encuentros son absolutamente apasionados y fecundos pero deben no anegar el terreno que quieren compartir. Ambos pueden ser motivo de estímulo y superación para el otro, si no dejan de lado la confianza y el respeto.'
	}
	if ((zodiaco=="Escorpio" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Escorpio")) {
		document.getElementById("juntos").innerHTML='Ambos están predispuestos al flechazo. Escorpio ve en el signo del Aguador a una persona increíble, llena de matices, excitante y sugerente e incluso extravagante, algo que le seducirá y maravillará a la par. ... Y Escorpio no dar ni una muestra de celos a Acuario.'
	}
	if ((zodiaco=="	Sagitario" && zodiacoSegundo=="Sagitario")) {
		document.getElementById("juntos").innerHTML='Ambos son excelentes amigos y compañeros que descubren juntos que la energía y honestidad que tienen en común es un potente y poderoso estímulo para el cuerpo y el espíritu.'
	}
	if ((zodiaco=="Sagitario" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Sagitario")) {
		document.getElementById("juntos").innerHTML='Puede que al responsable Capricornio le cueste y le asuste un poco formalizar una relación con el liberal Sagitario, pero cuando lo haga su decisión será inamovible y beneficiará a los dos, pues, aunque distintos, se trata de dos signos que se complementan.'
	}
	if ((zodiaco=="Sagitario" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Sagitario")) {
		document.getElementById("juntos").innerHTML='El romanticismo y sensibilidad de Piscis quedarán cautivados por el idealismo y entusiasmo de Sagitario, quien a su vez se dejará seducir por las atenciones del pez, además serán dos buenos consejeros en sus respectivos trabajos y en la formalización de sus ideas.'
	}
	if ((zodiaco=="Sagitario" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Sagitario")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre Sagitario y Acuario es bastante alta y si ambos se esfuerzan un poco, lo más probable es que su relación sea larga y feliz. ... Las parejas Acuario y Sagitario suelen ser muy creativas, porque se unen los ideales de Acuario con el conocimiento de Sagitario.'
	}
	if ((zodiaco=="	Capricornio" && zodiacoSegundo=="Capricornio")) {
		document.getElementById("juntos").innerHTML='Se trata de una relación muy equilibrada de dos personas prácticas, cautelosas y reservadas con unos criterios y puntos de vista muy afines. Además, ambos comparten un sentido del humor muy particular que les hará sentir una entrañable complicidad en muchos aspectos de la vida; y de ahí al amor sólo hay un paso.'
	}
	if ((zodiaco=="Capricornio" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Capricornio")) {
		document.getElementById("juntos").innerHTML='Capricornio estará encantado con el amor y la ternura que Piscis desplegará hacia él. ... Mientras, Piscis encontrará estabilidad en sus emociones y también en las cuestiones más prácticas y domésticas. Pueden llegar a complementarse y a ser muy felices juntos.'
	}
	if ((zodiaco=="Capricornio" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Capricornio")) {
		document.getElementById("juntos").innerHTML='Si ambos logran que las diferencias que existen en la pareja se conviertan en puntos en común para aprender, esta promete ser una relación muy pero que muy interesante. Sin embargo, si la relación va por el lado tormentoso, la historia promete ser digna de una tragedia griega.'
	}
	if ((zodiaco=="Piscis" && zodiacoSegundo=="Piscis")) {
		document.getElementById("juntos").innerHTML='Sin duda se sentirán atraídos el uno por el otro con la seguridad recíproca de haber encontrado el amor de su vida y, seguramente, será así por mucho tiempo, sobre todo si basan la relación en un amor tranquilo y complaciente que les ayuda a crecer.'
	}
	if ((zodiaco=="Piscis" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Piscis")) {
		document.getElementById("juntos").innerHTML='Es una relación con un grado de compatibilidad no muy alto, principalmente porque son dos almas muy distintas. ... La impulsividad de Piscis a la hora de demostrar su cariño, tanto en público como en privado, puede hacer que Acuario se sienta incómodo y se distancie.'
	}
	if ((zodiaco=="Acuario" && zodiacoSegundo=="Acuario")) {
		document.getElementById("juntos").innerHTML='Ya que no hay ningún signo con mayor capacidad para comprender el signo y de no sentirse amenazado por su forma de ser tan distinta y singular. Acuario es extrovertido, sociable y le encanta formar parte de un grupo.'
	}
}