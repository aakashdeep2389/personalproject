

// const iState = {
//     name : 'ram',
//     wishes : ['eat', 'code']
// }

// import { act } from "react-dom/test-utils"

// const Reducer = (state = iState, action) => {
//     if(action.type === 'CHANGE_NAME'){
//         return {
//             ...state,
//             name: action.payload 
//         }
//     }
//     return state
// }

// export default Reducer


// const initailState = {
//     username : 'aakashdeep2389'
// }

// const reducer = (state = initailState ,action) => {
//     if(action.type === 'CHANGE_USERNAME' ){
//         return{
//             username : action.payload
//         }
//     }
//     return state
// }

// export default reducer



const istate = {
    name : 'lkashdiahdlkasd',
    // table : [
    //     {id: 102, name: 'risav' , index : 0},
    //     {id: 102, name: 'aakash' , index : 1},
    //     {id: 103, name: 'bantu' , index : 2}
    // ]
}


const Reducer = (value = istate,action) => {
    if(action.type === 'CHANGENAME'){
        return {
            name:action.payload,
        }
    }
    return value
}


export default Reducer