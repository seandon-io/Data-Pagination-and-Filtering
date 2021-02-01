/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

//Constant variable of 9 items per page
const itemsPerPage = 9;
// select the element with a class of `student-list` and assign it to a variable
let studentList = document.querySelector('.student-list');

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
	// create two variables which will represent the index for the first and last student on the page
	let startIndex = page * itemsPerPage - itemsPerPage;
	let endIndex = page * itemsPerPage;
	// set the innerHTML property of the variable you just created to an empty string
	studentList.innerHTML = '';
	// loop over the length of the `list` parameter
	for (let i = 0; i < list.length; i++) {
		// inside the loop create a conditional to display the proper students
		// inside the conditional:
		if (i >= startIndex && i < endIndex) {
			// create the elements needed to display the student information
			studentList.innerHTML += `
        <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
            <h3>${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
          </div>
          <div class="joined-details">
            <span class="date">${list[i].registered.date}</span>
          </div>
        </li>`;
		}
	}
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
	// create a variable to calculate the number of pages needed
	let numOfPages = list.length / itemsPerPage;
	// select the element with a class of `link-list` and assign it to a variable
	let linkList = document.querySelector('.link-list');
	// set the innerHTML property of the variable you just created to an empty string
	linkList.innerHTML = '';
	// loop over the number of pages needed
	for (let i = 0; i < numOfPages; i++) {
		// create the elements needed to display the pagination button
		linkList.innerHTML += `
    <li>
      <button type="button">${i + 1}</button>
    </li>
    `;
	}

	// give the first pagination button a class of "active"
	let pageBtns = linkList.querySelectorAll('BUTTON');
	if (pageBtns.length > 0) {
		pageBtns[0].classList.add('active');
	}
	// create an event listener on the `link-list` element
	linkList.addEventListener('click', (e) => {
		// if the click target is a button:
		if (e.target.tagName === 'BUTTON') {
			for (let i = 0; i < pageBtns.length; i++) {
				// remove the "active" class from the previous button
				pageBtns[i].classList = '';
				// add the active class to the clicked button
				e.target.classList.add('active');
				// call the showPage function passing the `list` parameter and page to display as arguments
				let pageNum = e.target.textContent;
				showPage(list, pageNum);
			}
		}
	});
}

showPage(data, 1);
addPagination(data);
