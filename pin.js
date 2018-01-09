let pinCheckerInit = (pin, maxAttempts) => {
    let attemptsLeft = maxAttempts,
        code = pin;

    return (newPin) => {
        if (newPin == code) {
            console.log('Access granted');
            return true
        } else {
            
            if (attemptsLeft == 0) {
                console.log('Access denied. No attempts left');
                return false;
            }

            console.log(`Incorrect pin. Available attempts: ${attemptsLeft - 1}`);
            attemptsLeft--;
            return false;
        };
    }
};

let att1 = pinCheckerInit(1235, 5);
att1(1231);
att1(1231);
att1(1231);
att1(1231);
att1(1231);
att1(1231);
att1(1231);
att1(1231);