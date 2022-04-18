const expressJwt = require('express-jwt')

  const secret = process.env.secret;
  const api = process.env.API_URL
  const authJwt = expressJwt({
    secret,
    algorithms: ['HS256'],
    isRevoked: isRevoked
  }).unless({
    path: [
      {url: /\/api\/v1\/asanas(.*)/, methods: ['GET', 'OPTIONS']},
      //{url: `${api}/yogaVideos`, methods: ['GET', 'OPTIONS']},
      {url: /\/api\/v1\/yogaVideos(.*)/, methods: ['GET', 'OPTIONS']},
      `${api}/users/login`,
      `${api}/users/register`
    ]
  })

  async function isRevoked(req, payload, done) {
    if(!payload.isAdmin){
      done(null, true)
    }

    done()
  }
module.exports = authJwt