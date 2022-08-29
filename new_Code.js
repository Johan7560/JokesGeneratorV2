const button = document.querySelector('#get_joke');
const jokers = document.querySelector('.jokes');

button.addEventListener('click', oomNorris);

async function oomNorris(e) {
	e.preventDefault();
	const responded = await fetch('https://api.chucknorris.io/jokes/random/');
	const data = await responded.json();
	theOne(data);
}

function theOne(xol) {
	jokers.innerHTML += `<li class="list-group-item soloJoke text-white p-3">${xol.value}</li>`;
}
