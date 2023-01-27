const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")

// dar gadame aval yek event add mikonim baroye button
// argomane aval type on moshakhsh mishe ke inja type submit darim

form.addEventListener("submit", (event) => {
  // prevent defult mikonim ke refresh nashe
  event.preventDefault()
  checkInput()
})

// rahe mantegi ine 3 ta tabe dashte bashim
// avali chek kardane input haa
// dovomi agar errori bood on ro set kone
// va tabe akhar baraye inke hamechi dorost anjam shode

const checkInput = () => {
// baraye inke karbar fasele nagzare to input bayad az ye element estefade konim be esme trim
//   migim boro be id user name value ro begir va trim kon inro baraye email va pasword ham mizarim
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const password2Value =password2.value.trim()
  // hala shart haro mizarim
  if (usernameValue === '') {
    // set error 2 ta value dare
    // avali input username hast
    // va dovomi peygami ke mikhaym bedim
    setError(username, 'نام کاربری را وارد کنید')

  } else {
    setSuccsecc(username)
  }
  if (emailValue === '') {

    setError(email, 'ایمیل را وارد کنید')
  } else {
    setSuccsecc(email)
  }

  if (passwordValue === '') {

    setError(password, 'پسورد را وارد کنید')
  } else {
    setSuccsecc(password)
  }
  if (password2Value === '') {
    setError(password2, ' تکرار پسورد را وارد کنید')
  }
  // hala bayad chek konim password 1 va 2 yeki bashad
  else if (passwordValue !== password2Value) {
    setError(password2, "رمز عبور اشتباه وارد شده")
  } else {
    setSuccsecc(password2)
  }
}

// bayad tag small ro select konim chon garare payam to on chap she
const setError = (input, message) => {
  // hala migim boro be input va parent ro begir
  const formControl = input.parentElement

  // hala migam boro be form control va queryselector kon tage small ro
  const small = formControl.querySelector("small")

  // hala bayad be tage small ye mesage va yek border ezafe mikonim
  // baraye border ezafe kardan bayad behesh class ezafe konam
  formControl.className = "form-control error"
  // hala migam boro be small va behesh matn ezafe kon
  small.innerText = message

}
const setSuccsecc = (input) => {
  const formControl = input.parentElement
  formControl.className = "form-control succsecc"
}