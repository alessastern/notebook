<h1 style="text-align: center; color: rgb(84, 57, 100)" >NoteBook React App</h1>
<p> This is a notebook app, which consists of 3 main pages, registration and login page forms.
Connected to the API, thus allowing registration.</p>

<ul>
<li>HOME ('/') - Homepage with a greeting message, which also suggests to login or signup depending on if user is logged in or not.</li>

<li>  NOTES ('/notes') - private route (only accessible if user is logged in), a page with all the notes created by current user listed from newest to oldest. Allows to add, delete or edit existing notes.</li>

<li> IMAGES ('/images')- private route (only accessible if user is logged in), currently under construction</li>

<li>  REGISTRATION (/registration) - can be reached from dropdown menu from the header, from homepage, from login form page. Allows to register a new user using API, checks if passwords are matching and logs user in immediately after the signup is successful.</li>

<li> LOGIN ('/login) - login page for existing users, allows to log in into the app. Can be reached from homepage, header, also user is redirected here every time they try to access private routes without being logged.</li> 
</ul>
