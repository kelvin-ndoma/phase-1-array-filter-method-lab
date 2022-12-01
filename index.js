// Code your solution here
// //* `findMatching`- This function takes an array of drivers' names and a `string`
// as arguments, and returns the matching list of drivers. The function should be
// case insensitive.
function findMatching(driversname, match){
    const filteredDriversname = driversname.filter((element) => {
        if (element.toLowerCase() === match.toLowerCase()){
            return element;
        }
    })
    return filteredDriversname;
}
// * `fuzzyMatch` - This function takes an array of drivers' names and a `string`
//   as arguments for querying the array, and returns all drivers whose names begin
//   with the provided letters
//split('') here it selects  drivers whose names have the specified letters
//join('')does return an array as a string
//.slice(o, matchLength) focuses of the a slice of a strings,extracts it and returns it as a new string
function fuzzyMatch(drivers, match){
    const matchLength = match.split('').length;
    const filteredDrivers = drivers.filter((element) => {
      const elementSlice = element.split('').slice(0, matchLength).join('');
        if( elementSlice === match){
            return element;
        }
    })
    return filteredDrivers;
//     * `matchName` - This function takes an array of `driver` objects and a `string`
//   as arguments. Each `driver` object has two properties: `name` and `hometown`.
//   The function should return each element whose `name` property matches the
//   provided `string` argument.
}
function matchName(drivers, match){
    const filteredDrivers = drivers.filter((element) => {
        if(element.name === match){
            return element;
        }
    })
    return filteredDrivers;
}