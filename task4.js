//question1
const convertFahrToCelsius = (p) => {
    let valueType = typeof p
    const resp = JSON.stringify(p)
    if (Array.isArray(p)) {
        console.log(`${resp} is not a valid number but a/an array`)
        return `${resp} is not a valid number but a/an array`
    }
    if (isNaN(p) || p === null || parseInt(p) != p) {
        console.log(`${resp} is not a valid number but a/an ${valueType}`)
        return `${resp} is not a valid number but a/an ${valueType}`
    } else {
        let fToC = (p - 32) / 1.8;
        let result = `${fToC.toFixed(4)}`
        console.log(result);
        return result;
    }
}
convertFahrToCelsius(0);
convertFahrToCelsius('0');
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius({ temp: 0 });


//qestion2
const checkYuGiOh = (n) => {
    let arr = [];
    let res = JSON.stringify(n);
    if (isNaN(n) || n === null || !parseInt(n)) {
        console.log(`invalid parameter: ${res}`);
        return `invalid parameter: ${res}`;
    } else {
        for (let i = 1; i <= n; i++) {
            if (n === 1) {
                return 1
            } else {
                if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
                    arr.push("yu-gi-oh")
                } else if (i % 2 === 0 && i % 3 === 0) {
                    arr.push("yu-gi")
                } else if (i % 2 === 0 && i % 5 === 0) {
                    arr.push("yu-oh")
                } else if (i % 3 === 0 && i % 5 === 0) {
                    arr.push("gi-oh")
                } else if (i % 2 === 0) {
                    arr.push("yu")
                } else if (i % 3 === 0) {
                    arr.push("gi")
                } else if (i % 5 === 0) {
                    arr.push("oh")
                } else {
                    arr.push(i)
                }
            }

        }
        console.log(arr);
        return arr;
    }
}

checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuss is meh");
