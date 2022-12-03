const prompt = require("prompt-sync")();


module.exports = {
    getMenuOption: function() {
        console.log("Choose one of the following options:", "1. Human vs Human", "2. Random AI vs Random AI", "3. Human vs Random AI", "4. Human vs Unbeatable AI")
        /*
        Should print a menu with the following options:
        1. Human vs Human
        2. Random AI vs Random AI
        3. Human vs Random AI
        4. Human vs Unbeatable AI
        The function should return a number between 1-4.
        If the user will enter invalid data (for example 5), than a message will appear
        asking to input a new value.
        */
    }
 }

// run this function to test whether you have correctly implemented the other function
function checkOptions()
{
    let option = module.exports.getMenuOption();
    option = prompt("What option would you like to select?")

    if (option === "1") {
        console.log("1")
        //debug typeof option
        console.log(typeof option)
        return option
    } else if (option === "2") {
        //debug typeof option
        console.log("2")
        return option
    } else if (option === "3") {
        //debug typeof option
        console.log("3")
        return option
    } else if (option === "4") {
        //debug typeof option
        console.log("4")
        return option
    } else {
        console.log("Option you've selected is invalid, please try it again")
        option = prompt("What option would you like to select? 1-4")
    }
    //console.log("If the user selected 1, it should print 1");
    //console.log(option);

}

checkOptions();