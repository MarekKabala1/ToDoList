ToDo = () => {
  const toDoText = document.querySelector(".toDoText");
  const toDoBtn = document.querySelector(".toDoBtn");
  const toDoList = document.querySelector(".toDo-List");
  const deleteBtn = document.querySelector(".delBtn");

  toDoBtn.addEventListener("click", addToDo);
  toDoList.addEventListener("click", delCheck);

  function addToDo(e) {
    e.preventDefault();

    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo");

    //create li
    const newToDo = document.createElement("li");
    newToDo.innerText = toDoText.value;
    newToDo.classList.add("li-text");
    toDoDiv.appendChild(newToDo);

    //check
    const comBtn = document.createElement("button");
    comBtn.innerHTML = ` <i class="far fa-check-square check"></i>`;
    comBtn.classList.add("comBtn");
    toDoDiv.appendChild(comBtn);

    const delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="far fa-trash-alt delete"></i>';
    delBtn.classList.add("delBtn");
    toDoDiv.appendChild(delBtn);

    //append to do
    toDoList.appendChild(toDoDiv);

    //Clear Input
    toDoText.value = "";
  }

  function delCheck(e) {
    const item = e.target;
    if (item.classList[0] === "delBtn") {
      const toDo = item.parentElement;
      toDo.classList.add("del");
      toDo.addEventListener("transitionend", function () {
        toDo.remove();
      });
    }
    if (item.classList[0] === "comBtn") {
      const toDo = item.parentElement;
      toDo.classList.toggle("green");
    }
  }
};
ToDo();
