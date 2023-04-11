
function HelloYouser()
{
    let userName = prompt("Hello, What is your name?");
    //get user name 
    document.write(" Hi"+ userName + " Welcome to Seattle Beaches! Time to explore!");
    //disply greeting on site 
    if (userName == "Kassie"){
        alert("Thank you for teaching!");
    }
    else if (userName == "")
        {
         prompt("Do you really not have a name?");
        }// if they enter nothing prompt again for their name 
    else if(userName == "Destinee"){
            alert("Hello Beautiful!")
        }
    else {
        alert("Glad you found this page!");
        }
}
function youserBeach()
{
    let userBeach = prompt("Do you have a favorite Beach?");
    document.write( userName + "LOVES" + youserBeach );

}
HelloYouser();
youserBeach();