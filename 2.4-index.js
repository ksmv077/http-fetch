const param = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ "name": "into", "suname": "code"})
}


const get = async () => {
    const res = await fetch('https://reqres.in/api/users', param) 
    const post = await res.json()
    console.log(post.createdAt, post.id);
}
get()
