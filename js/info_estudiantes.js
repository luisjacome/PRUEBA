

function printlist( list)
{
	var listHTML= '<ol>';
	for (var i=0; i<list.length;i+=1)
	{
		listHTML += '<li>' + list[i] + '</li>' ;
	}


	listHTML += '</ol>';
	print(listHTML);
}




/*estudiantes
var estuadiante
{  
    nombre: " Laura ",
	genero: " femenino",
	edad: 26,
	
	cuidad: "Posorja",
	lenguajefavorito: "español",
	laborando: "si",
};*/


var wilmer = {
	nombre: " wilmer ",
	genero: " masculino",
	edad: 26,
	
	cuidad: "Playas",
	lenguajefavorito: "español",
	laborando: "si",
};





var estudiantes= [];
estudiantes.push("laura");
estudiantes.push("wilmer");
estudiantes.push("gina");
estudiantes.push("luis");
estudiantes.push("glenda");




function print(html)
{
	document.write(html);
}




while (true)
{
	var estubus =prompt("Ingrese el nombre del estudiante a consultar, l para mostrar la lista de estudiantes o q para salir;");
	/*valida si desea sali o continuar*/
	if (estubus=="q")
	{
		alert (" Programa finalizado");
		break;
	} 

	 /*verifica un valor distinto a q  */
	 else if (estubus=="l") 
	{
          printlist(estudiantes); 
          break;   
	}
	 else
	 {
        /*entra a buscar el estudiante  en la lista  */
	 	var estuencon =  estudiantes.indexOf(estubus);
	 	if (estuencon>=0)
	 	{
	 		alert (" el estudiante esta en nuestro registros");
            document.write(estuencon);
            break;



	 	}
	 	else if (estuencon<0)
	 	{
	 		alert (" el estudiante no existe en nuestro registros");
	 		document.write( " estudiantes de nuestro registros.........." ); 
            printlist(estudiantes);
	 	}


	 }
}