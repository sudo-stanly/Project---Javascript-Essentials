/* 2.1.1 Data types and Type conversions */

/* literals */
//let year = 1990;
//console.log(year); // -> 1990
//console.log(1991); // -> 1991
//console.log("Alice"); // -> Alice



/* 2.1.2 TypeOf Operator */ 
// let year = 1990;
// console.log(typeof year); // -> number
// console.log(typeof 1991); // -> number

// let name = "Alice";
// console.log(typeof name); // -> string
// console.log(typeof "Bob"); // -> string

// let typeOfYear = typeof year;
// console.log(typeOfYear); // -> number
// console.log(typeof typeOfYear); // -> string



/* 2.1.3 Primative Data Types */

// let isDataValid = true;
// let isStringTooLong = false;
// let isGameOver = false;
// continueLoop = false;

// console.log(false); // -> false
// console.log(typeof false); // -> boolean
// console.log(isDataValid); // -> true
// console.log(typeof isDataValid); // -> boolean


/* Number */
// const year = 1991;
// let delayInSeconds = 0.00016;
// let area = (16 * 3.14);
// let halfArea = area / 2;

// console.log(year); // -> 1991
// console.log(typeof year); // -> number

/* Numbers in JavaScript are usually presented in decimal form. */

// let a = 10; // decimal - default
// let b = 0x10; // hexadecimal
// let c = 0o10; // octal
// let d = 0b10; // binary

// console.log(a); // -> 10
// console.log(b); // -> 16
// console.log(c); // -> 8
// console.log(d); // -> 2

// let x = 9e3;
// let y = 123e-5;
// console.log(x); // -> 9000
// console.log(y); // -> 0.00123


/* 
    In addition to regular numbers in JavaScript we use three additional special values,
    which are: Infinity - Infinity and NaN(Not a Number).

    It checks wheter the argument is a number or cannot be converted to a number.
*/ 

//let a = 1 / 0;
//let b = -Infinity;

//console.log(a); // -> Infinity
//console.log(b); // -> -Infinity
//console.log(typeof a); // -> number
//console.log(typeof b); // -> number

//let s = "it's definitely not a number";
//let n = s * 10;
//console.log(n); // -> NaN
//console.log(typeof n); // -> number

/*
    NOTE:
        You cannot use other typesin arithmeic operations on BigInt that is you
        cannot add a BigInt and a Number to each other (this will generate an error).
*/ 
//let big3 = 1000n + 20; // ->Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions.

/*
    NOTE:
        BigInt does not have its own equivalent of Infinity or NaN values. in this
        case of the Number type, such values appear when dividing by 0 (infinity result)
        or trying to perform an arithmetic action on a value that is not a number
        (NaN result). In this case of the BigInt type, such actions will generate
        an error
*/ 
//let big4 = 1000n / 0n; // -> Uncaught RangeError: Division by zero




/*
    STRING:
    String Literals can be created using single or double quotes as long as both
    beginning and end of quotes match.
*/ 
//let country = "Malawi";
//let continent = 'Africa';

//console.log(country); // -> Malawi
//console.log(typeof country); // -> string
//console.log(continent); // -> Africa
//console.log(typeof continent); // -> string

/*
    using backslash for escape character as a quotation mark.

    \"\" or \'\'
*/ 

//let message1 = 'The vessel \'Mars\' called at the port.';
//let message2 = "Cyclone \"Cilida\" to pass close to Mauritius.";

//console.log(message1); // The vessel 'Mars' called at the port.
//console.log(message2); // Cyclone "Cilidia" to pass close to Mauritius.

/*
    NOTE:
        Trying to perform arithmetic operations on String type values, such as
        subtraction, multiplication, or division will usually end in an error.
        the NaN value will be returend as a result of the action.

        Why? Seeing the arithmetic operators -, *, or \ the javascript interpreter
        tries ti interpret the given values as numbers, or convert them into numbers.
        So if the character strings consists of digits the automatic conversion
        will be sucessful and we will get the result of the arithmetic action
        as a Number type value.

        if the character string cannot be interpreted as a number (and converted)
        we will get the NaN result.
*/ 
//let path = "C:\\Windows" - "Windows";
//console.log(path); // -> NaN

//let test = "100" - "10";
//console.log(test); // -> 90
//console.log(typeof test); // -> number    let path = "C:\\Windows" - "Windows";
//console.log(path); // -> NaN

//let test = "100" - "10";
//console.log(test); // -> 90
//console.log(typeof test); // -> number


/*
    The exception is the addition operator, which will not be treated as an
    arithmetic one, but as an attempt to create a new string by combining two
    input strings.
*/ 
//let path = "C:\\" + "Windows";
//console.log(path); // -> C:\\Windows

//let test = "100" + "10";
//console.log(test); // -> 10010
//console.log(typeof test) // -> string

