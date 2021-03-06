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
	document.getElementById('textoSigno').innerHTML='Un Aries es una persona llena de energ??a y entusiasmo. Pionero y aventurero, le encantan los retos, la libertad y las nuevas ideas. A los Aries les gusta liderar y prefieren dar instrucciones a recibirlas. ... Aries es el primer signo del zodiaco, y en este sentido su papel es empezar algo y liderar.'
}
function tauro(){
	document.getElementById('tituloCartas').innerHTML='TAURO'
	document.getElementById('textoSigno').innerHTML='Tauro se caracteriza por ser pl??cido gran parte del tiempo, como impetuoso y hasta brutal cuando se enoja, como el animal que lo representa. Pertenece al elemento Tierra, con lo cual es pr??ctico, ordenado, trabajador, ambicioso, serio y pragm??tico.'
}
function geminis(){
	document.getElementById('tituloCartas').innerHTML='GEMINIS'
	document.getElementById('textoSigno').innerHTML='Los g??minis tienes una gran adaptabilidad y versatilidad. Las personas que nacieron bajo este signo son intelectuales, elocuentes, cari??osos, comunicativos e inteligentes. Tienen mucha energ??a y vitalidad. Les gusta hablar, leer, hacer varias cosas a la vez.'
}
function piscis(){
 	document.getElementById('tituloCartas').innerHTML='PISCIS'
 	document.getElementById('textoSigno').innerHTML='Los Piscis son personas tranquilas, pacientes y amables. Son sensibles a los sentimientos de los dem??s y responden con simpat??a y tacto al sufrimiento de las personas que los rodean. Son muy queridos por los dem??s porque tienen un car??cter afable, cari??oso y amable.'
}
function virgo(){
	document.getElementById('tituloCartas').innerHTML='VIRGO'
	document.getElementById('textoSigno').innerHTML='Virgo busca la perfecci??n en todo lo que hace, es pr??ctico, l??gico y siente la necesidad de que todo funcione como un relojito. No les gusta recibir favores, tienen vocaci??n de servicio y saben disfrutar realmente del deber cumplido. Nunca pisa un suelo que no conoce, es honesto y muy inteligente.'
}
function cancer(){
	document.getElementById('tituloCartas').innerHTML='CANCER'
	document.getElementById('textoSigno').innerHTML='C??ncer, cuarto signo del Zod??aco, cardinal, y primero del elemento Agua, representa lo femenino, lo fecundo y est?? regido por las emociones de la Luna. ... Leales, emotivos, constantes, protectores, tradicionalistas, sensuales, intuitivos, y golosos, a este signo de Agua se lo asocia con la necesidad de seguridad.'
}
function leo(){
	document.getElementById('tituloCartas').innerHTML='LEO'
	document.getElementById('textoSigno').innerHTML='Leo pertenece al elemento Fuego y est?? caracterizado por su coraje, convicci??n y capacidad de liderazgo. Independiente e inconformista, su mente activa es siempre generadora de empresas brillantes y lucrativas. Suelen ser muy orgullosos por lo cual no les gusta pedir ayuda, ellos se bastan para lo que sea.'
}
function libra(){
	document.getElementById('tituloCartas').innerHTML='LIBRA'
	document.getElementById('textoSigno').innerHTML='Los libra se encuentran entre los signos m??s civilizados del zodiaco. Tienen encanto, elegancia y buen gusto, y son amables y pac??ficos. Les gusta la belleza y la armon??a y son capaces de ser imparcial ante conflictos. ... Un libra tiende a ser sensible a las necesidades de los dem??s y suele ser muy sociable.'
}
function escorpio(){
	document.getElementById('ttituloCartas').innerHTML='ESCORPIO'
	document.getElementById('textoSigno').innerHTML='Escorpio es un signo intenso con una energ??a emocional ??nica en todo el zodiaco. Son emocionales y f??cilmente heridos o aludidos. De hecho pueden perder totalmente el genio al percibir, incluso err??neamente, que alguien les ha insultado. No saben morderse la lengua y pueden ser muy cr??ticos.'
}
function sagitario(){
	document.getElementById('tituloCartas').innerHTML='SAGITARIO'
	document.getElementById('textoSigno').innerHTML='Su car??cter es jovial y su principal ideal, la justicia. Es sincero, curioso, ??gil e impulsivo, con una b??squeda constante de superaci??n personal. Le gusta el contacto con la gente, viajar, explorar y estar en continuo movimiento. Entre sus virtudes se destacan su actitud ben??vola, la generosidad y franqueza.'
}
function capricornio(){
	document.getElementById('tituloCartas').innerHTML='CAPRICORNIO'
	document.getElementById('textoSigno').innerHTML='Un capricornio es un de los signos del zodiaco m??s estables, seguros y tranquilos. Son trabajadores, responsables y pr??cticos y dispuestos a persistir hasta sea necesario para conseguir su objetivo. Son fiables y muchas veces tienen el papel de terminar un proyecto iniciado por uno de los signos m??s pioneros.'
}

