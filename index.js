function validarSenha() {
  senha = document.getElementById("senha").value;
  csenha = document.getElementById("csenha").value;
  if (senha != csenha) {
    alert("SENHAS DIFERENTES");
  } else {
    document.Formulario.submit();
  }
}
