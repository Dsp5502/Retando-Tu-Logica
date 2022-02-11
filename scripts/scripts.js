function getn1() {
  let numero1 = document.getElementById('numer1').value;
  return numero1;
}

function getn2() {
  let numero2 = document.getElementById('numer2').value;
  return numero2;
}

function ValidarNumeroPositivo(numer1, numer2) {
  if (numer1 < 0 || numer2 < 0) {
    alert('Los numeros son invalidos');
  }
}

function calcularMenor(numer1, numer2) {
  arrmenor = [numer1, numer2];
  numeroMenor = Math.min(...arrmenor);
  alert(`El numero menor es ${numeroMenor}`);
}

function numeroIgual(numer1, numer2) {
  object.is(numer1, numer2);
}

function intercambiarValor(numer1, numer2) {
  numer1 = Number(numer1) + Number(numer2);
  numer2 = Number(numer1) - Number(numer2);
  numer1 = Number(numer1) - Number(numer2);
  console.log(numer1, numer2);

  alert(`el 1er numero ahora es ${numer1} y el 2do numero ahora es ${numer2}`);
}

function sum(numer1, numer2) {
  let suma = Number(numer1) + Number(getn2(numer2));

  alert(`la suma es ${suma}`);
}

function operacion(var1) {
  numero1 = getn1();
  numero2 = getn2();

  ValidarNumeroPositivo(numero1, numero2);

  switch (var1) {
    case 1:
      calcularMenor(numero1, numero2);
      break;
    case 2:
      numeroIgual(numero1, numero2);
      break;
    case 3:
      intercambiarValor(numero1, numero2);
      break;
    case 4:
      sum(numero1, numero2);
      break;

    default:
      alert('Operacion no reconocida');
      break;
  }
}
