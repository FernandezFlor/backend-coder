

const multiplicar = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => { //tarde un tiempo determinado
            resolve({
                num1,
                num2,
                result: num1 * num2
            })
        }, Math.floor(Math.random()*1000))//tiempo aleatorio
    })
}
multiplicar(1, 2)
    .then(response=> {
        console.log(`${response.num1} * ${response.num2} = ${response.result}`)
        return multiplicar(2,2)
    })
    .then(response=>{
        console.log(`${response.num1} * ${response.num2} = ${response.result}`)
        return multiplicar(3,2)
    })
    .then(response=>{
        console.log(`${response.num1} * ${response.num2} = ${response.result}`)
    })


const par=(x,y)=>{
    return new Promise((resolve,reject)=>{
        if(x%y!=0){
            reject
        }else{
            resolve
        }
    })
}
par(4,2)
    .then(response=>{
        console.log("el resultado es"+response)
    })