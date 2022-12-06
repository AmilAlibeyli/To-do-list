const btn = document.querySelector(".btn")
const item = document.getElementById("item")
const mainİtem = document.getElementsByClassName("item-add item")
const list = document.querySelector('.list')
const sortBtn = document.querySelector('.sort-icon img')

// let arr = []

btn.addEventListener("click", (e) => {
    e.preventDefault()
    li = document.createElement('li')
    list.append(li)
    span = document.createElement('span')
    li.append(span)
    // arr.push(item.value)
    span.textContent = (item.value)
    deleteBtn = document.createElement('img')
    deleteBtn.src = "./img/delete.svg"
    deleteBtn.alt = 'deleteBtn'
    li.append(deleteBtn)

    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove()
    })
})
let sorted = true
sortBtn.addEventListener("click", () => {
    let arr = []
    const listElements = document.querySelectorAll('.list li')
    listElements.forEach(item => {
        arr.push(item.firstChild.textContent)
    })
    if (sorted) {
        arr.sort();
        sorted = false
        listElements.forEach((item, index) => {
            item.firstChild.innerText = arr[index]
        })
    }

    else if (!sorted) {
        arr.reverse();
        listElements.forEach((item, index) => {
            item.firstChild.innerText = arr[index];
        })

    }
})

