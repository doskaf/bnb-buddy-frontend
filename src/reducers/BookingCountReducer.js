export default function bookingCountReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT': return ++state
        default:
            return state
    }
}