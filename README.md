To get project up and running in Docker / NGinX
...............................................


// set currect path - relative to nginx root and index.html being served by nginx server
// e.g.
// /Users/user/code/hello
// /Users/user/code/hello/assets/asnis.json

- In /src/app/services/asnis-service/asnis.service.ts - set fetchData()

http.get('/assets/asnis.json')



// ng build --prod puts the dist build files into this directory
// docker / nginx / server uses this directory to serve the site up

- In .angular-cli.json

"outDir":"path_to_directory_for_build_files"

e.g.: "outDir":"/Users/user/code/hello",



// make a dist build - In terminal:
// produces the site that will be served up from the angular project and places it inside the outDir

ng build --prod



// run nginx container and map directory in host to container web directory in nginx
// -v upto : matches the value set in .angular-cli.json - "outDir"

docker run -d -p 80:80 -v /Users/user/code/hello:/usr/share/nginx/html \



// at the > prompt

--name web nginx


// in browser

http://localhost
