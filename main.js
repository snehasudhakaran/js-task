
// fruit object with name and color

let fruits={
    fruitName :"",
    fruitColor:"",
}

// fruit objects stored in this array.
let fruitCollection=[]
if(JSON.parse(localStorage.getItem('fruitCollection'))){
    fruitCollection=JSON.parse(localStorage.getItem('fruitCollection')) ;
    view()
}

if (fruitCollection.length==0){
    document.querySelector("#con-2").style.border="none";
}

// if(JSON.parse(sessionStorage.getItem('fruitCollection'))){
//     fruitCollection=JSON.parse(sessionStorage.getItem('fruitCollection')) ;
//     view()
// }

// function for adding fruits to array.
function add(){

    fruits = new Object;
    fruits.fruitName = document.getElementById("fruitName").value;
    fruits.fruitColor = document.getElementById("fruitColor").value;
    
    // let hide=null;
    let filter = fruitCollection.find((ele)=>ele.fruitName==fruits.fruitName);
    if (!filter && fruits.fruitName.length>0 && fruits.fruitColor.length>0){
        fruitCollection.push(fruits);
        view()
    }
    else{
        // var popup = document.getElementById("popup");
        // popup.style.display="block";
        // // hide= function(){
        // // var hidden = document.getElementById("popup");
        // document.querySelector("#hide").addEventListener("click",function(){
        // document.querySelector(".popup").style.display="none";
        // });
        popupp("Duplicate value<br> or  Input field is empty..")
    }

    console.log("fruits", fruits)
    console.log("fruitCollection", fruitCollection)

    reset();
}

function popupp(text){
    var popup = document.getElementById("popup");
    popup.style.display="block";
    // hide= function(){
    // var hidden = document.getElementById("popup");
    var heading =document.getElementById("popupHeading").innerHTML=text;

    console.log(heading)

    document.querySelector("#hide").addEventListener("click",function(){
    document.querySelector(".popup").style.display="none";
    });
}
// function to reuse code for fetching value from input field.
function setDocValues(fruitName,fruitColor){
    document.getElementById("fruitName").value = fruitName;
    document.getElementById("fruitColor").value = fruitColor;
}

// for resetting to default value.
function reset(){
    // document.getElementById("fruitName").value = null;
    // document.getElementById("fruitColor").value = null;
    setDocValues(null,null);
}

// function to view added fruit objects in array in card format.
function view(){
    let box="";
    let boxRender="";

    for (let i of fruitCollection){
        box=`
        <div class="box-1">
        <p id="fruitname"><span>Fruit Name:</span> <span>${i.fruitName}</span></p>
        <p id="fruitcolor"><span>Fruit Color:</span><span>${i.fruitColor}</span> </p>
        <button type="button" onclick="edit(this)">Edit</button>
        <button type="button" onclick="del(this)">Delete</button>
        </div>
        `
        boxRender+=box;
        console.log("boxRender:", boxRender);
    }
    // document.querySelector("#con-2").style.display="block";
    document.querySelector("#boxes").innerHTML=boxRender;
    QueryCon_2Boxes("block");

    // sessionStorage.setItem("fruitCollection",JSON.stringify(fruitCollection));


    localStorage.setItem("fruitCollection",JSON.stringify(fruitCollection));

};

// to edit existing data
// let efruits={};
// function edit(fruitValue){

//     efruits={};
//     let fruitName=fruitValue.parentElement.firstElementChild.lastElementChild.innerText;

//     console.log(fruitCollection.find((ele)=> ele.fruitName==fruitName));
    
//     efruits=fruitCollection.find((ele)=>ele.fruitName==fruitName);

//     // reusable function for setting value to input field.
//     setDocValues(efruits.fruitName,efruits.fruitColor);

//     console.log(fruitName);
// }
let efruits={};
function edit(fruitValue){
    
    efruits={};
    let fruitName=fruitValue.parentElement.firstElementChild.lastElementChild.innerText;
    
    efruits =fruitCollection.find((ele)=>ele.fruitName==fruitName);

    setDocValues(efruits.fruitName,efruits.fruitColor);

    // let disable= document.querySelector("#update");
    // disable.disabled=false;
    // disable.style.color ="black";

    updateDisableValue(false,"black");
    addDisableValue1(true,"rgb(92,90,90)");

}

function updateDisableValue(dis,color){
    let disable= document.querySelector("#update");
    disable.disabled=dis;
    disable.style.color =color;
}

function addDisableValue1(dis1,color1){
    let disable1= document.querySelector("#add11");
    disable1.disabled=dis1;
    disable1.style.color =color1;
}

// to update values to their respective position
function update1(){

    let uFruit={}
    
    uFruit.fruitName =document.getElementById("fruitName").value;
    uFruit.fruitColor = document.getElementById("fruitColor").value;


    let index= fruitCollection.indexOf(efruits)
    // let index = fruitCollection.indexOf((ele)=>eFruit.fruitName == fruits.fruitName)
    console.log("index",index)
    // fruitCollection.splice(index,1,uFruit);
    // console.log(fruitCollection)
    
    reset()

    updateDisableValue(true,"rgb(92,90,90)");
    addDisableValue1(false,"black");
    // let disable= document.querySelector("#update");
    // disable.disabled=true;
    // disable.style.color ="rgb(92,90,90)";
    console.log(uFruit.fruitName.length>0 && uFruit.fruitColor.length>0)

    if ((uFruit.fruitName.length>0) && (uFruit.fruitColor.length>0)){

        fruitCollection.splice(index,1,uFruit);
        console.log(fruitCollection)
        view()

    }
    else{
        popupp("Don't update before <br> entering values ")
    }
            
}


// to del the existing data
function del(fruitValue){

    let fruitName = fruitValue.parentElement.firstElementChild.lastElementChild.innerHTML;
    let det =fruitCollection.find((ele)=>ele.fruitName===fruitName);
    
    console.log(det)

    let index=fruitCollection.indexOf(det)
    fruitCollection.splice(index,1)
    console.log(fruitCollection)
    
    // view function invoked
    view()

    if (fruitCollection.length==0){
        QueryCon_2Boxes("none")
    }
    
    // deleting.style.display="none";
      
}

// to clear card format in UI for viewing data
function clearr(){
    // document.querySelector("#boxes").innerHTML=null;
    // document.querySelector("#con-2").style.display ="none";
    fruitCollection=[]
    console.log(fruitCollection)
    view()
    QueryCon_2Boxes("none")
}

// function for reuse code
function QueryCon_2Boxes(con_2){
    document.querySelector("#con-2").style.display =con_2;
}