function getPanier(){
	let data=localStorage.getItem("panier");
	if (data===null){
		return [];
	}
	return JSON.parse(data);
}

function savePanier(panier){
	localStorage.setItem("panier",JSON.stringify(panier));
}

function viderPanier(){
	localStorage.clear();
}