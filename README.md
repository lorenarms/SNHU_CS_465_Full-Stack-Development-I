<h1>CS 465: Full Stack Development I and II</h1>
<h2>Lawrence Artl III<br>
  Southern New Hampshire University</h2>
Center: Online

<h2>
Course Prerequisites
</h2>
108 credits including CS 340
<h2>
Course Description
</h2>
<p>Students will design and develop a full stack application through the utilization of programming language frameworks. In creating a full stack application, students will also be responsible for developing a database as well as the code that interfaces their application to the database. 
</p>
<p>
This course covers the following competencies, which represent the knowledge and skills relevant to your field:
<ul>
    <li>CS-30427: Design the architecture of a web application
    <li>CS-40428: Build a web application using frameworks
    <li>CS-40429: Develop and integrate a database using frameworks
</ul>
</p>
<hr>

<img src="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/images/logo.png" alt="[logo]" style="width:250px;">

<h2>Travlr Web Application</h2>
<p>This class focused on the development of a single web application using the MEAN stack process (MongoDB, express.js framework, Angular frontend framework, and node.js backend server framework). The entire project was designed as a travel website, "Travlr Getaways", and can be found <a href="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/tree/main/CS-465%20Travlr" target="_blank"> in this folder</a>. 
This was a very challenging, very interesting, and very <i>very</i> fun project for me to work on. I enjoy web development more than any other type of project, so this class and application being the culmination of all my learning was just too perfect.
</p>

<p>To get a better idea of what this whole project was about, check out the <a href="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/module-6/writeups/Project%20Guidelines%20and%20Rubric.pdf" target="_blank"> Guidelines and Rubric document</a>. You can also view the <a href="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/module-6/writeups/CS%20465%20Travlr%20Getaways%20Wireframe.pdf" target="_blank"> Wireframe document </a>that shows you what the completed web project *should* look like when it's completed. This project went through several design changes as it was developed, but the wireframe was the main guide to get to the finished product. The <a href="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/writeups/Software%20Design%20Document%20-Module%207%20-%20Artl.docx.pdf" target="_blank"> final design document</a> summarizes the entire project, including routes and testing.</p>
  
<p>More images and information coming soon!</p>
 
<h3>Front-end Customer Facing Website</h3>
<p>The main customer page uses standard HTML with javascript and handlebars to access the backend database (served by MongoDB local hosting) and display available information to customers. </p>

<table>
    <tr>
        <th>Homepage</th>
        <th>Travel Page</th>    
    </tr>
    <tr>
        <td><img src="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/images/user_facing_page.png" alt="[main user page]" style="height:300px;"></td>
        <td><img src="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/images/travel_page_user.png" alt="[travel page]" style="height:300px;"></td>
    </tr>
        
</table>
  
<h3>Backend SPA (using Angular, Express, node.js, and MongoDB)</h3>
<p>The project incorporated a administrative backend that utilized the Angular, Express, node.js, and MongoDB (MEAN) stack system to deliver a single-page application to administrators. In this SPA a user could log-in, Add trips, Edit trips, and Delete trips. All changes made in the backend were instantly visible on the front end page for customers.</p>
<table>
    <tr>
        <th>Homepage</th>
        <th>Login Screen</th>
        <th>Logged In</th>
    </tr>
    <tr>
        <td><img src="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/images/user_logged_out.png" alt="[homepage]" style="height:200px;"></td>
        <td><img src="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/images/login_page.png" alt="[login]" style="height:200px;"></td>
        <td><img src="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/images/main_page.png" alt="[logged in]" style="height:200px;"></td>
    </tr>
</table>

<table>
    <tr>
        <th>Editing a Trip</th>
        <th>Trip Succesfully Edited</th>
        <th>Trip Deleted</th
    </tr>
    <tr>
        <td><img src="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/images/editing_trip.png" alt="[edit]" style="height:200px;"></td>
        <td><img src="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/images/trip_edited_successfully.png" alt="[success]" style="height:200px;"></td>
        <td><img src="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/images/trip_deleted_successfully.png" alt="[deleted]" style="height:200px;"></td>
    </tr>
</table>


<h3>Backend in Action</h3>
<p>
  Below is a short animation of the backend webpage in action. In it, a user logs into the web application, showing that the "Add Trip", "Edit Trip", and "Delete" functionality are only available to logged-in users.
</p>

<img src="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/blob/main/images/travlr_login.gif" alt="[deleted]" style="height:300px;">

More images can be found <a href="https://github.com/lorenarms/SNHU_CS_465_Full-Stack-Development/tree/main/images" target="_blank"> here </a>

<p>
In order to create a project similar to the one above you'll need a few things installed on your machine. First, I used <a href="https://code.visualstudio.com/" target="_blank"> VS Code </a>, but just about any IDE will do (Code works best for projects like this, in my opinion). You'll need to install <a href="https://www.w3schools.com/nodejs/nodejs_intro.asp" target="_blank"> node.js </a>, <a href="https://www.geeksforgeeks.org/express-js/" target="_blank"> express </a>, the <a href="https://angular.io/guide/setup-local" target="_blank"> Angular CLI </a>, and some sort of local database software. This project uses <a href="https://www.geeksforgeeks.org/mongodb-an-introduction/" target="_blank"> MongoDB </a>, which can be installed alongside Compass, the UI for the local database. I made a video about how to install that <a href="https://www.youtube.com/watch?v=dj3yQAd6cAM" target="_blank"> here </a>.
</p>

  
<hr>
<p>Check out my <a href="https://www.youtube.com/channel/UCGtp8PRHgPCQHYoSxbMST8A" target="_blank">YouTube channel</a> for more videos about coding projects I've done.</p>
<p>Also, check out my <a href="http://artllj.com" target="_blank">Personal Website</a> for more information about me, and my <a href="https://www.linkedin.com/in/lorenarms95/" target="_blank">LinkedIn</a> to see if I'd be a good fit for your team. </p>
<h3>Thanks for stopping by!</h3>
<img src="https://github.com/lorenarms/SNHU_CS_370_Emerging_Trends_in_CS/blob/main/images/profile.png" alt="[picture of me]" style="width:100px;">
<p>much love
-L
</p>
