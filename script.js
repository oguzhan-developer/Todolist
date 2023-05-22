btnSubmit = document.querySelector("#navbar #btnSubmit")
alertArea = document.querySelector("#alert_area")
textArea = document.querySelector("#navbar #input")
list = document.querySelector("#list")

btnSubmit.addEventListener("click", () =>{
    textArea.value.length > 3 ? addItem(textArea.value) : alert("Hey, bugün neler yapacaksın? Not almak istediklerini gir :)") 
})

function addItem(text){
    textArea.value = ""
    let span = document.createElement("span")
    span.innerHTML = "X"

    let li = document.createElement("li")
    li.innerHTML = `${text}`
    li.classList = "list-group-item"

    li.appendChild(span)
    list.appendChild(li)
    addItemEvent(li)
    addItemCloseEvent(span)
}

function addItemEvent(item){
    item.addEventListener("click",()=>{
        if(item.style.textDecoration == "none")
        {
            item.style.textDecoration = "line-through"
            item.style.backgroundColor = "#1B9C85"
        }
        else
        {
            item.style.textDecoration = "none"
            item.style.backgroundColor = "#F0F0F0"
        }
    })
}

function addItemCloseEvent(item){
    item.addEventListener("click",()=>{
        item.parentElement.style.opacity = 0
        setTimeout(()=>item.parentElement.style.display = "none", 250)
    })
}