/*
    String interpolation:
        It allows you to treata a character string as a template, which you can
        place values in selected places, such as those taken from variables.
        Such a literal is created using backticks instead of quotation marks. 
        The places where values are isnerted are marked with curly brackets
        preceded by a $ sign

        example:
            `${variable} is from ${variable}`;
*/ 
//let country = "Malawi";
//let continent = "Africa";

//let sentence = `${country} is located in ${continent}.`;
//console.log(sentence); // -> Malawi is located in Africa

/*
    Methods and Objects:

    Methods: a special kind of function that belongs to an object.
    Objects: are complex data types which consist of many values
        (stored in properties) and methods.
*/ 
//console.time();
//console.log("test console"); // -> test console
//console.timeEnd(); // -> default: 0.109154296875 ms


/*
    METHODS:

    * length
    this property returns the nmber of characters in a string.

    example:

        let str = "java script language"

        str.length -> 20

   * charAt(index)
    this method returns the character at the "index" position
    in the string, (index starts from 0).
    
    example:
    
        let str = "java script language"

        [j a v a   s c r i p t     l   a  n  g  u  a  g  e]
         0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

        str.charAt(0) -> "j"
        str.charAt(15) -> "g"

    * slice(beginIndex, [optional] endIndex)
    this method returns a new string that is created from characters between
    beginIndex(included) and endIndex(excluded); if endIndex is omitted, then
    teh new string is from beginIndex to the end of the string.

    example:

        let str = "java script language"
        [j a v a   s c r i p t     l   a  n  g  u  a  g  e]
         0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

        str.split(0, 4) -> "java"
        str.slice(15, 19) -> "gguage"

    * split(separator, [optional] limit)
    this method splits the string into substrings whenever a separator is found
    in that string, and returns an aray of those substrings, while an optional
    `limit` limits the number of substrings added to the list.

    example:

        let str = "java script language"
        [j a v a   s c r i p t     l   a  n  g  u  a  g  e]
         0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

        str.split(" ")

    j a v a  , s c r i p t , l a n g u a g e
    0 1 2 3    0 1 2 3 4 5   0 1 2 3 4 5 6 7

    -> string  -> string     -> string
    ->               ARRAY                <-
*/ 

// let str="java script language";
// console.log(str.length); // -> 20
// console.log('test'.length); // -> 4

// console.log(str.charAt(0)); // -> 'j'
// console.log('abc'.charAt(1)); // -> 'b'

// console.log(str.slice(0, 4)); // -> 'java'
// console.log('test'.slice(1, 3)); // -> 'es'

// console.log(str.split(' ')); // -> ['java', 'script', 'language']
// console.log('192.168.1.1'.split('.')); // -> ['192', '168', '1', '1']




/*

    * undefined
    this type has only one value : undefined, it's the default value
    when declared variables has no value assigned to them.

    example:

        let declaredVar;
        console.log(typeof declareVar); -> undefined

        declaredVAR = 5;
        console.log(typeof declaredVar); -> number

    * symbol
    this type is complicated and can only be created using a special constructor
    function. They are a form of identifier that are guaranteed to be unique.

    * null
    the null value is quite specific. the value itself is primitive, while
    the type to which it belongs is not a primitive type, such as number or
    undefined. the null value is used to indicate that the variable that is
    intended to contain values of complex types.

    example:

        let someResource;
        console.log(someResource); -> undefined
        consol.elog(typeof someResource); -> undefined

        someREsource = null;
        console.log(someResource); -> null
        console.log(typeof someResource); -> object

*/ 


/*

    * 2.1.4 TYPE CONVERSIONS

    using literals is not the only way to create variables of the given
    primitive types. the second option is to make them using constructor functions.

    example:

        let Str = "Hello" -> this is a literal.

        let Str = String("Hello") -> this is a constructor function.

    these are the list of  following functions that will return primitives
    of a given type:
    -Boolean    -String
    -Number
    -BigInt

    *NOTE: most of the functions can be called without any arguments.

    example:
        -the function string will by default create and return an empty
        
        String -> primitive " "
        Number -> 0
        Boolean -> False
        BigInt -> (this can be an integer number that will be converted
            to BigInt)

    example:

        const str = String();
        const num = Number();
        const bool = Boolean();

        console.log(str) -> " "
        console.log(num) -> 0
        console.log(bool) -> false

        const big1 = BigInt(42);
        const(big1); -> 42n

        const big2 = BigInt(); -> Uncaught TypeError: cannot convert undefined to BigInt

    *Why do we use these functions for? To use them in Type conversion.
*/

//const greetings = String("Hello world");
//console.log(`${greetings} : {${typeof greetings}}`);
//console.log(`${"world"} : {${typeof "world"}}`);

//const num = Number(123); // or Number("123") -> this will convert to number
//console.log(`${num} : {${typeof num}}`);
//console.log(`${12345} : {${typeof 12345}}`);

//const isActive = Boolean(true);
//console.log(`${isActive} : {${typeof isActive}}`);

