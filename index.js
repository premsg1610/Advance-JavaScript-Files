
// myArray -> अपनी_अरे
// arr -> अरे
// index -> स्थान 
// data -> सूचना
// bag -> बैग


// custom constructor function 

function अपनी_अरे(){

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

// creating array

let अरे = new अपनी_अरे(1,2,3,4,5)

console.log("अरे:",Object.values(अरे))




// cretating custom .push() function -> to add an element at the end

अपनी_अरे.prototype.डालें  = function(सूचना){

    let स्थान = this.length;
    this[स्थान] = सूचना
    this.length++
}

अरे.डालें ("प्रेम")
अरे.डालें ("विद्या")
अरे.डालें ("स्वानंद")

console.log("अरे:",Object.values(अरे))




// creating custom .pop() function -> to remove the element at the last index

अपनी_अरे.prototype.निकालें  = function (){

    let स्थान = this.length-1;
    delete this[स्थान]
    this.length--
}

अरे.निकालें ()
console.log("अरे:",Object.values(अरे))



// creating custom .top() function -> returns the element at the last index

अपनी_अरे.prototype.ऊपरी_तत्व = function(){

    let स्थान = this.length - 1;

    return this[स्थान]
}

console.log(अरे.ऊपरी_तत्व())



// creating custom .print() function -> print the elements of an array in a single line

अपनी_अरे.prototype.प्रिंट_करें  = function(){

    let बैग = ""

    for(let i=0; i<this.length; i++)
    {
        बैग += this[i] + " "
    }
    console.log("बैग: ",बैग)
    
}
अरे.प्रिंट_करें ()




// creating custom .printReverse() function -> to print the elements of an array in reverse order in a single line

अपनी_अरे.prototype.उलटा_प्रिंट_करें = function(){

    let बैग = ""

    for(let i=this.length-1; i>=0; i--)
    {
        बैग += this[i] + " "
    }
    console.log("बैग: ",बैग)
    
}
अरे.उलटा_प्रिंट_करें ()




//  to print the array in reverse order

अपनी_अरे.prototype.उलटा_अरे_प्रिंट_करें  = function(){

    let नया_अरे = []

    for(let i=this.length-1; i>=0; i--)
    {
        नया_अरे [this.length-1-i] = this[i]
    }
    console.log(नया_अरे )
    
}
अरे.उलटा_अरे_प्रिंट_करें ()



// creating custom .size function -> returns the length of the array


अपनी_अरे.prototype.लम्बाई = function(){

    return this.length
}

console.log(अरे.लम्बाई ())







// to check custom functions are added or not:
console.log(अरे.__proto__)









