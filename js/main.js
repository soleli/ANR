
	
function cargar(id) {
$("#cargando2").css("display","inlineblock");	
	$("#noticia").html (" "); 
	$("#iconos").html (" "); 
	archivoValidacion = "http://nuevarioja.com.ar/Anr/noticia.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {id:id})
	.done(function(data) 
	{
		$("#noticia").append(
								"<div data-theme='b'>"+
								"<p class='titulo-individual'>"+data.titulo+"</p> "+
								"<p class='fecha-individual'>"+data.fecha+"</p> "+
								"<img width=100%; src='http://nuevarioja.com.ar/imgdin/noticias/"+data.url+".jpg'>"+
								"<p class='copete-individual'>"+data.copete+"</p> "+
								"<p class='cuerpo'>"+data.cuerpo+"</p>"+
								"</div>"
							);
		$("#cargando2").css("display","none");	
		$("#iconos").append(
		"<ul><li class='imgred'> <a  onclick='redsocial("+1+","+id+")'><span class='icon-whatsapp'></span></a></li>"+
		"<li class='imgred'><a onclick='redsocial("+2+","+id+")'><span class='icon-facebook'></span></a></li>"+
		"<li class='imgred'><a onclick='redsocial("+3+","+id+")'><span class='icon-twitter'></span></a></li></ul>"
		);
		
	});

	
 }
 
 function redsocial(expr,id){ 
    switch (expr) {
      case 3:
        window.plugins.socialsharing.shareViaTwitter('Mira esta noticia de Nueva Rioja', null /* img */, 'http://www.nuevarioja.com.ar/ver_noticia.asp?id='+id);
            
        break;
      case 2:
        window.plugins.socialsharing.shareViaFacebook('Mira esta noticia de Nueva Rioja', null /* img */, 'http://www.nuevarioja.com.ar/ver_noticia.asp?id='+id, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
           
        break;
      case 1:
            window.plugins.socialsharing.shareViaWhatsApp('Mira esta noticia de Nueva Rioja', null /* img */, 'http://www.nuevarioja.com.ar/ver_noticia.asp?id='+id, function() {console.log('share ok')}, function(errormsg){console.log(errormsg)});
           
        break;
      default:
        console.log(id);
    }
}
 function noticias(id) {

 $("#noticias").html (" "); 
	archivoValidacion = "http://nuevarioja.com.ar/Anr/todas.php?jsoncallback=?"
		$.getJSON( archivoValidacion, {id:id})
	.done(function(data) {
	if(id==1){ var seccion="Pol&iacutetica"; }
	if(id==2){ var seccion="Informaci&oacuten General"; }
	if(id==3){ var seccion="Interior"; }
	if(id==4){ var seccion="Deportes"; }
	if(id==5){ var seccion="Policiales"; }
	if(id==6){ var seccion="Cultura"; }
	if(id==7){ var seccion="Espet&aacuteculo"; }
	if(id==8){ var seccion="&Uacuteltimas noticias"; }
	$("#noticias").append("<p class='tituseccion'>"+seccion+"</p>");
		$(data).each(function (index, data) {   
							$("#noticias").append(
							
									"<li class='ui-li-has-thumb ui-first-child'><a href='#noticia1' data-transition='flip' onclick='cargar("+data.id_Noticia+");'>"+
									"<img class='imgcate' src='http://nuevarioja.com.ar/imgdin/noticias/"+data.url+".jpg'>"+
									data.titulo+
									
									"</a></li><div style='clear:both;'></div><hr> <br>"
									);
							});	

	})
	$("#cargando1").css("display","none");
 }
 
 function tapa(id) {

 $("#noticia").html (" "); 
	archivoValidacion = "http://nuevarioja.com.ar/Anr/tapa.php?jsoncallback=?"
		$.getJSON( archivoValidacion, {id:id})
	.done(function(data) 
	{
		$("#noticia").append(
							
								
									"<img style='width:100%' src='http://nuevarioja.com.ar/imgdin/edicion_hoy/"+data.id_edicion+".jpg'>"
									
									);
							
$("#cargando2").css("display","none");
	});
	
 }
 
		
function init() 
{

	archivoValidacion = "http://nuevarioja.com.ar/Anr/principal.php?jsoncallback=?"

/* Ultimo*/
	$.getJSON( archivoValidacion, {id:3})
	
	.done(function(data2) {
	if (data2){
	/*$("#cargando").css("display","none");*/
		$(data2).each(function (index, data2) {
		
			$("#ultimo").append(
			"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'><p class='ultimo'> &Uacuteltimo momento </P>"+
			"<div > <a  onclick='redsocial("+1+","+data2.id_Noticia+")'><span class='icon-whatsapp'></span></a>"+
		"<a onclick='redsocial("+2+","+data2.id_Noticia+")'><span class='icon-facebook'></span></a>"+
		"<a onclick='redsocial("+3+","+data2.id_Noticia+")'><span class='icon-twitter'></span></a></div>"+
									"  <div data-theme='b'> "+
									"<p class='titulo-ultimo'>"+data2.titulo+"</p> "+
									"</div></a>"
									
								);
		});
		}
	})


	
/* primera*/
	$.getJSON( archivoValidacion, {id:1})
	
	.done(function(data2) {
	/*$("#cargando").css("display","none");*/
		$(data2).each(function (index, data2) {
		
			$("#primera").append(
			"<div style='float: right;position: relative;margin-bottom: -60px;padding-top: 5px;'> <a  onclick='redsocial("+1+","+data2.id_Noticia+")'><span class='icon-whatsapp'></span></a>"+
		"<a onclick='redsocial("+2+","+data2.id_Noticia+")'><span class='icon-facebook'></span></a>"+
		"<a onclick='redsocial("+3+","+data2.id_Noticia+")'><span class='icon-twitter'></span></a></div>"+
									"<a href='#noticia1' data-transition='flip'  onclick='cargar("+data2.id_Noticia+");'>  <div data-theme='b'> <img width=100%; src='http://nuevarioja.com.ar/imgdin/noticias/"+data2.url+".jpg'>"+
									"<div class='copeteprimera'>"+data2.titulo+"</div> "+
									"</div></a>"
									
								);
		});
		$("#cargando").css("display","none");
	})
	
	.error( function(data2) { 
	$("#cargando").css("display","block");
	$("#primera").append("Compruebe su conexion a internet"); } )

	

/* */
			
	$.getJSON( archivoValidacion, {id:2})
	.done(function(data) {
		
		$(data).each(function (index, data) {   
							$("#secundarias").append(
									"<a href='#noticia1' data-transition='flip' onclick='cargar("+data.id_Noticia+");'>"+
									"<img class='imgcate' src='http://nuevarioja.com.ar/imgdin/noticias/"+data.url+".jpg'>"+
									"<p style='margin-bottom: 0px;'>"+data.titulo+"</p>"+
									
									"</a> <br>"+
									"<div style='    float: right;     display: inline-table;'> <a  onclick='redsocial("+1+","+data.id_Noticia+")'><span class='icon-whatsapp'></span></a>"+
		"<a onclick='redsocial("+2+","+data.id_Noticia+")'><span class='icon-facebook'></span></a>"+
		"<a onclick='redsocial("+3+","+data.id_Noticia+")'><span class='icon-twitter'></span></a></div>"+
									"<div style='clear:both;'></div><hr> <br>"
							);
		});	
	})

	
	
	}
	
	
	
	
	 function enviarcorreo(){
             
             	var number = $("#nombre").val();
             	var message = $("#mensaje").val();
				archivoValidacion = "http://nuevarioja.com.ar/Anr//formulario.php?jsoncallback=?"
	$.getJSON( archivoValidacion, {nombre:number, mensaje:message})
	            .done(function(data) 
	{
		$("#alertaco").append(
								
								data.ex
								);              
             }); 
      }
		 
	
                 
		
		
  
		 
		
		
	
			
		
	