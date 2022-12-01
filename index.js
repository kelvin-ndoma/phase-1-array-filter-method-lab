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

function fuzzyMatch(drivers, match){
    const matchLength = match.split('').length;
    const filteredDrivers = drivers.filter((element) => {
      const elementSlice = element.split('').slice(0, matchLength).join('');
        if( elementSlice === match){
            return element;
        }
    })
    return filteredDrivers;
}
function matchName(drivers, match){
    const filteredDrivers = drivers.filter((element) => {
        if(element.name === match){
            return element;
        }
    })
    return filteredDrivers;
}