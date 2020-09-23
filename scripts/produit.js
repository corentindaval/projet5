const urlparam =new URLSearchParams(window.location.search);
console.log(urlparam.get("id"));
let tabproduits=[];

class produits{
constructor(id,name,price,description,imageUrl){
this.id=id;
this.name=name;
this.price=price;
this.description=description;
this.imageUrl=imageUrl;
}
	
}

function recupproduit(){
	let build="http://localhost:3000/api/teddies/"+urlparam.get("id");
	console.log(build);
 return new Promise((resolve,reject)=>{
  fetch(build).then(function(response){
		response.json().then(function(json){
	tabproduits=json;
	resolve(json);
		});
	});
 });
}

function affichageproduit(){
	recupproduit().then(function(json){
	let tab = document.getElementById("affichage");
		let buildoption="<option value=''>choisisez une couleur</option>";
		for(let couleur of json.colors){
			let nvoption="<option value='"+couleur+"'>"+couleur+"</option>";
			buildoption=buildoption+nvoption;
		}
			let contenu="<img src='"+json.imageUrl+"'/><table><tr><td>nom:</td><td>"+json.name+"</td></tr><tr><td>prix:</td><td>"+json.price+"</td></tr><tr><td>description:</td><td>"+json.description+"</td></tr><tr><td>couleurs:</td><td><select id='selcouleur'>"+buildoption+"</select></td></tr></table>";
		tab.innerHTML=contenu;
	});
}

if(document.readyState==="complete"){
	affichageproduit();
}else{
	document.addEventListener("DOMContentLoaded",function(){
		affichageproduit();
	});
}
