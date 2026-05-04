export function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
}

export function isValidPassword(password) {
    return password.length >= 8;
}

export function isNumber(value) {
    return /^\d+$/.test(value);
}

export function showError(element, message) {
    element.textContent = message;
}

export function clearError(element) {
    element.textContent = "";
}