let request = new XMLHttpRequest();
request.open('GET','https://varunsharmasgr.github.io/lab8/products.json');
request.responseType = 'json';
request.send();


request.onload = function(){
	
    let data = request.response;
    addProducts(data);
};

function addProducts(data)
{
		let headings = document.querySelectorAll('h2');
		// headings
		headings[1].textContent = data.companyName;
		headings[2].textContent = data.headOffice;
		headings[3].textContent = data.established;
		// deals from json list
	    let products = data.topDeals;
		let myList = document.getElementById('myList');
		for (let i = 0; i < products.length; i++) {
        let li = document.createElement('li');
        let namePrice = document.createElement('h1');
        let img = document.createElement('img');
		let desc = document.createElement('p');
		
		//atributes set
		namePrice.textContent = products[i].name + " AT $"+products[i].price;
        img.setAttribute('src', 'https://varunsharmasgr.github.io/lab8/images/' + products[i].image);

        desc.textContent = products[i].features;
		// add to list
        li.appendChild(img);
        li.appendChild(namePrice);
        li.appendChild(desc);
        myList.appendChild(li);
    }
}