let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=600,height=300,left=400,bottom=100, target=_blank`;
const formImage = document.getElementById('formTrigger')
formImage.addEventListener('mouseenter', (e) => {
    window.open('./form.html', 'form', params, 'popup')
})

