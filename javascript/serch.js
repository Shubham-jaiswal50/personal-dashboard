document.getElementById("bname").addEventListener("keyup", searchDisplay);
async function searchDisplay()
{
  let bname=document.getElementById("bname").value;
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
              let myobj= await fetch(api)
              let mydata= await myobj.json();

              mydata.map((key)=>{
                let str=key.Employecode
                let myval=str.includes(bname);

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
              document.getElementById("demo").innerHTML=Table
    
}