



function affichagepanier(){
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
			let nvprod="<tr><td>"+prod.nom+"</td><td>"+prod.nombre+"</td><td>"+prod.prix+"</td><td>"+prixtot+"</td></tr>";
			total=total+prixtot;
			build=build+nvprod;
		}
			let contenu="<table><tr><td>nom</td><td>quantité</td><td>prix(uniter)</td><td>prix(total)</td></tr>"+build+"<tr><td>prix</td><td>total</td><td>du panier</td><td>"+total+"</td></tr></table><button id='validerpanier' >valider panier</button>";
			
		tab.innerHTML=contenu;
	}
        const bouton=document.getElementById("validerpanier");
		bouton.addEventListener('click',function(){
			afficherformulaire();
		});
	
	
}
function afficherformulaire(){
	let tab = document.getElementById("affichage");
	let contenu="<label id='erreur'></label><table><tr><td>nom  </td><td><input type='textbox' id='nom'></input></td></tr><tr><td>prenom  </td><td><input type='textbox' id='prenom'></input></td></tr><tr><td>adresse  </td><td><input type='textbox' id='adresse'></input></td></tr><tr><td>ville  </td><td><input type='textbox' id='ville'></input></td></tr><tr><td>email  </td><td><input type='textbox' id='email'></input></td></tr></table><button id='validercommande'>valider</button>";
	tab.innerHTML=contenu;
	  const bouton=document.getElementById("validercommande");
		bouton.addEventListener('click',function(){
			affichercomfirmation();
		});
}
function affichercomfirmation(){
	let tab = document.getElementById("affichage");
	let aerreur = document.getElementById("erreur");
	let enom = document.getElementById("nom");
	let eprenom = document.getElementById("prenom");
	let eadresse = document.getElementById("adresse");
	let eville = document.getElementById("ville");
	let eemail = document.getElementById("email");
	if(enom.value==""){
		let msg="veuiller remplir tout les champs.";
		aerreur.innerHTML=msg;
	}else{
		if(eprenom.value==""){
			let msg="veuiller remplir tout les champs.";
		    aerreur.innerHTML=msg;
		}else{
			if(eadresse.value==""){
				let msg="veuiller remplir tout les champs.";
		        aerreur.innerHTML=msg;
			}else{
				if(eville.value==""){
					let msg="veuiller remplir tout les champs.";
		            aerreur.innerHTML=msg;
				}else{
					if(eemail.value==""){
						let msg="veuiller remplir tout les champs.";
		                aerreur.innerHTML=msg;
					}else{
		             let msg="test";
		             aerreur.innerHTML=msg;
					}
				}
			}
		}
	}
	
	
	
}


if(document.readyState==="complete"){
	affichagepanier();
}else{
	document.addEventListener("DOMContentLoaded",function(){
		affichagepanier();
	});
}
