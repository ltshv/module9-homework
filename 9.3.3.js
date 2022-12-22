
const sendButton = document.querySelector('.send-button');
const result = document.querySelector('.input-result');


function useRequest(url, callback) {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', url);

    xhr.onload = function() {
        if (xhr.status != 200) {
          console.log('Статус ответа: ', xhr.status);
        } else {
          const result = JSON.parse(xhr.response);
          if (callback) {
            callback(result);
          }
        }
    };
      
    xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
    };
      
    xhr.send();
};

function displayResult(apiData) {
    let cards = '';
    apiData.forEach(item => {
        const cardBlock = `
        <div class="card">
        <img
        src="${item.download_url}" style="width: 100px; height: 100px">
        <p>${item.author}</p>
        </div>
    `;
    cards = cards + cardBlock
    });

    result.innerHTML = cards;
}

sendButton.addEventListener('click', () => {
    const inputValue = +document.querySelector('.number-input').value;
    if (inputValue >=1 && inputValue <=10) {
        useRequest(`https://picsum.photos/v2/list?limit=${inputValue}`, displayResult)
    } else {
        result.innerHTML += `<p>Число вне диапазона от 1 до 10</p>`
    }
});
