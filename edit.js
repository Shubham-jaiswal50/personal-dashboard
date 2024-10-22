
async function editSave(id) {
    // Get the updated values from the form fields
    
       let  name = document.getElementById("name").value;
       let  contact= document.getElementById("con").value;
       let email= document.getElementById("email").value;
       let designation= document.getElementById("desg").value;
       let location=document.getElementById("loca").value;
       let empCode= document.getElementById("code").value;
    


    let api = `http://localhost:4000/id/${id}`;
    fetch(api, {
        method: "PATCH",  
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                EmployeName : name,
                Contactnumber : contact,
                Email : email,
                designation :designation,
                location: location,
                Employecode : empCode
            }

        )
    })

    .then(json => {
        alert("Data updated!!!");
      });
   
}


async function editDisplay(myid) {
    let api = `http://localhost:4000/id/${myid}`;

    // Fetch the employee data
    let response = await fetch(api);
    let data = await response.json();

    // Create a form with the fetched employee data
    let formHTML = `
        <h3>Edit Employee Details</h3>
          <label for="name"> Enter Name :</label>
         <input type="text" id="name" value="${data.EmployeName}" required>
        <br>
          <label for="con"> Contact Number :</label>
        <input type="number" id="con" value="${data.Contactnumber}">
        <br>
          <label for="email"> Email</label>
         <input type="email" id="email" value="${data.Email}">
        <br>
          <label for="desg"> Designation :</label>
         <input type="text" id="desg" value="${data.designation}">
        <br>
          <label for="loca"> Location :</label>
        <input type="text" id="loca" value="${data.location}">
        <br>
          <label for="code"> Employe code :</label>
         <input type="number" id="code" value="${data.Employecode}">
        <br>
        <button id="saveButton" onclick="editSave('${data.id}')">Save Data!</button>
    `;

    // Insert the form into the designated container in the HTML
    document.getElementById("demo1").innerHTML = formHTML;
}


async function dataDisplay() {
    // Create the table with headers
    let Table = `
        <table >
            <tr bgcolor="orange">
                <th>Enter name</th>
                <th>Contact number</th>
                <th>Email</th>
                <th>Designation</th>
                <th>Location</th>
                <th>Employe code</th>
                <th>Edit</th>
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
                    <a href="#" onclick="editDisplay('${key.id}')">
                        <img src="/pencil.png" width="30" height="30">
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
