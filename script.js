function showMessageBox() {
    let messageBox = document.getElementById('myMessageBox');
    messageBox.style.display = 'block';
}

function hideMessageBox() {
    let messageBox = document.getElementById('myMessageBox');
    messageBox.style.display = 'none';
}

//mensagem para a alertar o usuário que há alterações não salvas ao tentar fechar a página
window.addEventListener("beforeunload", event => {
    event.preventDefault()
    event.returnValue = ''
})