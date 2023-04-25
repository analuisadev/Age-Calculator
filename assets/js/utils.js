const showYear = document.querySelector('.year')
const showDay = document.querySelector('.day')
const showMonth = document.querySelector('.month')

export const ValidData = {

    fieldRequired: document.querySelectorAll('.field-required'),
    validAge: document.querySelectorAll('.valid-info'),

    isValidAge() {
        ValidData.validAge.forEach(field => { return field.classList.remove('hide') })
    },

    isRequired() {
        ValidData.fieldRequired.forEach(field => field.classList.remove('hide'))
    }
}

export const fieldIsNaN = (currentAge, birthday, birthdayMonth) => {
    return isNaN(currentAge, birthday, birthdayMonth)
}

export const showAge = (currentAge, birthday, birthdayMonth) => {
    showYear.innerHTML = currentAge
    showDay.innerHTML = birthday
    showMonth.innerHTML = birthdayMonth
}