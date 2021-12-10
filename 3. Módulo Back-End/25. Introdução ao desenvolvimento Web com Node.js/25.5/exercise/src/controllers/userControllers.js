const crypto = require('crypto')

const register = (_req, res, next) => {
  res.status(201).json({
    "message": "user created"
  })

  next();
}

const login = (req, res, next) => {
  if(req.body.password === 12346578) {
    throw new Error('Cagou')
  }
  const token = crypto.randomBytes(12).toString('hex');
  
  res.status(200).json({
    token: token,
  })

  next();
}

module.exports = { register, login }