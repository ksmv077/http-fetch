const get4 = async () => {
    const res = await fetch('https://reqres.in/api/users')
    const post = await res.json()
    console.log(post.data.length);
}