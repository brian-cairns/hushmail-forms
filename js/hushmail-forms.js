window.resizeTo(350, 600)
const formImage = document.getElementById('formTrigger')
formImage.addEventListener('mouseenter', (e) => {
    window.open('./index.html', '_top', 'popup')
})
