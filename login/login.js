const login = ()=> {
  const user = document.getElementById('usuario');
  const userData = user.value;
  const pass = document.getElementById('password');
  const passData = pass.value;

console.log(userData);

let getUser = JSON.parse(localStorage.getItem("user")) || [];

console.log(getUser);
const  userFound = getUser.find((us) => us.usuario === userData && us.password === passData)

console.log(userFound);

if (!userFound) {
  document.getElementById('error').innerText = 'Usuario no encontrado'
} else {
  window.location.href='../index.html';
}



}