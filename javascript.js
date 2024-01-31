function Converter(simbolo) {
  var valorElementoC = document.getElementById("valorC");
  var valorC = valorElementoC.value;

  var valorConverterCelsius = parseFloat(valorC);
  var valorEmCelsiusParaK = (valorConverterCelsius + 273).toFixed(1);
  var elementoValorConvertidoC = document.getElementById("valorConvertido");

  var valorEmCelsiusParaF = (valorConverterCelsius * 1.8 + 32).toFixed(1);
  var elementoValorConvertidoC = document.getElementById("valorConvertido");

  var valorElementoK = document.getElementById("valorK");
  var valorK = valorElementoK.value;

  var valorConverterKelvin = parseFloat(valorK);
  var valorEmKelvinParaC = (valorConverterKelvin - 273).toFixed(1);
  var elementoValorConvertidoK = document.getElementById("valorConvertido");

  var valorEmKelvinParaF = ((valorConverterKelvin - 273) * 1.8 + 32).toFixed(1);
  var elementoValorConvertidoK = document.getElementById("valorConvertido");

  var valorElementoF = document.getElementById("valorF");
  var valorF = valorElementoF.value;

  var valorConverterFahr = parseFloat(valorF);
  var valorEmFahrParaC = ((valorConverterFahr - 32) / 1.8).toFixed(1);
  var elementoValorConvertidoF = document.getElementById("valorConvertido");

  var valorEmFahrParaK = (((valorConverterFahr - 32) * 5) / 9 + 273).toFixed(1);
  var elementoValorConvertidoF = document.getElementById("valorConvertido");

  switch (simbolo) {
    case "C-K":
      var valorConvertidoCK =
        "O resultado em kelvin é " + valorEmCelsiusParaK + " K";
      elementoValorConvertidoC.innerHTML = valorConvertidoCK;
      break;
    case "C-F":
      var valorConvertidoCF =
        "O resultado em fahrenheit é " + valorEmCelsiusParaF + " °F";
      elementoValorConvertidoC.innerHTML = valorConvertidoCF;
      break;
    case "K-C":
      var valorConvertidoKC =
        "O resultado em celsius é " + valorEmKelvinParaC + " °C";
      elementoValorConvertidoK.innerHTML = valorConvertidoKC;
      break;
    case "K-F":
      var valorConvertidoKF =
        "O resultado em fahrenheit é " + valorEmKelvinParaF + " °F";
      elementoValorConvertidoK.innerHTML = valorConvertidoKF;
      break;
    case "F-C":
      var valorConvertidoFC =
        "O resultado em celsius é " + valorEmFahrParaC + " °C";
      elementoValorConvertidoF.innerHTML = valorConvertidoFC;
      break;
    case "F-K":
      var valorConvertidoFK =
        "O resultado em kelvin é " + valorEmFahrParaK + " K";
      elementoValorConvertidoF.innerHTML = valorConvertidoFK;
  }
}