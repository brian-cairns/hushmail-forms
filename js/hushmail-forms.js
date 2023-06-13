const priorUrl = Document.referrer
console.log(priorUrl)

const formImage = document.getElementById('formTrigger')
formImage.addEventListener('mouseenter', (e) => {
    window.open('./form.html', '_top', 'popup')
})

const close = document.getElementById('close');
close.addEventListener('click', (e) => {
    window.close()
    location.href = priorUrl
})