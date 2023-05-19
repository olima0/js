const listElement = document.querySelector("#app ul")
const inputElemet = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")
const tarefas = ["Messi", "Copa do Mundo"]

for (const iterator of tarefas) {
    console.log(iterator)
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(iterator)

    tarefaElement.appendChild(tarefaText)
    listElement.appendChild(tarefaElement)
}

