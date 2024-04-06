
// Your Code Here
let response = await fetch('http://localhost:9001/updateBook', {
    method: "PATCH",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        "title": "Legends of Arathrae"
    })
});

if (!response.ok) {
    throw new Error('Failed to update book title');
}

console.log('Book title updated successfully');
