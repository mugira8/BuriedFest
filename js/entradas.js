var $total = [600,500,400];
var $disponibles=[452,159,321];

function comprar($num, $tipo) {
    var $texto = "";
    switch ($tipo) {
        case 0:
            $texto = "WARN UP TICKET"; break;
        case 1:
            $texto = "4 DAY TICKET"; break;
        case 2:
            $texto = "5 DAY TICKET"; 
    }
    if( $disponibles[$tipo]<$num.value){
        alert("Oh no, sentimos comunicarle que no disponemos de ese numero de entradas :( \n UwU")
    }else{
        alert($texto + "\n Has comprado " + $num.value + " entrada/entradas.");
        $disponibles[$tipo] = $disponibles[$tipo] - $num.value;
        document.getElementsByClassName('dispon')[$tipo].innerHTML = "  <h5>Total entradas: "+$total[$tipo]+"</h5><h5>Entradas disponibles: "+$disponibles[$tipo]+"</h5>";
    }
   
}