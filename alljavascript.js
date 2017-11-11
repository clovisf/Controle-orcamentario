window.onload = function(){
auto_grow(nomeproduto);
auto_grow(localdecompra);

};

    function gerararray(){

      var gerararray = [];
      var nomedoproduto = document.getElementById("nomeproduto").value;
      var ocusto= document.getElementById("custo").value;
      var olocaldecompra = document.getElementById("localdecompra").value;


      gerararray.push (nomedoproduto, ocusto, olocaldecompra);
      console.log(gerararray);

    }

function nomeandoarquivo(month, day, year, nomecliente, nomebairro){

  // Return today's date and time
  var currentTime = new Date();
  // returns the month (from 0 to 11)
  var month = currentTime.getMonth() + 1;
  // returns the day of the month (from 1 to 31)
  var day = currentTime.getDate();
  // returns the year (four digits)
  var year = currentTime.getFullYear();

  switch(month){
    case 1:
      month = "Janeiro";
      break;
    case 2:
      month = "Fevereiro";
      break;
    case 3:
      month = "Marco";
      break;
    case 4:
      month = "Abril";
      break;
    case 5:
      month = "Maio";
      break;
    case 6:
      month = "Junho";
      break;
    case 7:
      month = "Julho";
      break;
    case 8:
      month = "Agosto";
      break;
    case 9:
      month = "Setembro";
      break;
    case 10:
      month = "Outubro";
      break;
    case 11:
      month = "Novembro";
      break;
    case 12:
      month = "Dezembro";
      break

  }



}


/* content-width fitting textbox from here: https://stackoverflow.com/questions/17772260/textarea-auto-height */
function auto_grow(element) {
    element.style.width = "auto";
    element.style.width = (element.scrollWidth)+'px';
}
