document.getElementById("button").addEventListener("click",store)

async  function store(){
    let nme = document.getElementById("name").value
    let cont= document.getElementById("con").value
    let ema= document.getElementById("email").value
    let des= document.getElementById("desg").value
    let loc= document.getElementById("loca").value
    let empcode= document.getElementById("code").value

    

    let api ="http://localhost:4000/id"
    const response= await fetch(api, {
        method: "POST",
        body: JSON.stringify({ 
          "EmployeName":nme,
          "Contactnumber":cont,
          "Email":ema,
          "designation":des,
          "location":loc,
          "Employecode":empcode

         }),
         headers: {
            "Content-Type": "application/json",
          }
    });

    console.log(response);
    alert("data save!!!");

}
    
