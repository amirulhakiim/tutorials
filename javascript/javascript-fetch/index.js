/**
 * ref: https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28
 * In Web API's, the CRUD (Create Read Update Delete)
 * is distributed into 5 main keywords
 * POST GET PUT PATCH DELETE
 */

// GET retrieve all to-do's
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(json => console.log(json))
// will return all the resources

// GET specific URI (id = 5)
fetch('https://jsonplaceholder.typicode.com/todos/5')
.then(response => response.json())
.then(json => console.log(json))

// POST adds a random id to the object sent
fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        userId: 1,
        title: "clean room",
        completed: false
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))


// PUT method updates the server with a new existing body
fetch('https://jsonplaceholder.typicode.com/todos/5', {
    method: 'PUT',
    body: JSON.stringify({
        userId: 1,
        title: "Hello task",
        completed: true
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))

// PATCH is similar to PUT but only updates certain parts of body
fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'PATCH',
    body: JSON.stringify({
        completed: false
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())
.then(json => console.log(json))


// DELETE request
fetch('https://jsonplaceholder.typicode.com/todos/201', {
    method: 'DELETE'
})

