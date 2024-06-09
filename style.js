//https://nikecodemo.github.io/titanic/csvjson.json

async function populate(){
	const requestURL = "https://mihaelslipcevic.github.io/my-repository/Titanic/titanic.json"
	const request = new Request(requestURL) // creazione oggetto.
	const response = await fetch(request) // modificare parti del contenuto.
	const titanic = await response.json()


	populate(titanic)
}


function popular(obj){
	const header = document.querySelector("header")

	for (i = 0; i < 891; i++){
		const Passengers = obj[i].Name;
		const Sex = obj[i].Sex;
		const Age = obj[i].Age;
		const Embarked = obj[i].Embarked;
		const Pclass = obj[i].Pclass;
		const Survived = obj[i].Survived;
		console.log(passengers);

		const mioDiv1 = document.createElement("div");
		const sect = document.createElement("section");
		const mioH1 = document.createElement("h1");
		const mioP = document.createElement("p");
		const mioP1 = document.createElement("p");
		const mioP2 = document.createElement("p");
		const mioP3 = document.createElement("p");
		const mioP4 = document.createElement("p");
		const mioP5 = document.createElement("p");

		mioDiv1.classList.add("sect2");

		mioH1.textContent = "Numero Passeggero: " + i;
		mioP.textContent = "Nome: " + Passengers;
		mioP1.textContent = "Sesso: " + Sex;
		mioP2.textContent = "Età: " + Age;
		mioP4.textContent = "classe: " + Pclass;
		mioP5.textContent = "sopravissuto: " + Survived;
		mioP3.textContent = "luogo di partenza: " + Embarked;


		header.appendChild(mioDiv1)
		mioDiv1.appendChild(sect)
		sect.appendChild(mioH1)
		sect.appendChild(mioP)
		sect.appendChild(mioP1)
		sect.appendChild(mioP2)
		sect.appendChild(mioP3)
		sect.appendChild(mioP4)
		sect.appendChild(mioP5)
		

	}
}

populate(popular)
