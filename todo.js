// get DOM elements
var submitButton = document.querySelector("#submit");
var textbox = document.querySelector("#text");
var list = document.querySelector("#list-container");

// Declare CLick handlers 
var submit = function() {
  // create elements
  var listItem = document.createElement('li'); // <li></li>
  var deleteBtn = document.createElement('button') // <button></button>
  var editBtn = document.createElement('button') // <button></button>
  var RANDOM_ID = makeid(6) // <li id="makes this ID here"></li> 

  // assemble elements
  listItem.innerHTML = textbox.value; // <li>textbox.value</li>
  listItem.id = RANDOM_ID; // <li>RANDOM_ID</li>
  
  // delete button 
  deleteBtn.innerHTML = 'delete'; // <button>delete</button>
  deleteBtn.dataset.targetItem = RANDOM_ID; // <button data-targetItem={RANDOM_ID}>delete</button>
  deleteBtn.addEventListener('click', function(event) {
    var targetId = event.target.dataset.targetItem // string of RANDOM_ID
    var child = list.querySelector('#' + targetId) // selects the RANDOM_ID of the specific task
    if (child){
      list.removeChild(child)
    }
  })
  
  // edit button
  editBtn.innerHTML = 'edit';

  listItem.appendChild(deleteBtn);// ul>li>textbox.value + deleteBtn
  listItem.appendChild(editBtn);

  // add element to dom
  list.appendChild(listItem);

  // reset textbox value
  textbox.value = "";
}

// delete 
var deleteElement = function() {
  var toBeDeleted = list.querySelector('li')
  console.log(toBeDeleted);
  list.removeChild(toBeDeleted);
}

// add event listiner 
submitButton.addEventListener("click", function(e) {
  submit();
})

// logic for task ID
function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}