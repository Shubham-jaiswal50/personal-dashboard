document.getElementById("name1").addEventListener("keyup",showdata)

async function showdata() {
    let myans=  document.getElementById("name1").value
    let Table=`<table width="90%" border="1" bgcolor="red">
              <tr bgcolor="blue">
              <th> Enter name</th>
              <th> Contact number</th>
              <th> Email</th>
              <th> Designation</th>
              <th>location</th>
              <th>Employecode</th>
              <tr>
              `

              let api ="http://localhost:4000/id"
              let mydata= await fetch(api)
              let myinfo= await mydata.json();

              myinfo.map((key)=>{
                let str=key.Employecode
                let myval=str.includes(myans);

                if(myval==true){
                    Table+=`<tr>
                           <td> ${key.EmployeName}</td>
                          <td> ${key.Contactnumber}</td>
                          <td> ${key.Email}</td>
                          <td> ${key.designation}</td>
                          <td> ${key.location}</td>
                          <td> ${key.Employecode}</td>
                    
                    
                    </tr>


                    
                    
                    `
                }
              })
              Table+="</Table>"
              document.getElementById("demo2").innerHTML=Table
    
}