const data = fetch('https://popovsky.github.io/dataFromPrivatBank/data.json');
data
    .then(res => res.json())
    .then(res => {
        console.log('responce', res.arr);
    })
    .catch(error => {console.log('error', error)});

// console.log('devices SYNC', devices);