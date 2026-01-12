export function containsNumber(password) {
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (char >= '0' && char <= '9') {
            return true;
        }
    }
    return false;
}

export function isValidPassword(password) {
    const isLongEnough = password.length >= 8;
    const hasNumber = containsNumber(password);
    return isLongEnough && hasNumber;
}