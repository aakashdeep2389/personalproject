// export const _ChangeNameAction = (con) => {
//     return{
//         type: 'CHANGE_CONTENT', 
//         payload : con
//     }
// }


export const _ChangeNameAction = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        // console.log(res, 'resresres')
        .then(deta => {
            
            dispatch({
                type: 'CHANGE_CONTENT', 
                payload : deta[0].email
            }) 
        })
    }
}