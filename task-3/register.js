
let student = {
    firstName: "",
    secondName: "",
    age: "",
    course: "",
};

let userDetails="";

document.addEventListener("DOMContentLoaded", () => {
    let params = new URLSearchParams(document.location.search);
    let formType = params.get("formm");
    console.log("params",params)
    console.log("formType", formType);
    if(formType == 'edit'){
        let userDetails =  JSON.parse(localStorage.getItem("editStudentDetails"));
        console.log("userDetails", userDetails);
        setValue(userDetails?.firstName, userDetails?.secondName, userDetails?.age, userDetails?.course);

    }
  });

let studentDetails = JSON.parse(localStorage.getItem("studentDetails")) || [];

    function add(){

        let firstName = document.querySelector("#firstName");
        let secondName = document.getElementById("lastName");
        let age = document.getElementById("age");
        let course = document.getElementById("course");
        
        let firstNameElement = firstName.value;
        let secondNameElement = secondName.value;
        let ageElement = age.value;
        let courseElement = course.value;

        console.log("input value",firstNameElement,secondNameElement,ageElement,courseElement)

        student = new Object;
        student.firstName = firstNameElement;
        student.secondName = secondNameElement;
        student.age = ageElement;
        student.course = courseElement;

        // console.log("student Details BEFORE", studentDetails);

        studentDetails.push(student);

        localStorage.setItem("studentDetails",JSON.stringify(studentDetails));

        reset();
        redirect();

        

    };

    function setValue(firstName, secondName, age, course){

        document.querySelector("#firstName").value = firstName;
        document.getElementById("lastName").value = secondName;
        document.getElementById("age").value = age;
        document.getElementById("course").value = course;

    };

    function reset(){

        setValue(null,null,null,"-- select --");

    };

    function redirect(){

        window.location.href="home.html"

    };

    function update1(){

        let updatedValues={};
        console.log("userDetails",userDetails);
        
        
        let firstName = userDetails.firstName;
        console.log("studentDetails",studentDetails);
        let updateValue =studentDetails.find((val) => val.firstName == firstName);
        console.log("UpdateValue",updateValue);
        let indexOfUpdateValue =studentDetails.indexOf(updateValue);
        console.log("index",indexOfUpdateValue)
 
         updatedValues.firstName = document.querySelector("#firstName").value;
         updatedValues.secondName = document.getElementById("lastName").value;
         updatedValues.age = document.getElementById("age").value;
         updatedValues.course = document.getElementById("course").value;
 
         console.log("updatedValues",updatedValues)
 
         
         studentDetails.splice(indexOfUpdateValue,1,updatedValues);
         console.log(studentDetails)
 
         localStorage.setItem("studentDetails",JSON.stringify(studentDetails));
 
         reset()
         redirect()
             
     
         // }
         // else{
         //     popupp("Don't update before <br> entering values ")
         // }
 
         // studentDetails.splice()
 
 
     }
 
     
             
 
 
 
 // to del the existing data
 // function del(fruitValue){
 
 //     let fruitName = fruitValue.parentElement.firstElementChild.lastElementChild.innerHTML;
 //     let det =fruitCollection.find((ele)=>ele.fruitName===fruitName);
     
 //     console.log(det)
 
 //     let index=fruitCollection.indexOf(det)
 //     fruitCollection.splice(index,1)
 //     console.log(fruitCollection)
     
 //     // view function invoked
 //     view()
 
 //     if (fruitCollection.length==0){
 //         QueryCon_2Boxes("none")
 //     }
     
 //     // deleting.style.display="none";
       
 // }
 