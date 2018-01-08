let pinCheckerInit = (maxAttempts, attempt = 1) => {
    let input = prompt('Enter pin (4 digits)', '0000');
    let pinChecker = (input) => {
        const pin = 1234;
        if (input == pin) {
            console.log('Access granted');
            return true
        } else {
            console.log(`Incorrect pin, attempts left ${maxAttempts - attempt}`);
            attempt++;
            pinCheckerInit(maxAttempts, attempt);
        }
    };
    if (attempt < maxAttempts) {
        pinChecker(input)
    } else {
        console.log('Access denied. All attempts were used');
        return false
    };

};

pinCheckerInit(5);