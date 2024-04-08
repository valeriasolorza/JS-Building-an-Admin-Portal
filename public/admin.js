
// // Your Code Here
// let response = await fetch('http://localhost:3001/updateBook', {
//     method: "PATCH",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         "id": 3,
//         "title": "Legends of Arathrae"
//     })
// });

// let updateBook = await response.json();
// console.log(updateBook)


async function main() {

    let response = await fetch('http://localhost:3001/listBooks')

    let books = await response.json()

    books.forEach(display)

}

function display(book) {

    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

    let userInput = document.createElement('input')
    userInput.type = 'number'
    userInput.value = book.quantity

    let button = document.createElement('button')
    button.textContent = 'save'

    button.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: userInput.value
            })
        })
    })

    li.append(userInput, button)
    root.append(li)
}

main();