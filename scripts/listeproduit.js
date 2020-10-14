let afftest=document.getElementById("test");
let tabproduits=[];
let textbd ="";

class produits{/*definition de la class produits*/
constructor(id,name,price,description,imageUrl){
this.id=id;
this.name=name;
this.price=price;
this.description=description;
this.imageUrl=imageUrl;
}
	
}

function recupbd(){/*recuperation de la base de donnée*/
 return new Promise((resolve,reject)=>{
  fetch('http://localhost:3000/api/teddies').then(function(response){
	response.json().then(function(json){
	tabproduits=json;
	resolve(json);
		});
	});
 });
}


function listeproduits(){/*mise en place et affichage de la liste des produit*/
	recupbd().then(function(json){
	let tab = document.getElementById("affichage");
		const defcol="<tr><td>Image</td><td>Nom du produit</td></tr>";
		let buildtab="";
		for(let prod of tabproduits){
			let ligneprod="<tr><td><img src='"+prod.imageUrl+"' /></td><td><a href='produit.html?id="+prod._id+"'>"+prod.name+"</a></td></tr>";
			buildtab=buildtab+ligneprod;
		}
		let buildf=defcol+buildtab;
		tab.innerHTML=buildf;
	});
}

if(document.readyState==="complete"){
	listeproduits();
}else{
	document.addEventListener("DOMContentLoaded",function(){
		listeproduits();
	});
}

