function getHistory() {

    return document.getElementById("history-value").innerText;//get history value

}

function printHistory(num) {

    document.getElementById("history-value").innerText = num;//display num in history

}

function getOutput() {

    return document.getElementById("output-value").innerText;//get output value

}

function printOutput(num) {

    if (num == "") {

        document.getElementById("output-value").innerText = num;

    }

    else {

        document.getElementById("output-value").innerText = getFormattedNumber(num);

    }

}

function getFormattedNumber(num) {

    if (num == "-") {

        return "";

    }

    var n = Number(num);//9860

    var value = n.toLocaleString("en");//9,860 put comma

    return value;

}

function reverseNumberFormat(num) {

    return Number(num.replace(/,/g, ''));//9860 remove comma

}

var operator = document.getElementsByClassName("operator");

for (var i = 0; i < operator.length; i++) {

    operator[i].addEventListener('click', function () {

        if (this.id == "clear") {

            printHistory("");

            printOutput("");

        }

        else if (this.id == "backspace") {

            var output = reverseNumberFormat(getOutput()).toString();

            //6,986 -> 6986 -->'6986'

            if (output) {

                output = output.substr(0, output.length - 1);

                printOutput(output);

            }

        }

        else {

            var output = getOutput();//2

            var history = getHistory();//98*

            if (output == "" && history != "") {

                if (isNaN(history[history.length - 1])) {//removes last op to add new

                    history = history.substr(0, history.length - 1);

                }

            }

            if (output != "" || history != "") {

                output = output == "" ? output : reverseNumberFormat(output);//?left:right

                history = history + output;

                if (this.id == "=") {

                    var result = eval(history);

                    printOutput(result);

                    printHistory("");

                }

                else {

                    history = history + this.id;

                    printHistory(history);

                    printOutput("");

                }

            }

        }

    });

}

var number = document.getElementsByClassName("number");

for (var i = 0; i < number.length; i++) {

    number[i].addEventListener('click', function () {

        var output = reverseNumberFormat(getOutput());

        if (output != NaN) { //if output is a number

            output = output + this.id;

            printOutput(output);

        }

    });

}