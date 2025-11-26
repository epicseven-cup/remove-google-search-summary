const searchElement = document.getElementsByClassName("YNk70c EjQTId") ?? []
console.log(`Search Element found: ${searchElement.length}`)
for (const e of searchElement) {
    console.log(e.innerHTML)
    if (!e.innerHTML.includes("Did you mean:")){
        e.innerHTML = ""
        console.log("Remove elment call")
    }
}