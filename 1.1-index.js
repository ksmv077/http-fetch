const get = async () => {
    const res = await fetch('https://reqres.in/api/users')
    const post = await res.json()
     console.log(post);
}
 get()


