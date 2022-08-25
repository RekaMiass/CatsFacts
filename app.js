const button = document.querySelector('#button');
const factText = document.querySelector('#factText');

const url = "https://catfact.ninja/facts";

async function getFact(url) {
    const response = await fetch(url);
    const data = await response.json();
    factText.innerText = data.data[Math.floor(Math.random() * 10)].fact;
    console.log(data);	
}

button.addEventListener('click', () => getFact(url))


