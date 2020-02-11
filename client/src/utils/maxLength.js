export default str => {
    return str.length > 5 ? str.slice(0, 5)+"..." : str
}