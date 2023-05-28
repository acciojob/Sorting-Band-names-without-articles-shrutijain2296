//your code here
window.onload = function () {
	var bandName = ["The Beatles", "Anthrax", "Led Zeppelin", "Aerosmith", "The Rolling Stones"];
	function removeArticles(bandName){
		const lowerCaseNames = bandName.toLowerCase();
		if(lowerCaseNames.startsWith('a')||lowerCaseNames.startsWith('an')||lowerCaseNames.startsWith('the')){
			return bandName.slice(lowerCaseNames.indexOf(' ')+1);		
		}
	    return bandName; 
	}
	var bandNamesWithoutArticles = bandName.map(removeArticles);
	console.log(bandNamesWithoutArticles);
	
	bandNamesWithoutArticles.sort();
	console.log(bandNamesWithoutArticles);
	
	const ulElements = document.getElementById("band");
	
	for(let i = 0; i < bandNamesWithoutArticles; i++){
	    const bandList = bandNamesWithoutArticles[i];
	    const liElement = document.createElement("li")
	    liElement.textContent = bandList 
	    ulElements.appendChild(liElement);
	}
}

