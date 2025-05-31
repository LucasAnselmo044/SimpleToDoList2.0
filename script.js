var input = document.getElementById("input");
var botaoAdd = document.getElementById("botaoAdd");
var botaoRmv = document.getElementById("botaoRmv");
var ul = document.createElement("ul");
document.body.appendChild(ul);

botaoAdd.addEventListener("click", function () {
  if (input.value !== "") {
    const tarefa = document.getElementById("input").value;
    var li = document.createElement("li");
    li.textContent = tarefa;
    ul.appendChild(li);

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "❌";
    botaoRemover.addEventListener("click", function () {
      ul.removeChild(li);
    });
    li.appendChild(botaoRemover);
  } else {
    alert("Por favor, digite uma tarefa.");
  }
});

botaoRmv.addEventListener("click", function () {
  ul.innerHTML = "";
});
