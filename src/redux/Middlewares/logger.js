export default (store) => (next) => (action) => {
    console.log('---', action.type)
    next(action)
}