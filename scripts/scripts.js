//Traer info Input
function getn1() {
  let numero1 = document.getElementById('numer1').value;
  return numero1;
}

function getn2() {
  let numero2 = document.getElementById('numer2').value;
  return numero2;
}

// Validar Input Vacios
function validar1(numer1) {
  if (numer1 == '') {
    alert('Campo numero 2 vacio. Ingrese un numero');
    return false;
  } else {
    return true;
  }
}
function validar2(numer2) {
  if (numer2 == '') {
    alert('Campo numero 2 vacio. Ingrese un numero');
    return false;
  } else {
    return true;
  }
}

// Validar numeros positivos y enteros
function ValidarNumeroPositivo(numer1, numer2) {
  if (numer1 < 0 || numer2 < 0) {
    return true;
  } else {
    return false;
  }
}
function validarNumeroEntero(numer1, numer2) {
  numEntero1 = Number.isInteger(numer1);
  numEntero2 = Number.isInteger(numer2);
  if (numEntero1 == false || numEntero2 == false) {
    alert(
      'Los numeros ingresados no son validos, ( Solo ingresar numeros enteros positivos'
    );
  }
}

//funciones de los cuatro botones

// En la funcion calcular menor  se esta calculando como dice el enunciado sin if else lo que se esta  calculando
// con el if es si los numeros ingresados son iguales
function calcularMenor(numer1, numer2) {
  arrmenor = [numer1, numer2];
  sonIguales = Object.is(arrmenor[0], arrmenor[1]);
  if (sonIguales) {
    alert(`Error: Los numeros ingresados son iguales `);
  } else {
    numeroMenor = Math.min(...arrmenor);
    alert(`El numero menor entre los dos numeros es ${numeroMenor}`);
  }
}

function numeroIgual(numer1, numer2) {
  let comparar = Object.is(numer1, numer2);
  if (comparar) {
    alert('Los numeros ingresados son iguales');
  } else {
    alert('Los numeros ingresados no son iguales');
  }
}

function intercambiarValor(numer1, numer2) {
  numer1 = Number(numer1) + Number(numer2);
  numer2 = Number(numer1) - Number(numer2);
  numer1 = Number(numer1) - Number(numer2);
  console.log(numer1, numer2);

  alert(`el 1er numero ahora es ${numer1} y el 2do numero ahora es ${numer2}`);
}

function sum(numer1, numer2) {
  let n1 = new Array(Number(numer1)).fill(1);
  let n2 = new Array(Number(numer2)).fill(1);
  n1 = n1.concat(n2);
  console.log(n2);

  console.log(n1.length);

  alert(`la suma  de los numero ingresasdos es ${n1.length}`);
}

function operacion(var1) {
  numero1 = getn1();
  numero2 = getn2();

  if (validar1(numero1) == false || validar2(numero2) == false) {
  } else {
    if (ValidarNumeroPositivo(numero1, numero2)) {
      alert(
        'Los numeros ingresados no son validos, ( Solo ingresar numeros enteros positivos'
      );
    } else {
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
  }
}
