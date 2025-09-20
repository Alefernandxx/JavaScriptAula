var t1 = 5
var t2 = t1
t2= t2 + 1
console.log(t1)
console.log(t2)

var a1 = [1,2,3]
var a2 = a1
a2.push(4)
console.log(a1)
console.log(a2)

var s = 'if'
s + 'rs' //string é imutavel
console.log(s) // ?

var d = 'pm'
rs(d)
console.log(d)

function rs(a) {
    a = a + 'rs'
}


var x = 12 
var y = "ifrs"
var z = ['pm', 'pmbd', 'di', 'md', 'oc', 'es']


console.log(double(x))
console.log(double(y))
console.log(double(z))

console.log(z) //vem duplicado, há alteração


console.log(half(x))
console.log(half(y))
console.log(half(z))
console.log(half())
console.log(half({}))
console.log(half(null))
console.log(half(x, y, z))




// função polimórfica 
// metade de que? de tudo que é quantificável
function half(a) {
    if (typeof(a) == 'number') {
        return a / 2
        
    }
    if (typeof(a) == 'string') {
        return a.substring(0, a.length / 2)
        
    }
    if (Array.isArray(a)) {
        return a.slice(0, a.length / 2)
        
    }
    
    if (isNaN(a)) {
        return NaN 
    }
}

function double(a) {
    if (typeof(a) == 'number') {
        return a * 2
        
    }
    if (typeof(a) == 'string') {
        return a + a
        
    }
    if (Array.isArray(a)) {
        //return a.concat(a)
        var tam = a.length
        for ( var i = 0; i < tam; i++) {
            a.push(a[i])
        }
        return a;
    }
}