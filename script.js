const DOM_BTN_SUBMIT = document.querySelector("#navbar #btnSubmit")
const DOM_INPUT = document.querySelector("#input")
const DOM_TEXTAREA = document.querySelector("#navbar #input")
const DOM_LIST = document.querySelector("#list")
let items = []
DOM_BTN_SUBMIT.addEventListener("click", () =>{
    DOM_TEXTAREA.value.length > 3 ? addItem(DOM_TEXTAREA.value) : alert("Hey, bugün neler yapacaksın? Not almak istediklerini gir :)") 
})
InitItem()

function addItem(text){
    DOM_TEXTAREA.value = ""
    addItemToList(text)
    let span = document.createElement("span")
    span.innerHTML = "X"

    let li = document.createElement("li")
    li.innerHTML = `${text}`
    li.classList = "list-group-item"

    li.appendChild(span)
    DOM_LIST.appendChild(li)
    addItemEvent(li)
    addItemCloseEvent(span)
}

function addItemEvent(item){
    item.addEventListener("click",()=>{
        if(item.style.textDecoration == "")
        {
            item.style.textDecoration = "line-through"
            item.style.backgroundColor = "#1B9C85"
        }
        else
        {
            item.style.textDecoration = ""
            item.style.backgroundColor = ""
        }
    })
}

function addItemCloseEvent(item){
    item.addEventListener("click",()=>{
        removeItemToList(item)
        item.parentElement.style.opacity = 0
        setTimeout(()=>item.parentElement.style.display = "none", 250)
    })
}

function getItemValue(text){
    return text.slice(0,text.search("<span>"))
}

function removeItemToList(item) {
    let text = getItemValue(item.parentElement.innerHTML)
    items.splice( items.indexOf(text), 1)
    localStorage.setItem("items",items)
}
function addItemToList(text) {
    items.push(text)
    localStorage.removeItem("items")
    localStorage.setItem("items",items)
}

function InitItem(){
    if(localStorage.getItem("items"))
    {

        localStorage.getItem("items").split(",").forEach(item =>{
            addItem(item)
        })
    }

}