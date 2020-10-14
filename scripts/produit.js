const urlparam =new URLSearchParams(window.location.search);
console.log(urlparam.get("id"));
let tabproduits=[];

class produits{/*definition de la class produits*/
constructor(id,name,price,description,imageUrl){
this.id=id;
this.name=name;
this.price=price;
this.description=description;
this.imageUrl=imageUrl;
}
	
}

function recupproduit(){/*recuperation des informations du produit*/
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

function affichageproduit(){/*mise en place et affichage des informations du produit*/
	recupproduit().then(function(json){
	let tab = document.getElementById("affichage");
		let buildoption="";
		for(let couleur of json.colors){
			let nvoption="<option value='"+couleur+"'>"+couleur+"</option>";
			buildoption=buildoption+nvoption;
		}
			let contenu="<img src='"+json.imageUrl+"'/><table><tr><td class='mep'> Nom  </td><td>"+json.name+"</td></tr><tr><td class='mep'> Prix  </td><td>"+json.price+"</td></tr><tr><td class='mep'> Description  </td><td>"+json.description+"</td></tr><tr><td class='mep'> Couleurs  </td><td><select id='selcouleur'>"+buildoption+"</select></td></tr></table><button id='ajtpanier' data-id='"+json._id+"' data-name='"+json.name+"' data-prix='"+json.price+"'>Ajouter au panier</button><button id='rstpanier'>reset panier</button>";
		tab.innerHTML=contenu;
		const bouton=document.getElementById("ajtpanier");
		bouton.addEventListener('click',ajouterAuPanier);
		const rbouton=document.getElementById("rstpanier");
		rbouton.addEventListener('click',resetPanier);
	});
}
function ajouterAuPanier(e){/*ajout d'un exemplaire du produit au panier*/
	console.log(e.target.dataset.id);
	let panier=getPanier();
	let pexist=false;
	for(let prod of panier){
		if(prod.id ==e.target.dataset.id){
			prod.nombre=prod.nombre+1;
			pexist=true;
		}
	}
	if(pexist==false){
		panier.push({id:e.target.dataset.id,nom:e.target.dataset.name,nombre:1,prix:e.target.dataset.prix});
	}
	savePanier(panier);
}

function resetPanier(e){/*remise a zero du panier*/
	viderPanier();
}

if(document.readyState==="complete"){
	affichageproduit();
}else{
	document.addEventListener("DOMContentLoaded",function(){
		affichageproduit();
	});
}
