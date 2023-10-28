const login = ()=> {
  const user = document.getElementById('usuario');
  const userData = user.value;
  const pass = document.getElementById('password');
  const passData = pass.value;



let getUser = JSON.parse(localStorage.getItem("user"))


if(getUser.name === userData && getUser.pass === passData){
  document.getElementById('error').innerText = 'lalalalalal';
}else {

  document.getElementById('error').innerText = 'Los datos no son correctos';
}



}