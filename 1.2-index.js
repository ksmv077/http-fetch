const get2 = async () => {
    try {
        const res = await fetch('https://this-site-doesnt-exists.intocode')
        const post = await res.json()
    } catch (error) {
        console.log(error.message);
    }

}
get2()




