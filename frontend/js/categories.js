
function getjobs()
{
var location=val1, type_of_work=val2, field=val3,obj; 
 axios(`http://localhost:3000/`, {			//and sends a post request with inputted parameters
				 "method": "POST",
				 "headers": {"content-type": "application/json"},
  				"data": JSON.stringify({location,type_of_work,field})
  				})
      	.then((res) => {
      	obj=res.data;
		 console.log(obj[0]);		
		 localStorage.setItem("jobs", JSON.stringify(obj));
		})
		.catch(error => console.error(error));

		setTimeout(function(){ window.location.href = "jobs.html";}, 1000);

}
		



