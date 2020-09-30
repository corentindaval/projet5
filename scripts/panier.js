



function affichagepanier(){
    let panier=getPanier();
	let tab = document.getElementById("affichage");
		let build="";
		for(let prod of panier){
			let nvprod="<tr><td>"+prod.nom+"</td><td>"+prod.nombre+"</td></tr>";
			build=build+nvprod;
		}
			let contenu="<table><tr><td>nom</td><td>quantité</td></tr>"+build+"</table>";
		tab.innerHTML=contenu;
}



if(document.readyState==="complete"){
	affichagepanier();
}else{
	document.addEventListener("DOMContentLoaded",function(){
		affichagepanier();
	});
}
