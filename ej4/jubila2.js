var edad;
var sexo;

edad=prompt("Ingrese su edad:", "");
sexo=prompt("Ingrese su Sexo (F|M)", "");

if (edad >64 && sexo==="M"){
  alert("Ud. se encuentra Jubilado");
}
else {
  if(edad>60 && sexo==="F"){
    alert("Ud. se encuentra jubilada");
  }
  else {
    alert("Ud. No es Jubilado");
  }
}
