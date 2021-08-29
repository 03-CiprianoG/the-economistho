<h3 align="center">Assignment by Mistho.io</h3>

<h3 align="center">Languages and Tools:</h3>
<p align="center"> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mongodb.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

<p align="left">

<h3 align="center">Features:</h3>

<b>Simple authentication system</b>

By using mongoose, passport and express-session the user is able to signup, login and authenticate himself.
<b>The Application won't show any data if the user is not logged in.</b> (assignment rule).

<b>Web scraping system</b>

Through an endpoint it is possible to gather information and data about the page the fetch call is pointing to, (e.g Images, Texts, Links… ).
The response’s data is loaded with the “Cheerio“ Library, then some configuration will map through the Cheerio’s Object and pull out the sorted data.
<b>The Application does not actually needs the scraped data but it was required for the assignment</b> (assignment rule).

<b>Cloning system</b>

By using the useEffect React hook, every time the page renders, the React App will trigger an axios api post request which point to an express route, with a payload which contains the current URL’s path.
The express route on the server will then combine the base Url of the website and the path the user is currently on, and by fetching that result, the response’s data will be the index.html document rendered in that page, the data will be sent to the client and injected in the Html document rendered by React.
In this way the index.html of our React App will ever be the same as the html document of whatever website we are pointing to in the express route fetch request. Endpoint: {server_url}/fetch-html<p>
