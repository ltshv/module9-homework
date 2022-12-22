
const sendButton = document.querySelector('.send-button');
const result = document.querySelector('.input-result');


sendButton.addEventListener('click', () => {
    const inputValue1 = +document.querySelector('.first-number-input').value;
    const inputValue2 = +document.querySelector('.second-number-input').value;
    if (inputValue1 >=100 && inputValue1 <=300 && inputValue2 >=100 && inputValue2 <= 300) {
        fetch(`https://picsum.photos/${inputValue1}/${inputValue2}`)
            .then((response) => {
            console.log("response", response);
            resultUrl = response.url;

            let cards = '';
            const cardBlock = `
                <div class="card">
                <img
                src="${resultUrl}">
                </div>`;
            cards = cards + cardBlock
            result.innerHTML = cards;
            })
    } else {
        result.innerHTML += `<p>Числа вне диапазона от 100 до 300</p>`
    }
});
