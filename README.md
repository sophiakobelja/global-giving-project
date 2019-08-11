
### Run Program

#### To run using Docker (recommended):
If you don't have Docker installed:
[https://docs.docker.com/get-started/](https://docs.docker.com/get-started/)

    cd global-giving-project
    docker build -t global-giving-project:dev .
    docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm 
    global-giving-project:dev
    
Navigate http://localhost:3001

#### To run using npm:

    cd global-giving-project
    npm install
    npm run dev

Navigate to http://localhost:3000

### Implementation Discussion:

For this programming task, I decided to take an "Apartments.com" approach--display a map view of the data and map it to a list view on the side. 
#### Technologies Used:
   - React (Language/Javascript framework to build application)
   - Redux (State container to streamline asynchronous requests/actions)
   - Axios (Data fetching)
   - Material UI (UI component library)
   - react-simple-maps (Interactable map view)


#### Work-Flow:

 - Upon **page load**, fetch at least 50 projects  	
	 - (The program is only looking for a minimum of 50 projects, where the latitude and longitude are defined per project) 
 - **Display projects** 	
	   - Mark project coordinates on map view 	
	   - Display projects in list view Display "Load More" button at bottom of list view 	
		   - On click, the program will fetch and display 10 more projects (given their latitude and longitude are defined)
	-  **On click project:**
		- Zoom and center map to project coordinates
		- Change map project marker color to red
		- Display project in list view
		- **Project information:**
			- Project title
			- Image
			- Country
			- Goal
			- Funding
 - **On click country:**
	 - Zoom and center map to country coordinates
	 - Fetch projects by country 
		 - Display projects by country in list view 
		 - Display projects by country in map view 
	- On click "Load More" button:
		- Program will fetch and display 10 more projects (given their latitude and longitude are defined) for the currently viewed country 
		
**Additional features:**
 - Zoom in (Zooms in at a scale of 1.5) 	
 - Zoom out (Zooms out at a scale of .75) 	
 - Reset (Resets map to default zoom/center) 	
 - Pan to drag (This  is built into react-simple-maps)

**Quick discussion:**
	react-simple-maps country nodes do not carry two-letter country codes (as necessary for API requests)--they do, however, denote three-letter country codes
	*My workaround*: I found a json file online with country latitude/longitude, three-letter country codes, and two-letter country codes. I use this json file to map three-letter country codes to two-letter for use in querying the API 

#### Program Structure:

```
**Entry Point:** pages/index.json
Page container: pages/GlobalGivingMap.json
Map container: pages/MapView.json
List view container: pages/ListView.json
Projects component: pages/Projects.json
Project component: pages/Project.json

**Redux logic:**
 - actions.js  
 - configureStore.js 
 - reducers.js

API configuration for data fetching: utils/API.js

Static country and map json files: 
 - world-50m.json (Topo json file
   used in react-simple-maps component) 
 - countries.json (I found this online)
	 - country name
	 - three-letter code
	 - two-letter code
	 - latitude 		
	 - longitude
	 - Link: [https://raw.githubusercontent.com/eesur/country-codes-lat-long/master/country-codes-lat-long-alpha3.json](https://raw.githubusercontent.com/eesur/country-codes-lat-long/master/country-codes-lat-long-alpha3.json)

```

### Next Version:

 - Display country labels on map  	
 - More filtering options in list view, such as:  		
	 - Dropdown menu of all countries 		
	 - Search bar (search by country, project, etc.) 	
- Display more project information
- Scaling of map project marker icons  		
	- As map scales, so should the size of the icons  	
- Styling 		
	- Country colors indicate how many projects are in that country 		
	- Project listings should look prettier
- Zoom 		
	- Allow pinch-to-zoom and/or mousewheel-to-zoom in map 
- Load More 		
	- Instead of button, implement infinite scroll list where upon reaching the bottom of the list, the program automatically loads more projects 	
- Cache	 		
	- Utilize cache to save currently loaded projects so that project view is maintained even upon page reload and also improve performance 

