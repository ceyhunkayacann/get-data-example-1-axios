import axios from 'axios';

const getData = async function(userId){
    const { data : user } = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const { data : post } = await axios(`https://jsonplaceholder.typicode.com/posts?id=${userId}`)

    const arr = {user, "posts" : post}
    console.log(arr)
}

export default getData ;