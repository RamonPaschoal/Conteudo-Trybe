const validateUsername = (username) => {
  if(username.length <= 3) {
    return false
  };
  
  return true;
};

const validateEmail = (email) => {
  const regexEmail = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/ ;

  if(!email.match(regexEmail)) {
    return false
  };

  return true;
};

const validatePassword = (password) => {
  if(
  typeof password === 'number' &&
  password.toString().length >= 4 &&
  password.toString().length <= 8
  ) {
    return true;
  }

  return false;
};

const validateRegister = (req, res, next) => {
  const { username, email, password } = req.body;
  const isUserNameValid = validateUsername(username);
  const isEamilValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  // console.log(isUserNameValid, isEamilValid, isPasswordValid)

  if(
    isUserNameValid &&
    isEamilValid &&
    isPasswordValid
  ) {
    return next(); // Sem parâmetro da continuidade normal
  }

  next({
    code: 400,
    "message": "invalid data"
  }); // next com algum parâmnetro, ele identifica como erro e envia direto para o Handler de erro.
}

const validateLogin = (req, _res, next) => {
  const { email, password } = req.body;
  const isEamilValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);

  if(isEamilValid && isPasswordValid) {
    return next()
  }

  // res.status(400).json({
  //   "message": "email or password is incorrect"
  // })

  next({
    code: 400,
    "message": "email or password is incorrect"
  })
}

module.exports = { validateRegister, validateLogin };