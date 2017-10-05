// class that constructs a message
class Message {

    private str;
    private num;

    /**
     * [constructor: This function sets the values of instance variables 'str' and 'num' ]
     * @param {string} str [This is the string that is used in the string message] 
     * @param {number} num [This is the number that is used in the string message]
     */
    constructor ( str: string, num: number ) {

        this.str = str;
        this.num = num;

    }

    /**
     * [getMessage: This function creates the string message and returns it]
     * no parameters
     * @return {string} [The concatenated string and number will be returned]
     */
    getMessage(): string {

        return `string: ${this.str}, number: ${this.num}`;

    }

}

// New object creation
let messageObject = new Message ( 'Hello World!', 73 );

// Getting the string message and storing it in variable 'message'
let message: string = messageObject.getMessage();

// Displaying the message in HTML file
document.getElementById("demo").innerHTML = message;
