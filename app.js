   function youserName()
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
youserName();
function  youserBeach()
{
    let choiceBeach = "";
    let userBeach = prompt("Enter the number of your favorite beach 1:Alki Beach 2:Discovery Park Beach 3:Pocket Beach"); 
    //get user choice for favorite beach
    while(userBeach == "")
    {
      prompt("Please enter the number of your favorite beach 1:Alki Beach 2:Discovery Park Beach 3:Pocket Beach");
    }//check for blank response 
    if (userBeach == 1)
       choiceBeach = "Alki Beach";
    if (userBeach == 2)
    choiceBeach = "Discovery Park Beach";
    if (userBeach == 3)
      choiceBeach = "Pocket Beach";
    //check for beach options
    if (userBeach = 0)
   prompt("Please enter the number of your favorite beach 1:Alki Beach 2:Discovery Park Beach 3:Pocket Beach"); 
    if (userBeach >= 3)
   prompt("Please enter the number of your favorite beach 1:Alki Beach 2:Discovery Park Beach 3:Pocket Beach"); 
    //check for numbers greater than 3 and below 0

    confirm("Your favorite beach is " + choiceBeach);
}
//call on button click youserBeach();
function vistBeach()
{
  let userBeachVisit = prompt("How many times do you want to visit the beach? Enter a number between 0-10");//get beach visits
  while(userBeachVisit == "" || userBeachVisit >11)
    {
     userBeachVisit = prompt("Please enter a number between 0-10");
    }
  for ( let i = 0; i < userBeachVisit ; i++)
  {
      alert("add image later");
      alert("visit #" + i);
  }// show image number of times entered for beach visit
}
//vistBeach();//call on button click
