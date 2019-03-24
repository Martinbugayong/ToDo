// get DOM elements
var submitButton = document.querySelector("#submit");
var textbox = document.querySelector("#text");
var list = document.querySelector("#list-container");

// Declare CLick handlers 

/**
* @visualize
* <li>
*   some list item
*   <button>delete</button>
*   <button>edit</button>
* </li>
*/

var submit = function() {
  // create elements
  var listItem = document.createElement('li'); // <li></li>
  var deleteBtn = document.createElement('button') // <button></button>
  var editBtn = document.createElement('button')

  var RANDOM_ID = makeid(6)

  // assemble elements
  listItem.innerHTML = textbox.value; // <li>textbox.value</li>
  listItem.id = RANDOM_ID;

  deleteBtn.innerHTML = 'delete'; // <button>delete</button>
  deleteBtn.dataset.targetItem = RANDOM_ID; // <button data-targetItem={RANDOM_ID}>delete</button>
  deleteBtn.addEventListener('click', function(event) {
                        // dataset = data-
                        // targetItem = target-item
                        // dataset.targetItem = data-target-item
                        // button.data-.data-target-item
    var targetId = event.target.dataset.targetItem // string of RANDOM_ID
    var child = list.querySelector('#' + targetId)
    if (child){
      list.removeChild(child)
    }
  })
  
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
// above code adopted from 
// function removeElement(node) {
//   node.parentNode.removeChild(node);
// }



// add event listiner 
submitButton.addEventListener("click", function(e) {
  submit();
})


function makeid(length) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}