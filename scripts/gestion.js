function getPanier(){/*recuperation du panier*/
	let data=localStorage.getItem("panier");
	if (data===null){
		return [];
	}
	return JSON.parse(data);
}

function savePanier(panier){/*sauvegarde du panier*/
	localStorage.setItem("panier",JSON.stringify(panier));
}

function viderPanier(){/*remise a zero du panier*/
	localStorage.clear();
}