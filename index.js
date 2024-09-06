function validarSenha() {
  const senha = document.querySelector(input[id=senha]);
  const csenha = document.querySelector(input[id=csenha]);
  if (confirma.value === senha.value){
  confirma.setCustomValidity('');
  } else {
      alert("Senhas não condizem!")
  }
  function formenviado(){
      alert("Formulário enviado!")
  }
}