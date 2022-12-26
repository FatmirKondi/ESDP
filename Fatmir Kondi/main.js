
const list= []
const inputEl = document.getElementById("name")
const userList = document.getElementById("userList")
const typeEl = document.getElementById("type")
const submitBtn = document.getElementById("btn")
const searchEl = document.getElementById("search")

submitBtn.addEventListener("click", addUser);
searchEl.addEventListener("input", search);
userList.addEventListener("click", removeUser);

function addUser() {

  const name = inputEl.value

  if (!name || name.length < 2) return;
  const type = typeEl.value
  list.push({name, type, id: crypto.randomUUID()})
  displayList(list);
  inputEl.value = "";
}

function search() {

  const el = document.getElementById("search")
  const value = el.value?.toLowerCase();
  const filtered = list.filter(i => i.name.toLowerCase().includes(value));
  displayList(filtered);
}

function displayList(list) {
  let html = "";
  for (const item of list) {
    html += `
      <li class="item">
        <div class="item_img"></div>
        <div>
          <h4 class="item_name">${item.name}</h4>
          <h5 class="item_type">${item.type}</h5>
        </div>
        <span class="del" data-id="${item.id}">X</span>
      </li>`;
  }
  userList.innerHTML = html
}

function removeUser(e) {

  const el = e.target.closest(".del");
  if (!el) return;
  const {id} = el.dataset
  const index = list.findIndex(item => item.id === id) ;
  if (index === -1) return;
  console.log(index)
  list.splice(index, 1);
  search();
}
