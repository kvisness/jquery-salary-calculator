

function setup(){
//set table as variable and append to DOM
const table = $(`
    <input id="firstNameInput" placeholder="First Name" />
    <input id="lastNameInput" placeholder="Last Name" />
    <input id="idInput" placeholder="ID" />
    <input id="titleInput" placeholder="Title" />
    <input id="annualSalaryInput" placeholder="Annual Salary" />
    <button id="addEmployee">Submit</button>
    <table id="SalaryTable">
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
                <th>Title</th>
                <th>Annual Salary</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    <p id='Salary-Total'>$0.00 Total Salaries</p>
    `);
    $('body').append(table);
    //set up click handlers
    $('#addEmployee').on("click", handleEmployeeButton);
    //per class video, this code only runs the actual delete button once
    $("body").on("click", ".deleteEmployee", deleteRow); 

let totalAnnualSalaries = 0;

function handleEmployeeButton(event) {
  //should fire on the click of 'Submit'
  //button up in the form

  //grab Firstname, Lastname, ID, Title, Annual Salary, Delete and store there own const.
  const firName = $("#firstNameInput").val();
  console.log('show first name');
  $("#firstNameInput").val(""); //clears input after button click
  const lasName = $("#lastNameInput").val();
  console.log("show last name");
  $("#lastNameInput").val(""); //clears input after button click
  const idIn = $("#idInput").val();
  console.log("show idIn");
  $("#idInput").val(""); //clears input after button click
  const titlIn = $("#titleInput").val();
  console.log("show titlIn");
  $("#titleInput").val(""); //clears input after button click
  const annSalIn = $("#annualSalaryInput").val();
  console.log("show annSalIn");
  $("#annualSalaryInput").val(""); //clears input after button click
  console.log(firName);
  console.log(lasName);
  console.log(idIn);
  console.log(titlIn);
  console.log(annSalIn);
  //validation--

  //create rows
    const elem = $(`
    <tr>
        <td>${firName}</td>
        <td>${lasName}</td>
        <td>${idIn}</td>
        <td>${titlIn}</td>
        <td>${annSalIn}</td>
        <td><button class="deleteEmployee">Delete</button></td>
    </tr>    
    `);
  //add rows to table
  $("tbody").append(elem);
  //make calculation of annual salaries, had to add a p tag in the table.
  totalAnnualSalaries += Number(annSalIn) /12;
  $("#Salary-Total").text(`$ ${totalAnnualSalaries}`);
};//********how do we add the thousand separator??*******

function deleteRow(event){
    console.log('in deleteRow');
    const deleteButtonRow = $(event.target);//grab button that was clicked
    const targetRow = deleteButtonRow.closest('tr');//find grandparent
    targetRow.remove();
    //could also use all this in one line per video notes as
    //  $(event.target).closest('tr).remove
    // or
    //  $(event.target).parent().parent().remove();
};
}
$(document).ready(setup);