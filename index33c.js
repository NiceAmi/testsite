let usersArr = [];

class users {
    constructor(fname, lname, age,) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;

    }
}




function add_users() {
    let loader = document.getElementById('loader');
    loader.style.display = 'block';
    
    
    let promise = new Promise(function (resolve, reject) { 
        setTimeout(function () {
            
            let fname = document.getElementById('fname').value;
            let lname = document.getElementById('lname').value;
            let age = document.getElementById('age').value;
            let new_User = new users(fname, lname, age,);
            usersArr.push(new_User);
            alert("new User");
            resolve("User added successfully.");
            reject("error");
        }, 3000)
    });
}





function show_Users() {
    let showMainElement = document.getElementById('content');
    showMainElement.innerHTML = '';

    let counter = 1;
    for (let user of usersArr) {
        if (user.fname && user.lname && user.age) {
            let userCard = document.createElement("div");
            userCard.innerHTML = user.fname + "<br>" + user.lname + "<br>" + user.age;

            let button = document.createElement("button");

            showMainElement.appendChild(userCard);
        }
        counter++;
    }
}

