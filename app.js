   function Yousername()
    {
       let userName = prompt("Hello, What is your name?");
        //get user name 
    while(userName == "")
    {
        userName = prompt("Do you really not have a name?")
    } // if they enter nothing prompt again for their name
    document.write(" Hi"+ userName + " Welcome to Seattle Beaches! Time to explore!");//disply greeting on site 
    if (userName == "Kassie")
    {
        alert("Thank you for teaching!");
    }//teacher check
    else 
    {
        alert("Glad you found this page!");
    }//greeting
    }
Yousername();
function  youserBeach()
{
    let userBeach = prompt("Which beach is your favorite?");
    confirm("Your favorite beach is " + userBeach);
}

youserBeach();