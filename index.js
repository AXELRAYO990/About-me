const target = window.document.getElementsByTagName('h1')[0]

const flickerLetter = letter => `<span style="animation: text-flicker-in-glow ${Math.random() * 4}s linear both ">${letter}</span>`
const colorLetter = letter => `<span style="color: #F9B5D0  ">${letter}</span>`;
const flickerAndColorText = text =>
    text
        .split('')
        .map(flickerLetter)
        .map(colorLetter)
        .join('');
const neonGlory = target => target.innerHTML = flickerAndColorText(target.textContent);


neonGlory(target);
target.onclick = ({ target }) => neonGlory(target);





const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Front End";
    }, 0);
    setTimeout(() => {
        text.textContent = "Streamer";
    }, 2000);
    setTimeout(() => {
        text.textContent = "YouTuber";
    }, 4000); //1s = 1000 milliseconds
}

textLoad();
setInterval(textLoad, 6000);
