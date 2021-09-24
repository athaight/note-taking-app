<h1>Note Taking Application</h1>
<p>**assignment as part of coding bootcamp**</p>
<p>Contributions are Welcome</p>

## Description
Application to jot down a note and save it to a side bar list of previous notes which can be selected and re-read or deleted.

<h2 align=center>Project DEMO:</h2>




https://user-images.githubusercontent.com/69359454/134749152-a897a3cf-d0e9-4141-b4a3-94c419fdae75.mp4




<h2 align=center>Project Examples:</h2>

![Note-taker-screenshot-2](https://user-images.githubusercontent.com/69359454/134749642-cf1bc76d-66f0-4481-bd65-78d3faaaecb9.png)

![Note-taker-screenshot-3](https://user-images.githubusercontent.com/69359454/134749654-0e9b913a-112e-448e-843c-1ec0a2dfa35d.png)

![Note-taker-screenshot-1](https://user-images.githubusercontent.com/69359454/134749659-06144674-4c70-4047-bef9-47a2066386f3.png)

## Installation Instructions
First, clone the repo. 

If it has not been done already, you will need to install Node.js in your environment. 
This should be easily achieved by visiting: <a href="https://nodejs.org/en/" target="_blank">nodejs.org</a> and following the 
download instructions.

###
Clone the repo:
```
git clone git@github.com:athaight/note-taking-app.git
```

Once the you've cloned the repo and opened it in VS Code you'll want to 
right click the server.js file and open in intergrated terminal. 
In the terminal enter the following:
###
To install npm:
```
npm i
```
###

Once npm has installed completely enter the following command:
```
node server.js
```
###
This should begin the application in the terminal and output the connection to localhost PORT:3023
(default PORT selection in the application is set to PORT 3023)

If you have the program Insomnia
Then you can use it to listen to PORT 3023 and view the application, however, it may lack in functionality
Else (and best) open a browser window and direct your browser to http://localhost:3023 and you should be set.


## About the Project
This is another homework assignment for the UofA coding bootcamp. 
The following was provided as Acceptance Criteria:

GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
 
## Technologies used
HTML/CSS, Bootstrap, JavaScript- Utilizing Express.js with Node.js, npm, and fs.

## Future Scope
I hope to change the styling as the original was a provided default framework. 
In this I would like to make it look like a notepad and have animations for saving the pages and deleting pages. 

## Licence
N/A
