// Mes variables
listOfName = []
var persPerGroup = 2; 

function liststored(){
    if (localStorage.getItem("liste") === null) {
        listOfName = []
    }
    else {
        listOfName = localStorage.getItem("liste").split(",")
        document.getElementById("inputname").innerText = listOfName
    }
}

liststored()

document.querySelector("#add").addEventListener("click", function()
{
    let myName = document.querySelector("#inputname").value ;
    console.log(myName);
    listOfName.push(myName);
    localStorage.setItem("liste", listOfName)
    console.log(listOfName);
    document.getElementById("liste").innerText = listOfName; //Regarder comment reformater;
})

const shuffle = (listOfName) => [...listOfName].sort(() => Math.random() - 0.5);

function createGroup(listOfName,persPerGroup){
    let minigroup = [];
    let names = shuffle(listOfName);
    for (let i = 0; i < names.length; i +=persPerGroup){
    minigroup.push(names.slice(i , i+persPerGroup)); 
    }
    console.log(minigroup);
    return minigroup
}


document.querySelector("#creategroup").addEventListener ( "click", function (){
createGroup(listOfName, persPerGroup)
let groups = createGroup(listOfName, persPerGroup)
let orderedgroups = groups.forEach((group) => {
    let li = document.createElement("li")
    li.innerText = group
    let ul = document.querySelector("#showgroup")// regarder pour faire un div
    ul.appendChild(li)
})
})
