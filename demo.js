  Closer example
function sum (a) {
    var c = 5;
    console.log("My age is " + a);
    return function (b) {
        return a+b+c;
    };
};

var data=sum(8);
console.log(data(10));


    Callback example
const data=[
    {name: 'Ritik', age: 25},
    {name: 'Ayush', age: 27}
];

 getData=()=>{
    setTimeout(() => {
        let output= '';
        data.forEach((data, index)=>{
         output+= `<li>My name is ${data.name} and my age is ${data.age}</li>`;
        });
        document.body.innerHTML=output;
    }, 1000);
}

createData=(newData, callback)=>{
   setTimeout(() => {
    data.push(newData);
    callback();
   }, 2000);
}

createData(  {name: 'Himanshu', age: 26},getData)


  Promise example
const data=[
    {name: 'Ritik', age: 25},
    {name: 'Ayush', age: 27}
];

 getData=()=>{
    setTimeout(() => {
        let output= '';
        data.forEach((data, index)=>{
         output+= `<li>My name is ${data.name} and my age is ${data.age}</li>`;
        });
        document.body.innerHTML=output;
    }, 1000);
}

createData=(newData)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            data.push(newData);
            let error=false;
            if(!error){
                resolve();
            }
            else{   
                reject("fault");
            }
           }, 2000);
    })

}

createData({name: 'Himanshu', age: 26}).then(getData).catch((err)=>console.log(err))



 async await example
const data=[
    {name: 'Ritik', age: 25},
    {name: 'Ayush', age: 27}
];

 getData=()=>{
    setTimeout(() => {
        let output= '';
        data.forEach((data, index)=>{
         output+= `<li>My name is ${data.name} and my age is ${data.age}</li>`;
        });
        document.body.innerHTML=output;
    }, 1000);
}

createData=(newData)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            data.push(newData);
            let error=false;
            if(!error){
                resolve();
            }
            else{   
                reject("fault");
            }
           }, 2000);
    })

}

 start=async()=>{
   await createData({name: 'Himanshu', age: 26});
   getData();
}

start();
















