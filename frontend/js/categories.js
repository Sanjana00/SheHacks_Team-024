
const button = document.getElementById('post-btn');

button.addEventListener('click', async _ => {
var location=val1, type_of_work=val2, field=val3; 
 axios(`http://localhost:3000/`, {			//and sends a post request with inputted parameters
				 "method": "POST",
				 "headers": {"content-type": "application/json"},
  				"data": JSON.stringify({location,type_of_work,field})
  				})
      	.then((res) => {
      	var obj=res.data;
		 console.log(obj[0]);		
		})
		.catch(error => console.error(error));
		})


