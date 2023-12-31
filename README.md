<h1>NoteBook React App</h1>
<p> This is a notebook app, which consists of 3 main pages, registration and login page forms. All pages made to have responsive design. Planning to add dark theme and a mobile version in future. 
Connected to the API, thus allowing registration.</p>

<p>Backend by: <a href="https://github.com/blakkheart"><img src="https://avatars.githubusercontent.com/u/118317748?v=4" style="border-radius:75px;width:62px;height:62px;"/></a></p>
<p>Frontend by: <a href="https://github.com/alessastern/"><img src="https://avatars.githubusercontent.com/u/134006736?v=4" style="border-radius:75px;width:62px;height:62px;"/></a></p>

<ul>
<li>HOME ('/') - Homepage with a greeting message, which also suggests to login or signup depending on if user is logged in or not. <img src="https://github.com/alessastern/notebook/assets/134006736/20702d01-a7a0-4bf3-8b1c-464ac8d3b5fd"/> <img src="https://github.com/alessastern/notebook/assets/134006736/d2995d9b-a7e4-4e9f-8aff-47bf10b7a50b"/>
</li> 

<li>  NOTES ('/notes') - private route (only accessible if user is logged in), a page with all the notes created by current user listed from newest to oldest. Allows to add, delete or edit existing notes. If note's length is bigger than 200 characters, button "view full text", allowing to open the note in a new modal window. <img src="https://github.com/alessastern/notebook/assets/134006736/ef942388-2b99-4895-b8fc-18b30eae2e80"/> <img src="https://github.com/alessastern/notebook/assets/134006736/eeba377a-c694-43f1-a07c-13cf0e080263"/>
adding a new note: <img src="https://github.com/alessastern/notebook/assets/134006736/3fb14e07-d147-4a89-9ffa-94cf6e09e342"/> 
editing an existing one: <img src="https://github.com/alessastern/notebook/assets/134006736/7afaa5e0-3747-41e3-8bbc-40acc1e6c75f"/>
deleting an existing note: <img src="https://github.com/alessastern/notebook/assets/134006736/756844eb-c88f-4f28-90b0-ee329385927f"/>





</li>

<li> IMAGES ('/images')- private route (only accessible if user is logged in), contains 5 images per page and a pagination button. Allows to open every image in a modal window, edit it's description, view fullsize image or delete it.  <img src="https://github.com/alessastern/notebook/assets/134006736/22625919-95cf-40db-b152-d2dc7b9b2486"/> <img src="https://github.com/alessastern/notebook/assets/134006736/bc406fe0-954e-4945-8e7b-cd5070aea8de"/>
adding a new image: <img src="https://github.com/alessastern/notebook/assets/134006736/4a677b2c-0595-4d9e-890c-ce3d706aaac1"/>
adding a description to the existing image: <img src="https://github.com/alessastern/notebook/assets/134006736/4bd12279-d33a-4718-95f6-7c11f4c9df6a"/>
viewing fullsize image in a new tab: <img src="https://github.com/alessastern/notebook/assets/134006736/27232363-9b75-43a4-9a2c-18e11c249330"/>
deleting an image: <img src="https://github.com/alessastern/notebook/assets/134006736/351c0ea2-8137-4a4f-bfa5-e424da29f51d"/>

 </li>

<li>  REGISTRATION (/registration) - can be reached from dropdown menu from the header, from homepage, from login form page. Allows to register a new user using API, checks if passwords are matching and logs user in immediately after the signup is successful. <img src="https://github.com/alessastern/notebook/assets/134006736/fe983951-aba0-4340-a2ae-7487af26fe71"/> 
 <p>If passwords do not match: <img src="https://github.com/alessastern/notebook/assets/134006736/134a3e57-e699-4032-8e70-a54483e038c5"/> </p>
 <p>If values are not suitable for the api: <img src="https://github.com/alessastern/notebook/assets/134006736/3840bc00-78a9-4660-8a34-0a0712f7cf82"/></p>

</li>

<li> LOGIN ('/login) - login page for existing users, allows to log in into the app. Can be reached from homepage, header, also user is redirected here every time they try to access private routes without being logged. !<img src="https://github.com/alessastern/notebook/assets/134006736/25e02673-97ef-465f-a3f8-db28d0ae9a84"/> 
 <p>If account doesn't exist: <img src="https://github.com/alessastern/notebook/assets/134006736/58fa1097-d6af-4a46-871f-c8dc1622aa91"/></p>

</li> 
</ul>
