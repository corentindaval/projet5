let afftest=document.getElementById("test");
let tabproduits=[];
let textbd ="";

class produits{
constructor(id,name,price,description,imageUrl){
this.id=id;
this.name=name;
this.price=price;
this.description=description;
this.imageUrl=imageUrl;
}
	
}

function recupbd(){
fetch('http://localhost:3000/api/teddies').then(function(response){
		response.json().then(function(json){
	
		});
	});
}


function listeproduits(){
	recupbd();
	let tab = document.getElementById("affichage");
		const defcol="<tr><td>image</td><td>nom du produit</td></tr>";
		let buildtab="";
		for(let prod of tabproduits){
			let ligneprod="<tr><td>"+prod.imageUrl+"</td><td class='pprod'id='"+prod.id+"'>"+prod.name+"</td></tr>";
			buildtab=buildtab+ligneprod;
		}
		let buildf=defcol+buildtab;
		tab.innerHTML=buildf;
}

if(document.readyState==="complete"){
	listeproduits();
}else{
	document.addEventListener("DOMContentLoaded",function(){
		listeproduits();
	});
}
