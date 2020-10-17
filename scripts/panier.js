

class Contact{/*definition de la class contact*/
constructor(firstName,lastName,address,city,email){
this.firstName=firstName;
this.lastName=lastName;
this.address=address;
this.city=city;
this.email=email;
}
	
}


function affichagepanier(){/*mise en place et affichage du panier*/
    let panier=getPanier();
	let tab = document.getElementById("affichage");
	if(panier==""){
		let contenu="<p>panier vide</p>";
		tab.innerHTML=contenu;
	}else{
		let build="";
		let total=0;
		for(let prod of panier){
			let prixtot=prod.prix*prod.nombre;
			let nvprod="<tr><td class='tdpanier' >"+prod.nom+"</td><td  class='tdpanier'>"+prod.nombre+"</td><td class='tdpanier' >"+prod.prix+"</td><td class='tdpanier' >"+prixtot+"</td></tr>";
			total=total+prixtot;
			build=build+nvprod;
		}
			let contenu="<table><tr><td class='tdpanier' >Nom</td><td class='tdpanier' >Quantité</td><td class='tdpanier'  id='pu'>Prix (unité)</td><td class='tdpanier'  id='pt'>Prix (total)</td></tr>"+build+"<tr><td class='tdpanier' class='desc'>prix</td><td class='tdpanier' class='desc'>total</td><td class='tdpanier' class='desc'>du panier</td><td class='tdpanier' id='apt'>"+total+"</td></tr></table><button id='validerpanier' >valider panier</button>";
		
		tab.innerHTML=contenu;
	}
        const bouton=document.getElementById("validerpanier");
		bouton.addEventListener('click',function(){
			afficherformulaire();
		});
	
	
}
function afficherformulaire(){/*mise en place et affichage du formulaire de contact*/
	let tab = document.getElementById("affichage");
	let contenu="<label id='erreur'></label><table><tr><td>Nom  </td><td><input type='textbox' id='nom'></input></td></tr><tr><td>Prenom  </td><td><input type='textbox' id='prenom'></input></td></tr><tr><td>Adresse  </td><td><input type='textbox' id='adresse'></input></td></tr><tr><td>Ville  </td><td><input type='textbox' id='ville'></input></td></tr><tr><td>email  </td><td><input type='email' id='email'></input></td></tr></table><button id='validercommande'>valider</button>";
	tab.innerHTML=contenu;
	  const bouton=document.getElementById("validercommande");
		bouton.addEventListener('click',function(){
			affichercomfirmation();
		});
}
function affichercomfirmation(){/*verification et affichage de la confirmation de commande*/
	let panier=getPanier();
	let tab = document.getElementById("affichage");
	let aerreur = document.getElementById("erreur");
	let enom = document.getElementById("nom");
	let eprenom = document.getElementById("prenom");
	let eadresse = document.getElementById("adresse");
	let eville = document.getElementById("ville");
	let eemail = document.getElementById("email");
	if(enom.value==""||eprenom.value==""||eadresse.value==""||eville.value==""||eemail.value==""){
		let msg="Veuillez remplir tout les champs.";
		aerreur.innerHTML=msg;
	}else if((eemail.value.indexOf('@')==-1)||(eemail.value.indexOf('.')==-1)){
		let msg="Veuillez entrer une adresse mail valide.";
		aerreur.innerHTML=msg;
	}else{
	   let contact =new Contact(enom.value,eprenom.value,eadresse.value,eville.value,eemail.value);
	   let products=[];
	   let prixtot=0;
	   for(let prod of panier){
		   let prixprod=prod.prix*prod.nombre;
		   prixtot=prixtot+prixprod;
	   products.push(prod.id);
	   }
	   submitcommande(contact,products,prixtot);
	}
	
	
	
}
function submitcommande (contact,products,prixtot){/*envoi de la commande*/
	let url="http://localhost:3000/api/teddies/order";
	const option={
		method:'POST',
		body:JSON.stringify({contact:contact,products:products}),
		headers: { "Content-type": "application/json; charset=UTF-8" }
	};
 return new Promise((resolve,reject)=>{
  fetch(url,option).then(function(response){
		response.json().then(function(json){
	console.log(json);
	let affichagecommande="<label>"+json.contact.firstName+" , le numero de la commande est le "+json.orderId+" pour un montant de "+prixtot+" , merci de votre commande.</label>";
	affichage.innerHTML=affichagecommande;
	viderPanier();
	resolve(json);
		});
	});
 });
}

if(document.readyState==="complete"){
	affichagepanier();
}else{
	document.addEventListener("DOMContentLoaded",function(){
		affichagepanier();
	});
}
