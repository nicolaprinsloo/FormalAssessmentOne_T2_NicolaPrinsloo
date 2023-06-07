let form = [];

addAccount = () => {
    let names = document.getElementById("names").value
    let email = document.getElementById("email").value
    let number = +document.getElementById("number").value
    let subject = document.getElementById("subject").value
    let password = document.getElementById("password").value
    // let checkNews = document.getElementById("checkNews").value

    form.push({
        names, email, number, subject, password,
    })

    let checkNews = document.getElementById("checkNews").checked

    if(checkNews){
        alert("Welcome " +  names + "! Thank you for your interest in " + subject + "! We will contact you via the email provided: " +  email + ", or alternatively on the phone number: " + number + ".")
    } else {
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested" + names + "! If you want to sign up, you better CHECK that newsletter box! ")
    }

    document.getElementById("accountForm").reset();

}

addAccount();