const get = async () => {
    const res = await fetch('https://reqres.in/api/users/3', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "first_name": "интукод" })
    })
    const post = await res.json()
    console.log(post);
}
get()