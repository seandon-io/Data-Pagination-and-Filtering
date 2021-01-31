/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const itemsPerPage = 9;
//showPage Function
function showPage(list, page) {
	// create two variables which will represent the index for the first and last student on the page

	let startIndex = page * itemsPerPage - itemsPerPage;
	let endIndex = page * itemsPerPage;
	// select the element with a class of `student-list` and assign it to a variable
	let studentList = document.querySelector('.student-list');
	// set the innerHTML property of the variable you just created to an empty string
	studentList = '';
	// loop over the length of the `list` parameter
	for (let i = 0; i < list.length; i++) {
		// inside the loop create a conditional to display the proper students
		if (i >= startIndex && i < endIndex) {
			// inside the conditional:
		}
	}
	// create the elements needed to display the student information
	// insert the above elements
}
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

// Call functions
