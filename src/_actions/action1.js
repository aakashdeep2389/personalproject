// const action1 = (name) => {
//     return {
//         type: 'CHANGENAME',
//         payload: name,
//     }
// }


const action1 = () => {
    return (dispatch) => {
        let _URL = 'https://jsonplaceholder.typicode.com/users'
        fetch(_URL).then(
            res => res.json()
        ).then( data => dispatch(
                {
                    type: 'CHANGENAME',
                    payload: data[0].email,
                }
            )
            
            )

    }
}

export { action1 }