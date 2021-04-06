
const iState = {
    reducdata : 'data_from_store',
    initialArray : [22,'aaray']
}





const Reducer = (store = iState, action) => {
    console.log(action, 'actionaaaaaaaaaaaaaaaaaa')
    if(action.type === 'CHANGE_CONTENT') {
        return {
            reducdata : action.payload
        }
    }
    return store
}

export default Reducer