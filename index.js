function validarSenha() {
  const senha = document.querySelector(input[id=senha]);
  const csenha = document.querySelector(input[id=csenha]);
    if (confirma.value === senha.value){
    confirma.setCustomValidity('');
    } else {
    confirm.setCustomValidity('As senhas não são iguais!');
    }
}