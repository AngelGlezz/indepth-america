$(document).ready(function(){
	var bClose='<div style="margin:10px"><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgo8c3ZnCiAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgeG1sbnM6Y2M9Imh0dHA6Ly93ZWIucmVzb3VyY2Uub3JnL2NjLyIKICAgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vaW5rc2NhcGUuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIKICAgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiCiAgIHdpZHRoPSI0OCIKICAgaGVpZ2h0PSI0OCIKICAgaWQ9InN2ZzIiCiAgIHNvZGlwb2RpOnZlcnNpb249IjAuMzIiCiAgIGlua3NjYXBlOnZlcnNpb249IjAuNDMiCiAgIHZlcnNpb249IjEuMCIKICAgc29kaXBvZGk6ZG9jYmFzZT0iL2hvbWUvbHVjYSIKICAgc29kaXBvZGk6ZG9jbmFtZT0iZGlhbG9nLWNsb3NlLnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczQiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjE1Ljg5NTgzMyIKICAgICBpbmtzY2FwZTpjeD0iMjQiCiAgICAgaW5rc2NhcGU6Y3k9IjI0IgogICAgIGlua3NjYXBlOmRvY3VtZW50LXVuaXRzPSJweCIKICAgICBpbmtzY2FwZTpjdXJyZW50LWxheWVyPSJsYXllcjEiCiAgICAgc2hvd2dyaWQ9InRydWUiCiAgICAgaW5rc2NhcGU6Z3JpZC1iYm94PSJ0cnVlIgogICAgIGlua3NjYXBlOmdyaWQtcG9pbnRzPSJ0cnVlIgogICAgIHNob3dndWlkZXM9InRydWUiCiAgICAgaW5rc2NhcGU6Z3VpZGUtYmJveD0idHJ1ZSIKICAgICBpbmtzY2FwZTp3aW5kb3ctd2lkdGg9IjEyNjgiCiAgICAgaW5rc2NhcGU6d2luZG93LWhlaWdodD0iOTQ3IgogICAgIGlua3NjYXBlOndpbmRvdy14PSI2IgogICAgIGlua3NjYXBlOndpbmRvdy15PSI0NiIgLz4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE3Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZwogICAgIGlua3NjYXBlOmxhYmVsPSJMaXZlbGxvIDEiCiAgICAgaW5rc2NhcGU6Z3JvdXBtb2RlPSJsYXllciIKICAgICBpZD0ibGF5ZXIxIj4KICAgIDxwYXRoCiAgICAgICBzb2RpcG9kaTp0eXBlPSJhcmMiCiAgICAgICBzdHlsZT0iZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTojZmZmZmZmO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGgxMzA3IgogICAgICAgc29kaXBvZGk6Y3g9IjI0IgogICAgICAgc29kaXBvZGk6Y3k9IjI0IgogICAgICAgc29kaXBvZGk6cng9IjIyIgogICAgICAgc29kaXBvZGk6cnk9IjIyIgogICAgICAgZD0iTSA0NiAyNCBBIDIyIDIyIDAgMSAxICAyLDI0IEEgMjIgMjIgMCAxIDEgIDQ2IDI0IHoiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MC43NTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gMTYuMjIxODI1LDE2LjIyMTgyNSBMIDMxLjc3ODE3NSwzMS43NzgxNzUiCiAgICAgICBpZD0icGF0aDIxODYiCiAgICAgICBzb2RpcG9kaTpub2RldHlwZXM9ImNjIiAvPgogICAgPHBhdGgKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiCiAgICAgICBpZD0icGF0aDM5MzYiCiAgICAgICBkPSJNIDMxLjc3ODE3NSwxNi4yMjE4MjUgTCAxNi4yMjE4MjUsMzEuNzc4MTc1IgogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtmaWxsLW9wYWNpdHk6MC43NTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6NjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDxyZWN0CiAgICAgICBzdHlsZT0iZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDo2O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InJlY3QzOTM4IgogICAgICAgd2lkdGg9IjQ4IgogICAgICAgaGVpZ2h0PSI0OCIKICAgICAgIHg9IjAiCiAgICAgICB5PSIwIiAvPgogIDwvZz4KPC9zdmc+Cg==" style="width:100%;cursor:pointer"><\/div>';
	var nJerseys = 6;
	var idAppend = "append_jersey";
	var jTexts = [
		"Equipazo. No había más para describirlos. Si naciste en los 90s y le vas al América, échale la culpa a este conjunto. No había forma de echar la reta con tus amigos y no decir que tú eras el “Bam Bam” o Adolfo Ríos.",
		"¿Fichajes bombas? Denle las gracias al América por ese término. Invirtieron como pocos en años, dieron un empate épico a 3 goles en el Clásico contra Chivas y golearon a Tecos para ser campeones. Jesús Corona es clientazo en finales.",
		"Era un América imparable. La dupla entre Cabañas y Cuauhtémoc daba más miedo que el plantón del Peje en Reforma durante 2007. Se les negó el título perdiendo la final contra Pachuca, pero ese golazo del Cuau en la vuelta valió todo el boleto.",
		"Fue el año en que llegó la mancuerna más recordada en la historia de América. Obvio me refiero a Peláez y el Piojo. No hubo títulos pero salió una gran camada de jugadores de cantera y buenos fichajes que a la postre serían campeones. Aunque a Rubens no lo querían.",
		"La final más grande en la historia de América. Perdían 2-0. Gol de Aquivaldo al 89 y el resto es historia… Padrinos y fundadores del término “cruzazulear”. Después ese mismo equipo llevó a México al Mundial de 2014.",
		"No hubo títulos pero será recordado como el año en que volvieron a humillar a Cruz Azul. Perdían 3-0 y lo ganaron 4-3, un clásico. Además este jersey fue en honor al Torino, primer rival de América en el Estadio Azteca."
	];

	var jPlayers = [
		"Pavel Pardo, Iván Zamorano, Germán Villa",
		"Cuauhtémoc Blanco, Claudio López, Kléber Boas",
		"Salvador Cabañas, Nelson Cuevas, Alvin Mendoza",
		"Daniel Montenegro, Diego Reyes, Rubens Sambueza ",
		"Christian Benítez, Raúl Jiménez, Miguel Layún",
		"Oribe Peralta, Diego Lainez, Michael Arroyo"
	];

	var jRelevants = [
		"Campeón Verano 2002",
		"Campeón Clausura 2005",
		"Final contra Pachuca",
		"Conmemorativo 95 aniversario",
		"Campeón Clausura 2013",
		"Centenario del América",
	];

	var cont = 2;

	function triangleY(i){
		var posy = 0;

		if(i >= 1 && i <= 3){
			posy = 100;
		}

		return posy;
	}

	function triangleX(i){
		var posx = 0;

		if(Math.abs(i-3.5) == .5){
			posx = 100;
		}else if(Math.abs(i-3.5) == 1.5){
			posx = 50;
		}
		
		return posx;
	}
	
	function closeJersey(event){
		var close = $("#bClose");
		var num = close.attr("num");
		//var cont = 2;
		console.log(cont);

		$("#jTitle").html("");
		$("#jPlayer").html("");
		$("#jRelevant").html("");
		$("#jText").html("");
		$("#jersey"+(num-1)).remove();

		$('#cJersey').removeClass('show_shirt');
		$("#jTitle").removeClass('show_info');
		$("#jPlayer").removeClass('show_info');
		$("#jText").removeClass('show_info');
		$("#jRelevant").removeClass('show_info');
		$('.shirt').addClass('shirt_reveal');//horizontal
		$('.shirt').removeClass('big_shirt');//horizontal

		$(".reveal").css({"filter": "opacity(" + (5*cont) + "%)"});
		cont = cont + 1;

		if (cont == 8) {
			$(".reveal").css({"filter": "opacity(100%)"});
			$("#button").css({'display': 'block'});
		}

		close.remove();
		return cont;

		
	}

	function clickJersey(event){
		var jersey = $(event.currentTarget).eq(0);
		var num = jersey.attr("num");

		var cJersey = $("#cJersey");
		var jTitle = $("#jTitle");
		var jPlayer = $("#jPlayer");
		var jRelevant = $("#jRelevant");
		var jText = $("#jText");

		var titleImage = $("<img>");
		titleImage.attr("src", urlIndepth + "images/title_" + num + ".png");
		jTitle.html(titleImage);

		jPlayer.html(jPlayers[num-1]);
		jRelevant.html(jRelevants[num-1]);
		jText.html(jTexts[num-1]);

		jersey.css({
			"z-index": 100,
			"-webkit-clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
			"clip-path": "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"
		});

		jersey.addClass('show');
		cJersey.addClass('show_shirt');
		jTitle.addClass('show_info');
		jPlayer.addClass('show_info');
		jText.addClass('show_info');
		jRelevant.addClass('show_info');
		$('.shirt').removeClass('shirt_reveal');//horizontal
		$('.shirt').addClass('big_shirt');//horizontal

		var close = $("<div>");
		close.attr("id", "bClose").attr("num", num).html(bClose).bind("click", closeJersey);
		cJersey.append(close);
	}

	function drawJersey(){
		var cJersey = $("#cJersey");
		var reveal = $(".reveal", cJersey);

		var jerseys = new Array();
		for(var i = 0; i < nJerseys; i++){
			jerseys[i] = $("#jersey" + i, cJersey);
		}

		if(cJersey.length == 0){
			cJersey = $("<div>");
			cJersey.attr("id", "cJersey");
			$("#" + idAppend).append(cJersey);

			reveal = $("<div>");
			reveal.addClass("reveal");
			var revealImage = $("<img>");
			revealImage.attr("src", urlIndepth + "images/reveal.png");
			reveal.append(revealImage);
			cJersey.append(reveal);

			for(var i = 0; i < nJerseys; i++){
				jerseys[i] = $("<div>");
				jerseys[i].addClass("jersey");
				jerseys[i].attr("id", "jersey" + i);
				jerseys[i].attr("num", i+1);
				var jerseyImage = $("<img>");
				jerseyImage.attr("src", urlIndepth + "images/jersey_" + (i+1) + ".png");
				jerseys[i].append(jerseyImage);
				cJersey.append(jerseys[i]);

				jerseys[i].bind("click", clickJersey);
			}

			var jTitle = $("<div>");
			jTitle.attr("id", "jTitle");
			$("#" + idAppend).append(jTitle);

			var jPlayer = $("<div>");
			jPlayer.attr("id", "jPlayer");
			$("#" + idAppend).append(jPlayer);

			var jRelevant = $("<div>");
			jRelevant.attr("id", "jRelevant");
			$("#" + idAppend).append(jRelevant);

			var jText = $("<div>");
			jText.attr("id", "jText");
			$("#" + idAppend).append(jText);
		}

		var degrees = Math.ceil(360/nJerseys);

		for(var i = 0; i < nJerseys; i++){
			if(nJerseys == 6){
				var pos1x = triangleX(i);
				var pos1y = triangleY(i);



				var pos2x = triangleX(i+1);
				var pos2y = triangleY(i+1);

				jerseys[i].css({
					"-webkit-clip-path": "polygon("+pos1x+"% "+pos1y+"%, "+pos2x+"% "+pos2y+"%, 50% 50%)",
					"clip-path": "polygon("+pos1x+"% "+pos1y+"%, "+pos2x+"% "+pos2y+"%, 50% 50%)"	
				});
			}
		}
		
	}

	drawJersey();
});