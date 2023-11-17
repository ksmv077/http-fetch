const get3 = async () => {
    const res = await fetch('https://reqres.in/api/users')
    const post = await res.json()
    console.log(typeof post);
}
get3()