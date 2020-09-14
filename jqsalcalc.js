

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
    `);
    $('body').append(table);
    //set up click handlers
    $('#addEmployee').on("click", handleEmployeeButton);

}
function handleEmployeeButton(event){
    //should fire on the click of 'Submit'
    //button up in the form

    //grab Firstname, Lastname, ID, Title, Annual Salary, Delete and store there own const.
    const firName = $('#firstNameInput').val();
    const lasName = $('#lastNameInput').val();
    const idIn = $('#idInput').val();
    const titlIn = $('#titleInput').val();
    const annSalIn = $('#annualSalaryInput').val();
    const annSalInAsANumber = Number(annSalIn);
    console.log(firName);
    console.log(lasName);
    console.log(idIn);
    console.log(titlIn);
    console.log(annSalIn);
    console.log(annSalInAsANumber);;

    //create rows
    const elem = $(`
    <tr>
        <td>${firName}</td>
        <td>${lasName}</td>
        <td>${idIn}</td>
        <td>${titlIn}</td>
        <td>${annSalInAsANumber}</td>
        <td><button class="deleteEmployee">Delete</button></td>
    </tr>    
    `);

    //add rows to table and be the most specific as possible per video
    //
    $("tbody").append(elem);
};
$(document).ready(setup);//set up jquery and create function
