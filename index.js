let addForm = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

addForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
filter.addEventListener("keyup", filterItem);

function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById("item").value;
  let desc = document.getElementById("desc").value
    ? document.getElementById("desc").value
    : "No Desc";

  // create li element
  let li = document.createElement("li");

  // add classes to the li element
  li.className = "list-group-item";

  // add the new item to the li element.
  li.appendChild(document.createTextNode(newItem));
  let newDesc = document.createElement("p");
  newDesc.style.display = "block";
  newDesc.style.fontStyle = "italic";
  newDesc.style.marginLeft = "10px";
  newDesc.appendChild(document.createTextNode(desc));
  li.appendChild(newDesc);

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
  document.getElementById("desc").value = "";
}

function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

function filterItem(e) {
  let text = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName("li");

  Array.from(items).forEach((item) => {
    let itemName = item.firstChild.textContent;
    let detail = item.children[0].textContent;
    if (
      itemName.toLowerCase().indexOf(text) != -1 ||
      (detail.trim() !== "No Desc" && detail.toLowerCase().indexOf(text) != -1)
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
