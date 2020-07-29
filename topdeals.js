/*let request = new XMLHttpRequest();
request.open('GET','https://varunsharmasgr.github.io/lab8/products.json');
request.responseType = 'json';
request.send();
*/

// Used Fetch api to get json data from link and add products
fetch('https://varunsharmasgr.github.io/lab8/products.json')
  .then(response => response.json())
  .then(data => addProducts(data));

//request.onload = function(){
	
//    let data = request.response;
//    addProducts(data);
//};

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

function geoFindMe() {


  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';
    mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if(!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}