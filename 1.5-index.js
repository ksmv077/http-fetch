
const get5 = async () => {
    const res = await fetch('https://reqres.in/api/users/1')
    const post = await res.json()
    console.log(post.data.email);
}
get5()