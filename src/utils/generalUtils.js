const cleanString = function(string) {
    return string.replace(/ /g,"_").toLowerCase();
}

export { cleanString };