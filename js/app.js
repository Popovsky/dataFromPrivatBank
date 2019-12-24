const data = fetch('https://zloyleva-imt.github.io/lesson_08/data.json');
data
    .then(res => res.json())
    .then(res => {
        console.log('responce', res);
        console.log('devices ASYNC', res.devices);
    })
    .catch(error => {console.log('error', error)});

// console.log('devices SYNC', devices);