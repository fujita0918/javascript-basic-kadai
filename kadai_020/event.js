const Btn = document.getElementById('btn');
const changeText = document.getElementById('text');

Btn.addEventListener('click', () => {
    const addText = document.createElement('h2');
    addText.textContent = 'ボタンをクリックしました'; 
    changeText.appendChild(addText);
    text.textContent = 'ボタンをクリックしました。';
});


