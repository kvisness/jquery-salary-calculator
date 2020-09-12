$(readyNow);

function readyNow(){
    appendDom();


const table = $(`
    <input placeholder="First Name" id="firstNameInput" />
    <input placeholder="Last Name" id="lastNameInput" />
    <input placeholder="ID" id="idInput" />
    <input placeholder="Title" id="titleInput" />
    <input placeholder="Annual Salary" id="annualSalaryInput" />
    <button id="addEmployee">Submit</button>
    <table id="SalaryTable>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>ID</th>
                <th>Title</th>
                <th>Annual Salary</th>
            </tr>
        </thead>
    </table>`);



  $('body').append(table);
}