//const bint1 = BigInt(1234456678);
//console.log(`${bint1} : {${typeof bint1}}`);


/*
    *2.1.5 TYPE CONVERSIONS
    for example we have a number type but we need to add it to some text.
    conversions in javascript happen automatically in specific situations,
    but can also be used explicitly through functions String() or number
    Number().
*/ 

/*

    *2.1.6 CONVERSION TO STRING
    directly changing values to a string can be done for all primitive types.

    example:
        let str = "text";
        let strStr = String(str);
        console.log(`${typeof str} : ${str}`); -> String : text

        let nr = 42;
        let strNr = String(nr);

        console.log(`${typeof nr} : ${nr}`); -> number : 42
        console.log(`${typeof strNr} : ${strNr}`); -> string : 42

        let b1 = true;
        let strB1 = string(b1);

        console.log(`${typeof b1} : ${b1}`) -> boolean : true
        console.log(`${type of strB1} : ${B1}`); -> string : true

        let un = undefined;
        let strUn = String(un);
        console.log(`${typeof un} : ${un}`); -> undefined : undefined
        console.log(`${typeof strUn} : ${strUn}`); -> string : undefined

        let n = null;
        let strN = string(n);
        console.log(`${typeof n} : ${n}`); -> object : null
        console.log(`${typeof strN} : ${strN}`); -> string : undefined
*/ 

/*

    *2.1.7 CONVERSION TO NUMBER
    conversion to a numer is not as obvious as conversion to a string it works
    as expected for strings that represents actual numbers like "14",
    "72.134" or strings that represent numbers in scientific notation, like
    "2e3" or special number values like "NaN" or "Infinity".

    ...

    example:

        console.log(Number(42)); -> 42
        console.log(Number("11")); -> 4
        console.log(Number("0x11")); -> 17
        console.log(Number(0o11)); -> 9
        console.log(Number(0b11)); -> 3
        console.log(Number(12e3)); -> 12000
        console.log(Number("Infinity")); -> Infinity
        console.log(Number("text")); -> NaN
        console.log(Number(14n)); -> 14
        console.log(1234567891234); -> 1234567812345678000000
        console.log(Number(true)); -> 1
        console.log(Number(false)); -> 0
        console.log(Number(undefined)); -> NaN
        console.log(Number(null)); -> 0
*/ 

/*

    *2.1.8 CONVERSION TO BOOLEAN
    conversions to boolean follow simple rules, as we can only have one of
    two values: true or false. the value false is always returned for:

    -0              -undefined
    -NaN            -null
    -empty string


    any other value will result in true being returned.
    
    console.log(Boolean(true)); -> true
    console.log(Boolean(42)); -> true
    console.log(Boolean(0)); -> false
    console.log(Boolean("text")); -> true
    console.log(Boolean(undefined)); -> false
    console.log(Boolean(null));
*/ 
// console.log(Boolean(true));
// console.log(Boolean(" "));
// console.log(Boolean());
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(0));
// console.log(Boolean(NaN));


/*

    * 2.1.9 CONVERSION TO BIGINT
    converting to BigInt requires a number or string representing a number
    as a value to be converted. values for conversion can be given in the 
    default decimal form, as well as hexadecimal, octal, or binary form.
    this applies both to the situation where we give the number and string
    literals as arguments (or variables containing data of the types). We
    can also use exponential notation, converting to a BigInt will throw an
    error, and will stop the program when unable to convert to a given
    number.

    *NOTE: 
    when returning the following example, please pay attention to the fact
    that the first error prevents further code execution. So run the example
    several times in sucession, removing the wrong calls one by one.

    example:

        console.log(BigInt(11)); -> 11n
        console.log(BigInt(0x11)); -> 17n
        console.log(BigInt(11e2)); -> 1100n
        console.log(BigInt(true)); -> 1n
        console.log(BigInt("11")); -> 11n
        console.log(BigInt("0x11")); -> 17n
        console.log(BigInt(null)); -> Uncaught TypeError: Cannot convert null to BigInt

        console.log(BigInt(undefined)); -> Uncaught TypeError: Cannot convert undefined
        to BigInt

        console.log(BigInt(NaN)); -> Uncaught RangeError: NaN cant be converted to 
        BigInt
*/ 

/*

    * 2.1.10 IMPLICIT CONVERSIONS
    conversions can also happen automatically and they happen all the time
    this simple example will demonstrate it (we tested a similar example
    when discussing the string type)

    example:

        const str1 = 42 + "1";
        console.log(str1); -> 421
        console.log(typeof str1) -> string

        const str2 = 42 - "1";
        console.log(str2); -> 41
        console.log(typeof str2); -> number

    so what's happening? when we try to perform an addition when one of the
    arguments is a string, javascript will convert the list of the arguments
    to a string as well. subtraction with a string, however doesnt make sense
    so in this case javascript converts everything to numbers.


*/ 