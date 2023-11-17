fetch('https://reqres.in/api/users/5', {
    method: 'delete'
}).then((res) => {
    if(res.status == 204){
        console.log("пользователь с id 5 успешно удален");
    }
})
