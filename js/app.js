const data = fetch('https://popovsky.github.io/dataFromPrivatBank/data.json');
data
    .then(res => res.json())
    .then(res => {
        let arr = getUniqTags(res.devices.map(el => el.placeRu));
        let obj = new Object();
        let arrOfObj = [];
        arr.forEach(el => {
            arrOfObj = [];
            res.devices.forEach(e => el === e.placeRu ? arrOfObj.push(e) : null);
            obj[el] = arrOfObj;
        });
        console.log(obj);
    })
    .catch(error => {console.log('error', error)});

const getUniqTags = tags => {
    let results = [];
    tags.forEach(value => {
        value = value.trim();
        results.indexOf(value) === -1 ? results.push(value) : null;
    });
    return results;
};
