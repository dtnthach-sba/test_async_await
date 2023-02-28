// PROMISE

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
}

const currentPromise = new Promise((ressolve, reject) => {
    httpGetAsync('https://picsum.photos/400/600', ressolve);
});

const promise2 = new Promise((ressolve, reject) => {
    httpGetAsync('https://picsum.photos/400/600', ressolve);
});

const promise3 = new Promise((ressolve, reject) => {
    httpGetAsync('https://picsum.photos/400/600', ressolve);
});

const excuteAsync = async () => {
    try {
        const response = await currentPromise;
        //console.log({response});
        document.getElementById('img_1').setAttribute('src', response.responseURL);

        const response2 = await promise2;
        document.getElementById('img_2').setAttribute('src', response2.responseURL);

        const response3 = await promise3;
        document.getElementById('img_3').setAttribute('src', response3.responseURL);
    } catch (err) {
        console.log(err);
    }

}

excuteAsync();

// currentPromise
//     .then((data) => {
//         console.log(data);
//         document.getElementById('img_1').setAttribute('src', data.responseURL);
//         console.log('1');
//         return promise2;
//     })
//     .then((data)=>{
//         document.getElementById('img_2').setAttribute('src', data.responseURL);
//         console.log('2');
//         return promise3;
//     })
//     .then((data)=>{
//         document.getElementById('img_3').setAttribute('src', data.responseURL);
//         console.log('3');
//     })
//     .catch(err => {
//         console.log(err)
//     });


// const currentPromise = new Promise((ressolve, reject) => {
//     let condition = true;

//     if (condition) {
//         setTimeout(()=>{
//             ressolve('Success 123');
//         }, 3000)
//     }else{
//         reject('Error');
//     }
// });

// currentPromise.then((data)=>{
//     console.log(data);
// }).catch(err=>{
//     console.log(err)
// });


// function test() {
//     setTimeout(() => console.log('1'), 0);
//     console.log('2');
//     console.log('3');
// }

// function httpGetAsync(theUrl, callback) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);
//     };
//     xmlHttp.open("GET", theUrl, true);
//     xmlHttp.send(null);
// }

// httpGetAsync('https://picsum.photos/200/300', (data) => {
//     console.log(data);
//     document.getElementById('img_1').setAttribute('src', data.responseURL);

//     httpGetAsync('https://picsum.photos/200/300', (data) => {
//         document.getElementById('img_2').setAttribute('src', data.responseURL);

//         httpGetAsync('https://picsum.photos/200/300', (data) => {
//             document.getElementById('img_3').setAttribute('src', data.responseURL);
//         });
//     });

// });

// test();