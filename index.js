function validarSenha() {
  const senha = document.querySelector('input[id=senha]');
  const csenha = document.querySelector('input[id=csenha]');
  if (csenha.value === senha.value){
  csenha.setCustomValidity('');
  } else {
      csenha.setCustomValidity('As senhas não conferem');
  }
}
  function formenviado(){
      alert("Formulário enviado!")
  }