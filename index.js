let addForm = document.getElementById("addForm");
let itemList = document.getElementById("items");

addForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);

function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById("item").value;

  // create li element
  let li = document.createElement("li");

  // add classes to the li element
  li.className = "list-group-item";

  // add the new item to the li element.
  li.appendChild(document.createTextNode(newItem));

  // create del button
  let delbtn = document.createElement("button");

  delbtn.className = "btn btn-danger btn-sm float-right delete";
  delbtn.appendChild(document.createTextNode("X"));

  li.appendChild(delbtn);

  //create Edit button
  let editbtn = document.createElement("button");

  editbtn.className = "btn btn-dark btn-sm float-right mr-2";
  editbtn.appendChild(document.createTextNode("Edit"));

  li.appendChild(editbtn);

  // add the li to the list.
  itemList.appendChild(li);

  document.getElementById("item").value = "";
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