function acuario(){
	document.getElementById('tituloCartas').innerHTML='ACUARIO'
	document.getElementById('textoSigno').innerHTML='Un acuario representa la revoluci??n y su s??mbolo figura el agua; pertenece junto a G??minis y Libra al elemento aire. El hombre y la mujer de este signo zodiacal pueden ser de personalidad fuerte o t??mida, pasiva, tambi??n, una persona de acuario es honesta, tolerante, sin perjuicios, sincero, refinado y humano.'
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
		document.getElementById("juntos").innerHTML='Dos hijos de Marte juntos pueden provocar, con s??lo una mirada, chispas y hasta fuegos artificiales, aunque tambi??n es f??cil que predominen luchas de egos; lo suyo no son las medias tintas sino el todo o nada.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Tauro") || (zodiaco=="Tauro" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Aries es impaciente y le gustan las sorpresas mientras que Tauro se caracteriza por su estoicismo y temple. La relaci??n promete ser estable si ambos est??n dispuestos a aprender, pues el equilibrio de la compensaci??n es una de las principales lecciones a aprender por ambas partes.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Geminis") || (zodiaco=="Geminis" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Los dos se sienten muy a gusto nada m??s conocerse y al segundo se hacen amigos inseparables. La relaci??n estar?? basada en grandes horas de conversaci??n sobre todo tipo de temas, mucho sentido del humor y un parecido gusto por la diversi??n y las risas.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Cancer") || (zodiaco=="Cancer" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='El Agua voluble y emocional de C??ncer y el Fuego c??lido e imprevisible de Aries se funden en esta relaci??n que necesita grandes dosis de paciencia por parte del ansioso Aries y de respetar la libertad del otro para el celoso ???cangrejo???.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Leo") || (zodiaco=="Leo" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre Aries y Leo es alt??sima. Ambos son signos de fuego, lo cual puede dar lugar a algunas confrontaciones y a un choque de egos. Tanto Aries como Leo son individuos impulsivos, con una gran creatividad, por lo que ambos est??n en condiciones de entender y apoyar las ambiciones del otro.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Son dos almas que ponen toda su pasi??n en cada cosa que hacen. Disfrutan de la vida y saben bien c??mo exprimirle todo su jugo. Sin embargo, ese fuego de Aries es el que provoca la chispa que Libra necesita para encender sus ilusiones.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Muchos signos simplemente no tienen la energ??a necesaria para seguir el ritmo de Escorpio, pero Aries tiene ambas, tanto f??sica como mental, otro punto a favor para el ??xito de la relaci??n. Sexualmente son muy compatibles, puesto que ambos est??n regidos por el apasionado Marte.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Ambos son joviales, buscadores, aventureros y espont??neos. Hacen una pareja estupenda, y nada se les pondr?? por delante cuando tomen la decisi??n de viajar por el mundo, o de compartir la vida, juntos.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Capricornio se sentir?? felizmente rejuvenecido con el intr??pido Aries y ??ste encontrar?? su apoyo m??s fiel en el signo de la cabra. Adem??s, para que la relaci??n no caiga en la desidia, Capricornio deber?? abrirse y aprender a decir ???te quiero??? m??s a menudo.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Aries y Acuario tienen mucho en com??n y un grado de compatibilidad muy alto. Ambos signos son independientes, humanitarios, optimistas y entusiastas. Les gustan las emociones fuertes, la valent??a y car??cter progresivo de los Acuario tienden a atraer mucho a los Aries.'
	}
	if ((zodiaco=="Aries" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Aries")) {
		document.getElementById("juntos").innerHTML='Si logran formar una pareja estable, es probable que sea una relaci??n fuera de lo com??n. El fuego de Aries puede a veces ser extinguido por el agua de Piscis, que puede pertubar el lado feliz y divertido de su pareja Aries. Aries es un signo muy optimista, mientras Piscis tiende a ser mucho m??s pesimista y cauteloso.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Es muy alta. Tauro es el signo de la tierra y esto constituye una base muy s??lida para la relaci??n. Hay algo simple y franco en los Tauro. Son pr??cticos y no se complican demasiado, por lo que son muy compatibles en una relaci??n.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Geminis") || (zodiaco=="Geminis" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Un signo t??mido como Tauro se sentir?? muy atra??do por la rapidez, ingenio e inteligencia de G??minis ya que despertar?? su inter??s por conocer cosas nuevas y estar al d??a; Y G??minis admirar?? la determinaci??n con la que Tauro llega a conseguir cualquier meta y tambi??n el modo en que se gu??a por sus sentidos y emociones.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Cancer") || (zodiaco=="Cancer" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Es una uni??n excelente para convivir disfrutando de los peque??os y grandes placeres que ofrece la vida. C??ncer tambi??n sabr?? c??mo darle a Tauro esa devoci??n que tanto necesita mientras que Tauro otorgar?? dosis de paciencia para calmar los constantes cambio de ??nimo del cangrejo.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Leo") || (zodiaco=="Leo" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Se atraen y son la pareja ideal para un apasionado romance sin mayores compromisos. Aunque si les tienta el riesgo y las experiencias fuertes siempre tendr??n la opci??n de sellar la relaci??n con un compromiso m??s formal.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Virgo") || (zodiaco=="Virgo" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML=' Tanto Virgo como Tauro son pr??cticos; los dos son signos de Tierra y cuando se combina Tierra con Tierra se obtiene una base s??lida, para una larga relaci??n. Ambos signos se complementar??n entre s?? a muchos niveles: f??sicamente, emocionalmente y mentalmente.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Se sienten atra??dos, el uno al otro, desde el principio pero el car??cter de Libra choca con el inalterable esp??ritu de Tauro, principalmente porque Libra se pasa la mayor parte de su vida cambiando sus decisiones y eso pone de los nervios a un signo con opiniones fijas e inalterables.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Son dos signos opuestos que sienten una atracci??n f??sica y ps??quica al momento. La relaci??n puede ser fecunda y apasionada pero para que Tauro pueda sentirse seguro del terreno que pisa y las emociones de Escorpio no se desborden, es fundamental que ambos respeten sus libertades b??sicas.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Se trata de una relaci??n un tanto compleja, sobre todo para Tauro, que no ganar?? para sustos al ver c??mo se tambalea su estabilidad al trote de Sagitario que siempre buscar?? salir de casa y experimentar mil aventuras.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre Capricornio y Tauro es muy alta, porque tienen mucho en com??n y pueden esperar ser muy felices juntos. El sentido pr??ctico de Capricornio se lleva bien con la actitud realista de Tauro. Su conexi??n inicial con Capricornio ser?? buena y Tauro encontrar?? muchas similitudes con su pareja.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Le encanta su manera de enfocar la realidad, sus pies siempre en el suelo y Tauro se siente intrigado por un signo tan visceral y extra??o. Relaci??n fecunda y duradera, en la que Piscis disfrutar?? de una agradable estabilidad emocional y Tauro de la ternura y comprensi??n que anhela.'
	}
	if ((zodiaco=="Tauro" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Tauro")) {
		document.getElementById("juntos").innerHTML='Es una relaci??n en la que Tauro se lo va a tener que trabajar mucho m??s si no quiere que Acuario salga volando, pero para ello deber?? vivir el presente sin programar el futuro y hacer un gran esfuerzo por abrirse al mundo y romper, sin miedo, alguna de sus ajustadas normas.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='La compatibilidad de G??minis con G??minis es alta y lo m??s probable, que una pareja de dos G??minis tengan una relaci??n llena de diversi??n, aventura y variedad aunque tengan que aprender virtudes como la paciencia y el compromiso para que funcione a largo plazo. Aunque no sean excesivamente celosos, los G??minis s?? son muy posesivos en sus relaciones de pareja, y en este sentido ambos tendr??n que llevar cuidado para no darle motivos para desconfiar a su pareja.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Cancer") || (zodiaco=="Cancer" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='En el lado positivo de la relaci??n ambos son dos signos muy so??adores y con una tremenda imaginaci??n que se complementa adem??s de tener un humor brillante y mutable que no todo el mundo puede llegar a entender. Lo mejor. Lo que pueden aprender juntos el uno del otro.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Leo") || (zodiaco=="Leo" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre Leo y G??minis es bastante alta y en esta relaci??n ambos descubrir??n tener mucho en com??n. Tanto a G??minis como a Leo les encanta divertirse. Los dos tienen una naturaleza aventurera y disfrutan de la vida. Se encontrar??n mutuamente fascinantes y disfrutar??n en compa????a del otro.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Virgo") || (zodiaco=="Virgo" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='En principio pueden llegar a ser excelentes amigos, pero si pasan de la amistad al amor de pareja, la convivencia puede ser algo m??s compleja, sobre todo, porque Virgo siempre querr?? atar corto a un signo que siempre necesitar?? sus dosis de libertad para ser feliz.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='Presentan una excelente compatibilidad, por lo que si esta es la combinaci??n de tu relaci??n hay muchas probabilidades de que seas extremadamente feliz durante mucho tiempo. Incluso se trata de una combinaci??n tan afortunada, que se podr??a decir que existe un toque de magia entre ambos signos.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='Si G??minis cede protagonismo y acepta al Escorpi??n, pueden ser una pareja especial. Son dos signos muy particulares y eso queda muy patente en cuanto se encuentran frente a frente. La rapidez mental de G??minis unida a la intensidad con que se entregar?? Escorpio, har?? que formen una pareja muy s??lida.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='Se trata de dos signos libres como el viento que necesitan su propio espacio para ser felices y sentirse plenos. Adem??s, los dos son muy inquietos y respetan profundamente la libertad de cada uno. Son tambi??n dos signos muy divertidos, seductores y muy sociables.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='Se trata de dos signos muy distintos que compaginan muy bien en el terreno intelectual. Adem??s, trabajando juntos forman un equipo envidiable, tanto, que se pasan horas y horas en la cama hablando de sus sue??os y de la manera de materializarlos.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='La compatibilidad de G??minis y Piscis es como la que poseen cerebro y coraz??n. Lo uno y lo otro hacen que vean y vivan la vida de formas muy distintas: Piscis se mueve m??s por impulsos e intuiciones; G??minis, sin embargo es terriblemente racional en comparaci??n, basando sus decisiones en cosas m??s tangibles.'
	}
	if ((zodiaco=="Geminis" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Geminis")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre los signos Acuario y G??minis es muy alta, ya que ambos esperan sacar m??s o menos lo mismo de la vida. Tienen planteamientos muy parecidos e incluso a nivel intelectual son compatibles. Es una de las combinaciones m??s compatibles del zodiaco, porque la conexi??n k??rmica es muy fuerte.'
	}
    if ((zodiaco=="Cancer" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='La combinaci??n entre dos C??ncer puede ser realmente buena, porque ambos se levantar??n la moral, comprender??n los cambios de humor y cambios en el estado de ??nimo mutuamente y con facilidad. Sin embargo, deber??n evitar convertirse en un espejo de la debilidad del otro y ahogarse mutuamente en el sentimentalismo.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Leo") || (zodiaco=="Leo" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Son dos signos que conectan a la primera, sobre todo, porque Leo est?? encantado de tener un fiel seguidor de sus andanzas y un o??do fiel al que contar sus aventuras. Leo se dejar?? mimar y C??ncer se sentir?? protegido. Poco a poco ir??n creando, con solidez, un estable futuro, juntos.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Virgo") || (zodiaco=="Virgo" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Una combinaci??n C??ncer y Virgo tiene compatibilidad muy alta. Esta es una combinaci??n rica y f??rtil de dos signos femeninos del zodiaco, regidos por la Luna y por Mercurio, respectivamente. La combinaci??n de C??ncer y Virgo produce grandes resultados a todos los niveles.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Son dos signos con un particular sentido del humor. Sin embargo, si Libra es capaz de compartir momentos especiales con la familia del cangrejo har?? que ??ste se abra e incluso que comprenda las ???escapadas??? de su pareja que, por otro lado, es el signo m??s social del Zod??aco.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Ambos son apasionados y les gusta vivir las emociones fuertes en la intimidad. ... Escorpio tambi??n deber?? saber que la ternura y los mimos son fundamentales para C??ncer y ??ste deber?? imprimir un cierto halo de misterio para tener siempre intrigado al inquieto escorpi??n.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Es una convivencia muy movida y llena de altibajos, sobre todo porque no comparten a la par los quehaceres de la vida, pues mientras C??ncer necesita echar ra??ces y sentirse emocionalmente seguro, Sagitario viaja ligero de equipaje y adora el riesgo.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Se trata de dos signos opuestos que se complementan a la perfecci??n principalmente porque ambos son leales por naturaleza y aunque pueden tener diferentes puntos de vista con buena voluntad, pueden llegar a conectar y hacer sus vidas m??s c??modas y confortables.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Sienten las mismas necesidades y se entienden de forma instintiva y en d??cimas de segundo. Est?? claro que es una de las relaciones m??s estables del planeta Zod??aco ya que ambos re??nen todo lo necesario para ser una pareja plenamente llena de sue??os y emotividad a flor de piel.'
	}
	if ((zodiaco=="Cancer" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Cancer")) {
		document.getElementById("juntos").innerHTML='Ese complemento perfecto se puede llegar a conseguir mediante el sentido del humor de ambos, la ternura y la sinceridad. ... El cangrejo deber?? soltar lastre, dejar libre a Acuario y vencer as?? sus miedos. El resultado ser?? una pareja absolutamente aut??ntica.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Entre ambos deben tener presente que se juntar?? demasiada fuerza de car??cter en poco espacio, lo ideal ser??a unir esa fuerza para que mire en la misma direcci??n y as?? se podr??a producir una maravillosa relaci??n llena de magia, pasi??n y aventura.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Virgo") || (zodiaco=="Virgo" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre Leo, que es puro fuego, y Virgo, que es totalmente tierra, es algo compleja y complicada. Demasiado diferentes para coincidir en gustos, ideas y costumbres. Leo puede cansarse de la ordenada pulcritud de Virgo y Virgo puede sentirse relegado ante el ??xito social de Leo.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Son dos signos que derrochan energ??a y unas tremendas ganas de vivir y de disfrutar de la vida. ... Adem??s Libra es capaz de caer rendido ante la sensualidad de Leo y ??ste feliz por todo el mont??n de halagos que puede prodigarle, por minuto, el encantador Libra.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='A ambos les encanta el dramatismo e impactar y eso les convierte en dos actores a punto de salir a escena. ... Al principio, puede que Escorpio ceda buscando tranquilidad, pero si Leo se envalentona, la convivencia se resentir?? y acabar?? convirti??ndose en una batalla campal.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Es una relaci??n de grandes coincidencias: Coinciden en fuerza y temperamento, a la vez que en generosidad y nobleza, suficiente para que su uni??n adem??s de apasionada y divertida, goce de sentido com??n y comprensi??n.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Tendr??n que hacer ambos un sacrificio importante para que esta relaci??n sea lo m??s duradera posible, algo que conseguir??n no tom??ndose la vida y el amor con tanta solemnidad y pomposidad. Lo mejor. Admiraci??n, sensualidad, deleite, lealtad y est??mulo de superaci??n.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Leo aportar?? seguridad al emocional Piscis, que se sentir?? encantado en el reino dorado del Rey de la selva y este disfrutar?? de todo el manantial de atenciones que le brinda Piscis. Son sin duda un felino y un pez que se adorar??n.'
	}
	if ((zodiaco=="Leo" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Leo")) {
		document.getElementById("juntos").innerHTML='Ambos signos forman un mismo eje zodiacal, siendo cada uno el complemento natural del otro, pero para que esto se note en la convivencia, adem??s de la atracci??n que les une, deber?? existir tambi??n la mutua confianza y el deseo de compartir una vida con similares alicientes y deseos.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="virgo")) {
		document.getElementById("juntos").innerHTML='La compatibilidad de Virgo con Virgo es muy alta y en esta relaci??n la palabra clave es el perfeccionismo y de ah?? se deriva el principal problema, que deban superar - exigencias excesivas. Virgo es tremendamente aplicado y si funcionan como pareja, juntos ser??n capaces de mover monta??as.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Libra") || (zodiaco=="Libra" && zodiacoSegundo=="Virgo")) {
		document.getElementById("juntos").innerHTML='Los dos son sumamente detallistas y atentos y podr??an llegar a ser una pareja feliz si centran sus atenciones el uno en el otro. Esto es algo que a Virgo no le importar?? lo m??s m??nimo, sin embargo el signo de la balanza no ve las cosas tan claras, le gusta dispersarse con otras personas y disfrutar del flirteo.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Virgo")) {
		document.getElementById("juntos").innerHTML='Forman un buen equipo en todos los aspectos; por un lado los dos son trabajadores y responsables, y por otro, les une la fluidez en la comunicaci??n y la afinidad en gustos. Adem??s se sienten muy seguros el uno junto al otro.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Virgo")) {
		document.getElementById("juntos").innerHTML='Ambos son dos signos mutables y eso significa que van a intentar adaptarse. Sagitario deber?? aprender a ser m??s cauto y realista y Virgo a ser m??s audaz y desprendido. Tambi??n deber?? respetar las excentricidades y ese excesivo entusiasmo que siempre demuestra el arquero.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Virgo")) {
		document.getElementById("juntos").innerHTML='La compatibilidad de Capricornio con Virgo es muy alta gracias a una combinaci??n de elementos similares, que da una buena base para su relaci??n. Virgo tendr?? una compenetraci??n inmediata con Capricornio. Por alg??n motivo, Capricornio parece menos serio, para Virgo que para otros signos del Zodiaco.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Virgo")) {
		document.getElementById("juntos").innerHTML='La compatibilidad de Piscis con Virgo es muy buena a pesar de una contradicci??n entre los dos signos. ... Ambos signos son inconstantes y de humor variable. Piscis es un signo de agua y, por tanto, es sensible y extremadamente intuitivo. Los Virgo, en cambio, son signo de tierra y son racionales y menos emocionales.'
	}
	if ((zodiaco=="Virgo" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="virgo")) {
		document.getElementById("juntos").innerHTML='Si Virgo se olvida de los convencionalismos sociales y se permite alg??n que otro divertido atrevimiento, la relaci??n resultar?? emocionante y llena de est??mulos para los dos, adem??s, Acuario encontrar?? en Virgo la virtud de la previsi??n y la constancia.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='Al principio todo entre ellos destila armon??a, buen gusto, perfecci??n, belleza y est??tica. ... Para que el fuego de este amor basado en la belleza y en los extremos no se apague, ambos deber??n echarle mucha ilusi??n, generosidad y confianza.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Escorpio") || (zodiaco=="Escorpio" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='Libra considera que Escorpio es demasiado intenso y se siente abrumado por sus ataques de celos; y el signo del escorpi??n se siente frustrado ante las cambiantes decisiones de Libra. Para evitar altibajos y discusiones en esta relaci??n conviene ir poco a poco y no darlo todo en las primeras citas.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='Se apoyar??n mutuamente y juntos ser??n capaces de afrontar todo tipo de contratiempos. Adem??s, la insaciable curiosidad de Libra puede verse colmada viviendo junto al imprevisible signo del arquero quien, asimismo, se beneficiar?? de los oportunos consejos de su pareja.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='El respeto y admiraci??n que Capricornio infunde en Libra puede ser un buen est??mulo para comenzar una interesante y fruct??fera relaci??n, que pronto se convertir?? en mutua fascinaci??n.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='Libra encuentra siempre a Piscis como un signo maravilloso y lleno de matices. ... Para ello muchas dosis de amor y cari??itos por parte de Libra y adoraci??n y admiraci??n constantes por parte de Piscis. As?? ambos estar??n felices y contentos y el equilibrio estar?? asegurado.'
	}
	if ((zodiaco=="Libra" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Libra")) {
		document.getElementById("juntos").innerHTML='Son dos signos que sintonizan en cuerpo y alma. Tienen similares ideales y un entendimiento de la vida muy parecido. Acuario ver?? en Libra alguien con quien compartir sus ideales y, despu??s, se animar?? a compartir tambi??n su vida sin miedo a perder su libertad.'
	}
	if ((zodiaco=="Escorpio" && zodiacoSegundo=="Escorpio")) {
		document.getElementById("juntos").innerHTML='El suyo puede ser un amor ??pico, de novela, al que no le faltar??n desatinos, tormentos, melodrama y una pasi??n sin freno que puede llevar a ambos a hacer todo tipo de locuras. La convivencia estar?? repleta de sobresaltos, rupturas pasajeras y ardientes reconciliaciones.'
	}
	if ((zodiaco=="Escorpio" && zodiacoSegundo=="Sagitario") || (zodiaco=="Sagitario" && zodiacoSegundo=="Escorpio")) {
		document.getElementById("juntos").innerHTML='Se trata de una forma de vivir el amor muy diferente, casi podr??amos decir que opuesta; Escorpio necesita tener y retener a la persona amada, sentirla como suya y aspirar al amor eterno; para Sagitario, por el contrario, es vital no verse sujeto a nadie. Pero, los opuestos se atraen y al juntarse saltar??n las chispas.'
	}
	if ((zodiaco=="Escorpio" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Escorpio")) {
		document.getElementById("juntos").innerHTML='Aunque es un signo de Agua y otro de Tierra, son dos signos que se compenetran bastante bien e incluso ambos pueden llegar a ser la pareja ideal que decide compartir su vida en lo bueno y en lo malo.'
	}
	if ((zodiaco=="Escorpio" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Escorpio")) {
		document.getElementById("juntos").innerHTML='Sus encuentros son absolutamente apasionados y fecundos pero deben no anegar el terreno que quieren compartir. Ambos pueden ser motivo de est??mulo y superaci??n para el otro, si no dejan de lado la confianza y el respeto.'
	}
	if ((zodiaco=="Escorpio" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Escorpio")) {
		document.getElementById("juntos").innerHTML='Ambos est??n predispuestos al flechazo. Escorpio ve en el signo del Aguador a una persona incre??ble, llena de matices, excitante y sugerente e incluso extravagante, algo que le seducir?? y maravillar?? a la par. ... Y Escorpio no dar ni una muestra de celos a Acuario.'
	}
	if ((zodiaco=="	Sagitario" && zodiacoSegundo=="Sagitario")) {
		document.getElementById("juntos").innerHTML='Ambos son excelentes amigos y compa??eros que descubren juntos que la energ??a y honestidad que tienen en com??n es un potente y poderoso est??mulo para el cuerpo y el esp??ritu.'
	}
	if ((zodiaco=="Sagitario" && zodiacoSegundo=="Capricornio") || (zodiaco=="Capricornio" && zodiacoSegundo=="Sagitario")) {
		document.getElementById("juntos").innerHTML='Puede que al responsable Capricornio le cueste y le asuste un poco formalizar una relaci??n con el liberal Sagitario, pero cuando lo haga su decisi??n ser?? inamovible y beneficiar?? a los dos, pues, aunque distintos, se trata de dos signos que se complementan.'
	}
	if ((zodiaco=="Sagitario" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Sagitario")) {
		document.getElementById("juntos").innerHTML='El romanticismo y sensibilidad de Piscis quedar??n cautivados por el idealismo y entusiasmo de Sagitario, quien a su vez se dejar?? seducir por las atenciones del pez, adem??s ser??n dos buenos consejeros en sus respectivos trabajos y en la formalizaci??n de sus ideas.'
	}
	if ((zodiaco=="Sagitario" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Sagitario")) {
		document.getElementById("juntos").innerHTML='La compatibilidad entre Sagitario y Acuario es bastante alta y si ambos se esfuerzan un poco, lo m??s probable es que su relaci??n sea larga y feliz. ... Las parejas Acuario y Sagitario suelen ser muy creativas, porque se unen los ideales de Acuario con el conocimiento de Sagitario.'
	}
	if ((zodiaco=="	Capricornio" && zodiacoSegundo=="Capricornio")) {
		document.getElementById("juntos").innerHTML='Se trata de una relaci??n muy equilibrada de dos personas pr??cticas, cautelosas y reservadas con unos criterios y puntos de vista muy afines. Adem??s, ambos comparten un sentido del humor muy particular que les har?? sentir una entra??able complicidad en muchos aspectos de la vida; y de ah?? al amor s??lo hay un paso.'
	}
	if ((zodiaco=="Capricornio" && zodiacoSegundo=="Piscis") || (zodiaco=="Piscis" && zodiacoSegundo=="Capricornio")) {
		document.getElementById("juntos").innerHTML='Capricornio estar?? encantado con el amor y la ternura que Piscis desplegar?? hacia ??l. ... Mientras, Piscis encontrar?? estabilidad en sus emociones y tambi??n en las cuestiones m??s pr??cticas y dom??sticas. Pueden llegar a complementarse y a ser muy felices juntos.'
	}
	if ((zodiaco=="Capricornio" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Capricornio")) {
		document.getElementById("juntos").innerHTML='Si ambos logran que las diferencias que existen en la pareja se conviertan en puntos en com??n para aprender, esta promete ser una relaci??n muy pero que muy interesante. Sin embargo, si la relaci??n va por el lado tormentoso, la historia promete ser digna de una tragedia griega.'
	}
	if ((zodiaco=="Piscis" && zodiacoSegundo=="Piscis")) {
		document.getElementById("juntos").innerHTML='Sin duda se sentir??n atra??dos el uno por el otro con la seguridad rec??proca de haber encontrado el amor de su vida y, seguramente, ser?? as?? por mucho tiempo, sobre todo si basan la relaci??n en un amor tranquilo y complaciente que les ayuda a crecer.'
	}
	if ((zodiaco=="Piscis" && zodiacoSegundo=="Acuario") || (zodiaco=="Acuario" && zodiacoSegundo=="Piscis")) {
		document.getElementById("juntos").innerHTML='Es una relaci??n con un grado de compatibilidad no muy alto, principalmente porque son dos almas muy distintas. ... La impulsividad de Piscis a la hora de demostrar su cari??o, tanto en p??blico como en privado, puede hacer que Acuario se sienta inc??modo y se distancie.'
	}
	if ((zodiaco=="Acuario" && zodiacoSegundo=="Acuario")) {
		document.getElementById("juntos").innerHTML='Ya que no hay ning??n signo con mayor capacidad para comprender el signo y de no sentirse amenazado por su forma de ser tan distinta y singular. Acuario es extrovertido, sociable y le encanta formar parte de un grupo.'
	}
}