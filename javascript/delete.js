function mydel(myid) {
    let confermation= confirm("are you sure you want to delete item?")
    if( confermation){
        
    
    let api = `http://localhost:4000/id/${myid}`;
  
    fetch(api, { method: "DELETE" }).then((res) => {
      alert("Record Deleted!!!");
    });
  }else{
    alert("delete action cancelled")
  }
}



async function dataDisplay() {
    // Create the table with headers
    let Table = `
        <table width="90%" border="1" bgcolor="pink">
            <tr bgcolor="orange">
                <th>Enter name</th>
                <th>Contact number</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Location</th>
                <th>Employe code</th>
                <th>Delete</th>
                
            
            </tr>
    `;

    // Fetch the list of employees
    let api = "http://localhost:4000/id";
    let mydata = await fetch(api);
    let myinfo = await mydata.json();

    // Loop through the employee data and add rows to the table
    myinfo.map((key) => {
        Table += `
            <tr>
                <td>${key.EmployeName}</td>
                <td>${key.Contactnumber}</td>
                <td>${key.Email}</td>
                <td>${key.designation}</td>
                <td>${key.location}</td>
                <td>${key.Employecode}</td>
                <td>
                    <a href="#" onclick="mydel('${key.id}')">
                        <img src="/image/delete.png" width="30" height="30">
                    </a>
                </td>

                

            </tr>
        `;
    });

    
    Table += "</table>";

    
    document.getElementById("demo").innerHTML = Table;

}

// Call the dataDisplay function to display the table
dataDisplay();
