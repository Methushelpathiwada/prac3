// strings
// primitive data type
// used to store textual data

// ways of writing strings in JS

// let single = 'single-quote';
// let double = "double-quote"

// let backticks = `backtick-string`

// let amount = 'One-Hundred'

// let billMessage = `Please pay Rs ${amount} here` //template literal

// console.log(billMessage)


// let guestList = `Guests:
// Rahul
// Shubham
// Abishek`

// console.log(guestList)

// let guestList = 'Guests:\n *Rahul\n *Shubham\n *Abishek'
// console.log(guestList)


// multiple lines in the code BUT in the console it shows in a single line.
// better readability in code

// let str = "Hello-\
// I'm continuing in line2-\
// this is line3"

// console.log(str)


// let str1 = "Hello\nWorld"
// let str2 = `Hello
// World`

// console.log(str1 === str2) //true



// escape characters
// let str = 'Hello, how\'re you doing?'
// console.log(str)

// let str = "Hello that \"color\" is red"
// console.log(str)

// let str = "Hello, how're you doing?"

// let str = 'that "color" is red'


// let str = `it\`s, it's, "color"`


// let str = "hello"
// console.log(str.length)

// Accessing string characters
// [] or charAt()
// console.log(str[1])
// console.log(str.charAt(2))



// Strings are IMMUTABLE IN JS
// let str = 'abc'
// str = "Apple"

// console.log(str[0])//A

// str[0] = 'D'

// console.log(str[0])


// concatination of strings, [+, concat]

// let name1 = 'vijay Pratap Singh'
// let age = 22

// console.log(`${name1} is ${age} years old`)
// let statement = name1 + " is " + age + " years old"

// console.log(statement)

// let newStr = name1.concat(" ", age)

// console.log(newStr)




// String methods
// -------indexOf()
// str = 'Widget with id'

// console.log(str.indexOf('with')) //7
// console.log(str.indexOf('id')) //1
// console.log(str.indexOf('t', 3)) //1
// console.log(str.indexOf('widget'))//-1 ------case sensitive -UPPERCASE -lowercase
// console.log(str.indexOf('Widget'))//0


// -----------includes() - returns a boolean value
// let str = "Widget"

// console.log(str.includes("id"))//true
// console.log(str.includes("id", 2))//false


// ---------slice()
// let str = "stringify"

// // console.log(str.slice(0,5)) //strin

// // console.log(str.slice(0, 1)) //'s'
// console.log(str.slice(2)) //ringify
// console.log(str.slice(-4, -1)) //


// -----------substring()

// let str = 'stringify'

// console.log(str.substring(2, 6)) //ring
// substring does not work with negative indices

// --------split works on strings
// split: this method converts your string to an array

// let greeting = 'Hi how are you'

// let resultArr = greeting.split('o') // ['Hi h', 'w are y', 'u']

// console.log(resultArr)

// console.log(resultArr.join('-'))

// let example = 'what*are*you*doing'
// let result = example.split('*')
// // console.log(example.split('*'))
// console.log(result.join(' '))

// let str = "Vijay Pratap Singh"
// let resultArr = str.split(' ')
// // console.log(resultArr)
// console.log(resultArr.join('\n'))

// let str = "what*are*you*doing"
// console.log(str.split('*').join('-')) //chainable

// let arr = [1, 2, 3, 4]
// console.log(arr.reverse())


// let greeting = "Hi how are you" // -> you are how Hi

// console.log(greeting.split(' ').reverse().join(' '))

// let str = 'Hello' // -> olleH
// let revStr = ''
// for (let i = str.length - 1; i >= 0; i--) {
//     revStr += str[i]
// }

// console.log(revStr)


// replace(), replaceAll()
// const temp = 'John is a good guy. John is working as a developer'

// console.log(temp.replace('John', 'Rahul')) //replaces only the first occurence
// console.log(temp.replaceAll('John', 'Rahul')) //replaces all occurences

// console.log(temp.split(' ').join('-'))
// const arr = [1, 2, 3, 4]
// arr.push(5)
// console.log(arr)
// temp = 'orange'
// console.log(temp)
// let str = 'apple'
// str = 'orange'
// console.log(str)



// trim()
// let str = '                   Rahul - - - - -          **** Sharma                    '
// console.log(str.trim())


// let str = 'hello'
// let str1 = 'HELLO'
// // toUpperCase(), toLowerCase
// console.log(str.toUpperCase())
// console.log(str1.toLowerCase())

// let str = '12323' //-> automatically converted to number(coercion), then the comparison is done
// let num = 12323

// console.log(num == str, 'double') //true
// console.log(num === str, 'triple') //false

// let arr = [1,2,3,'hi', true] // non-primitive type