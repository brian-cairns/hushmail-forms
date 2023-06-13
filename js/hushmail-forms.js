window.resizeTo(350, 600)
const formImage = document.getElementById('formTrigger')
formImage.addEventListener('mouseenter', (e) => {
    window.open('./form.html', '_top', 'popup')
})
