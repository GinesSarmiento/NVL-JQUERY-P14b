
$(document).ready(function() {
	//Creamos un evento sobre las celdas que se ejecutará al hacer click sobre ella
	$("td").on({
		"click":function(){
			//Comprobamos si está seleccionada
			if ($(this).hasClass("seleccionado")){
				//Si está seleccionada la deseleccionamos
				$(this).removeClass("seleccionado");
			}else{
				//Si no está seleccionada, quitamos la selección de la celda seleccionada
				$("td").removeClass("seleccionado");
				//Seleccionamos la celda sobre la que se ha hecho click
				$(this).addClass("seleccionado");
			}
		}
	});
	


	//Creamos una función que se ejecutará al pulsar una tecla
	$(document).keydown(function(e){
		//Obtenemos la celda seleccionada
		var  viejo = $(".seleccionado");
		
		//Comprobamos si hay una celda seleccionada
		if (viejo.length!==0){
			//Borramos la selección de la celda
			$(viejo).removeClass("seleccionado");
			//Declaramos una variable que almacenará la clase columna de la celda seleccionada
			var columna = $(viejo).attr("class");
			
			//Ejecutamos diferentes códigos en función de la tecla pulsada
			switch (e.which){
			//Acción si se pulsa la flecha izquierda
			case 37:
			//Comprobamos si la celda seleccionada pertenece a la primera columna
			if ($(viejo).hasClass("columna1")===false){
				//En caso negativo seleccionamos la celda siguiente
				nuevo= $(viejo).prev();
			}else{
				//En caso positivo, buscamos dentro del padre(la misma fila) la celda correspondiente a la última columna y seleccionamos dicha celda
				nuevo= $(viejo).parent().find(".columna3")
			}
			break;

			//Acción si se pulsa la flecha arriba
			case 38:
			//Comprobamos si la celda seleccionada esá en la primera fila
			if ($(viejo).parent("tr").hasClass("fila1")===false){
				//En caso negativo buscamos en el siguiente hermano del siguiente padre la celda correspondiente a la misma columna y la seleccionamos
				nuevo= $(viejo).parent().prev().find("."+columna);
			}else{
				//En caso positivo buscamos en el abuelo la última fila y dentro de esta la celda correspondiente a la misma columna y la seleccionamos
				nuevo= $(viejo).parent().parent().find(".fila3").find("."+columna);
			}
			break;

			//Acción si se pulsa la flecha derecha
			case 39:
			//Comprobamos si la celda seleccionada pertenece a la última columna
			if ($(viejo).hasClass("columna3")===false){
				//En caso negativo seleccionamos la celda anterior
				nuevo= $(viejo).next();
			}else{
				//En caso positivo, buscamos dentro del padre(la misma fila) la celda correspondiente a la primera columna y seleccionamos dicha celda
				nuevo= $(viejo).parent().find(".columna1")
			}
			break;

			//Acción si se pulsa la flecha abajo
			case 40:
			//Comprobamos si la celda seleccionada esá en la última fila
			if ($(viejo).parent("tr").hasClass("fila3")===false){
				//En caso negativo buscamos en el siguiente hermano del anterior padre la celda correspondiente a la misma columna y la seleccionamos
				nuevo= $(viejo).parent().next().find("."+columna);
			}else{
				//En caso positivo buscamos en el abuelo la primera fila y dentro de esta la celda correspondiente a la misma columna y la seleccionamos
				nuevo= $(viejo).parent().parent().find(".fila1").find("."+columna);
			}
			break;
			}
			//Por último añadimos la clase a la celda seleccionada
			$(nuevo).addClass("seleccionado");
		}
	});
});