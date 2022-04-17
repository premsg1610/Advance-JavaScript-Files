

function myArray(){

    Object.defineProperty(this,"length",{

        value: 0,
        writable : true,
        enumerable: false,
    })

    this.length = arguments.length

    // console.log(arguments)
  
    for(let i=0; i<this.length; i++)
    {
        this[i] = arguments[i]
    }
    
}


let arr = new myArray(1,2,3,4,5)

console.log("arr:",Object.values(arr))




// cretating custom .push() function

myArray.prototype.डालें  = function(data){

    let index = this.length;
    this[index] = data
    this.length++
}

arr.डालें ("prem")
arr.डालें ("swanand")
console.log("arr:",Object.values(arr))




// creating custom .pop() function

myArray.prototype.निकालें  = function (){

    let index = this.length-1;

    delete this[index]
    this.length--
}

arr.निकालें ()
console.log("arr:",Object.values(arr))



// creating custom .top() function

myArray.prototype.ऊपरी_एलिमेंट  = function(){

    let index = this.length - 1;

    console.log(this[index])
}

// arr.myTop()
arr.ऊपरी_एलिमेंट ()



// creating custom .print() function

myArray.prototype.प्रिंट_करें  = function(){

    let newArr = []

    for(let i=0; i<this.length; i++)
    {
        newArr[i] = this[i]
    }
    console.log(newArr)
    
}
arr.प्रिंट_करें  ()




// creating custom .printReverse() function

myArray.prototype.उल्टा_प्रिंट_करें  = function(){

    let newArr = []

    for(let i=this.length-1; i>=0; i--)
    {
        newArr[this.length-1-i] = this[i]
    }
    console.log(newArr)
    
}
arr.उल्टा_प्रिंट_करें ()





// creating custom .size function


myArray.prototype.साइज़  = function(){

    console.log(this.length)
}

arr.साइज़ ()




// console.log(arr.__proto__)