function step1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('selected');
            resolve('photo uploaded')
        }, 4000);
    })
}

function step2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('filtered');
            resolve('filteredddd')
        }, 4000);
    })
}

function step3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('caption');
            resolve('captionnnnnn')
        }, 4000);
    })
}

function step4(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log('post');
            resolve('postttt')
        }, 4000);
    })
}



//async-await


// async function callAllFn(){
//     await step1()
//     await step2()
//     await step3()
//     await step4()
// }

// callAllFn()




//promise
step1().then((selectImage)=>{
    console.log(selectImage);
    return step2()
}).then((filterImage)=>{
    console.log(filterImage);
    return step3()
}).then((caption)=>{
    console.log(caption);
    return step4()

}).then((post)=>{
    console.log(post);
})