
function verificar() {
    let nome = document.getElementById('nome')
    let senha = document.getElementById('senha')
    let enter = document.getElementById('enter')
    
    if(nome.value.length == 0 || senha.value.length == 0){
        window.alert('Por favor, Realize o seu login!')
    }else{
        location.href = "paginaPrincipal.html"
    }
    

} 