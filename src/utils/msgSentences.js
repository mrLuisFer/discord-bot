'use strict'

let mensajes = [
	'Parece que alguien quiere llamar la atencion',
	'Todo bien en casa?',
	'Tu mama cocina muy rico',
	"Don't worry, Be happy!",
	'Todo es divertido, siempre y cuando le ocurra a otra persona',
	'Las mejores cosas de la vida te deshacen el pelo',
	'No soy vago, estoy en modo ahorro de energía',
	'Lo malo no es vivir en las nubes, sino bajar',
	'Odio ser bipolar, es una sensación fantástica',
	'Previsión del tiempo para esta noche: estará oscuro',
	'Lo más cerca que una persona llega a la perfección es el día que rellena una solicitud de empleo',
	'Un día sin sol es, ya sabes, de noche',
	'No renuncies a tus sueños... Sigue durmiendo',
	'El tiempo sin ti es empo',
	'Tengo que ir al oculista, pero nunca veo el momento',
	'Si buscas una mano que te ayude... ¡Búscala al final de tu brazo!',
	'Lo importante no es ganar, es hacer perder al otro',
	'Solía pensar que soy indeciso, pero ahora no estoy seguro',
	'Tu ignorancia es enciclopédica',
	'Hay dos palabras que te abrirán muchas puertas: Tire y Empuje',
	'Siembra un árbol y harás feliz a un perro',
	'Ríe y el mundo reirá contigo, ronca y dormirás solo',
	'Si no puedes convencerlos, confúndelos',
	'Al que madruga, nadie le hace el desayuno',
	'Gracias a Dios que soy ateo',
	'Me hago responsable de lo que digo, no de lo que entiendas',
	'Si el mundo es un pañuelo, ¿nosotros qué somos?',
	'Odio que hablen cuando interrumpo',
	'Lo importante no es saber, sino tener el teléfono del que sabe',
	'Más vale tarde, porque por la mañana duermo',
	'Que tranza',
	'Una persona es feliz cuando encuentra la felicidad',
]
let aleatorio = Math.floor(Math.random() * mensajes.length)

module.exports = {
	mensajes,
	aleatorio,
}
