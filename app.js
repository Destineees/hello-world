let choiceBeach;
let x;
   function youserName()
    {
       let userName = prompt("Hello, What is your name?");
        //get user name 
    while(userName == "")
    {
        userName = prompt("Do you really not have a name?")
    } // if they enter nothing prompt again for their name
    document.write(" Hi, "+ userName + "! Welcome to Seattle Beaches! Time to explore!");//disply greeting on site 
    if (userName == "Kassie")
    {
        alert("Thank you for teaching!");
    }//teacher check
    else 
    {
        alert("Glad you found this page!");
    }//greeting
    }

youserName();

function  youserBeach()
{
    
    let userBeach = prompt("Enter the number of your favorite beach 1:Alki Beach 2:Discovery Park Beach 3:Pocket Beach"); 
    //get user choice for favorite beach
    while(userBeach == "")
    {
      prompt("Please enter the number of your favorite beach 1:Alki Beach 2:Discovery Park Beach 3:Pocket Beach");
    }//check for blank response 
    if (userBeach == 1)
       choiceBeach = "Alki Beach";
       x = 1;
    if (userBeach == 2)
    choiceBeach = "Discovery Park Beach";
    x = 2;
    if (userBeach == 3)
      choiceBeach = "Pocket Beach";
      x = 3;
    //check for beach options
    if (userBeach == 0)
   prompt("Please enter the number of your favorite beach 1:Alki Beach 2:Discovery Park Beach 3:Pocket Beach"); 
    if (userBeach >= 3)
   prompt("Please enter the number of your favorite beach 1:Alki Beach 2:Discovery Park Beach 3:Pocket Beach"); 
    //check for numbers greater than 3 and below 0

    alert("Your favorite beach is " + choiceBeach);

    let userBeachVisit = prompt("How many times do you want to go to a beach? Enter a number between 0-10");//get beach visits
    
    while(userBeachVisit == "" || userBeachVisit >11)
    {
     userBeachVisit = prompt("Please enter a number between 0-10");
    }

    for ( let i = 0; i < userBeachVisit ; i++)
    {
      document.write("<img src='Images/alki2.jpg' alt='Seattle skyline from Alki Beach'> Thanks for visiting! </img>").style.display.inlineblock.width150px;
      document.write(i)
    }// show image number of times entered for beach visit
} //call on button click youserBeach();
