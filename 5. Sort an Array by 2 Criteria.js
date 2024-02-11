function sortAnArrayBy2Criteria(arr) {
    let newArr = arr.sort();
    let secondArr = newArr.sort((a, b) => a.length - b.length);
    for (const iterator of secondArr) {
        console.log(iterator);
    }


    console.log();
}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
//sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);
