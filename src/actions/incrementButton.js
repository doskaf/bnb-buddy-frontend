export function incrementButton() {
    return (dispatch) => {
        dispatch({type: 'INCREMENT'})
    }
}