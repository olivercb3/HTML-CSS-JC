$(function(){

	function buscarPokemones(id){
		$("#pcode1").text("LOADING");
		$.get("http://51.144.236.83:8080/pokemons/"+id,function(data){
			$("#pcode1").text(data.num);
			$("#NormalSprite1").attr("src",data.images[0].front);
			$("#ShinySprite1").attr("src",data.images[1].front_shiny);+
			$("#pname1").text(data.name);
			data.types.forEach(function(el){
				$("#ptype1").append("<li> " + el.type.name +" </li>")
			});
			$("#HM1").text(data.num);

		},"json");
	}
	

	$("#searchButton").click(function(){
		var id = $("#writeid").val();
		buscarPokemones(id);
	});

});