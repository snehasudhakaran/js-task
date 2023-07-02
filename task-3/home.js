
let text = "";
let textRender = "";
let studentDetails = [];
if (JSON.parse(localStorage.getItem("studentDetails"))){

        studentDetails = JSON.parse(localStorage.getItem("studentDetails"));

        console.log("studentDetails 111", studentDetails);

        viewStudentDetails();

    };

    

    function viewStudentDetails(){
        
        textRender='';

        for (i of studentDetails){
            
            text = `
            <tr>
            <td>${i.firstName}</td>
            <td>${i.secondName}</td>
            <td>${i.age}</td>
            <td>${i.course}</td>
            <td><button id="btn1" type="button" onclick="edit(this)">Edit</button></td>
            <td><button id="btn2" type="button" onclick="del(this)">Delete</button></td>
            </tr>  
            `;

            textRender += text;
            console.log(textRender)

            document.getElementById("table").innerHTML=`
                                               
                                <tr>
                                <th> First Name </th>
                                <th> Last Name </th>
                                <th> Age </th>
                                <th> Course </th>
                                <th> Edit </th>
                                <th> Delete </th>
                                </tr>`+ textRender; 
            console.log(textRender);

        }
        localStorage.setItem("studentDetails",JSON.stringify(studentDetails));
       

    };

 let editStudentDetails = {};
 function edit(data) {
        console.log("studentDetails 22", studentDetails);
        let firstName = data.parentElement.parentNode.firstElementChild.innerHTML;
        console.log("firstName", firstName);
    
        editStudentDetails = studentDetails.find((val) => val.firstName == firstName);
        console.log("editStudentDetails", editStudentDetails);
    
        localStorage.setItem("editStudentDetails", JSON.stringify(editStudentDetails))
    
        // setValue(editStudentDetails.firstName,editStudentDetails.lastName,editStudentDetails.age,editStudentDetails.course)
        window.location.href="register.html?formm=edit";
        console.log("ssm")
        console.log("ldk", editStudentDetails)
        // setValue(editStudentDetails.firstName,editStudentDetails.lastName,editStudentDetails.age,editStudentDetails.course)
    }

    function del(data){

        let firstName = data.parentElement.parentNode.firstElementChild.innerHTML;
        console.log(studentDetails)
        let det =studentDetails.find((ele)=>ele.firstName==firstName);
        
        console.log("deletedValues",det);
    
        let indexOfUpdateValue =studentDetails.indexOf(det);
        console.log("index",indexOfUpdateValue);
    
        studentDetails.splice( indexOfUpdateValue,1)
        console.log(studentDetails);
        
        
        viewStudentDetails();
        if(studentDetails.length==0){
            viewStudentDetails();
            window.location.reload()
        };
        
    
    }
    
    