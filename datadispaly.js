async function dataDisplay() {

    let Table=`<table border="2px" cellpadding="3px>
              <tr bgcolor="orange">
              <th> Enter name</th>
              <th> Contact number</th>
              <th> Email</th>
              <th> Designation</th>
              <th>location</th>
              <th>Employcode</th>
              
              <tr>
              `
               let api ="http://localhost:4000/id"
               let mydata= await fetch(api)
               let myinfo= await mydata.json();
               myinfo.map((key)=>{
                Table+=`  <tr>
                          <td> ${key.EmployeName}</td>
                          <td> ${key.Contactnumber}</td>
                          <td> ${key.Email}</td>
                          <td> ${key.designation}</td>
                          <td> ${key.location}</td>
                          <td> ${key.Employecode}</td>
                </tr>
                `
               })

               Table+="</table>"
               document.getElementById("demo").innerHTML=Table;


            
}



dataDisplay();