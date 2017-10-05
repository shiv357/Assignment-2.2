// class that constructs a message
var Message = /** @class */ (function () {
    /**
     * [constructor: This function sets the values of instance variables 'str' and 'num' ]
     * @param {string} str [This is the string that is used in the string message]
     * @param {number} num [This is the number that is used in the string message]
     */
    function Message(str, num) {
        this.str = str;
        this.num = num;
    }
    /**
     * [getMessage: This function creates the string message and returns it]
     * no parameters
     * @return {string} [The concatenated string and number will be returned]
     */
    Message.prototype.getMessage = function () {
        return "string: " + this.str + ", number: " + this.num;
    };
    return Message;
}());
// New object creation
var messageObject = new Message('Hello World!', 73);
// Getting the string message and storing it in variable 'message'
var message = messageObject.getMessage();
// Displaying the message in HTML file
document.getElementById("demo").innerHTML = message;
