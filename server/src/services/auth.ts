import * as passport from 'passport'
import * as passportLocal from 'passport-local'
import { default as User } from '../models/user'
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser<any, any>((user, done) => {
  done(undefined, user.id)
})

passport.deserializeUser((id , done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
  User.findOne({ email: email.toLowerCase() }, (err, user: any) => {
    if (err) return done(err)
    if (!user) {
      return done(undefined, false, { message: `Email ${email} is incorrect.` })
    }
    user.comparePassword(password, (err: Error, isMatch: boolean) => {
      if (err) return done(err)
      if (isMatch) return done(undefined, user)
      
      return done(undefined, false, { message: 'Invalid email or password.' })
    })
  })
}))

const signup = ({ email, password, req }) => {
  const user = new User({ email, password })
  if (!email || !password) {
    throw new Error('You must provide an email and password')
  }

  return User.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        throw new Error('Email already in use.')
      }
      return user.save()
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        req.login(user, err => {
          if (err) reject(err)
          
          resolve(user)
        })
      })
    })
}

const login = ({ email, password, req }) => {
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) {
        reject('Invalid credentials.')
      }
      req.login(user, () => resolve(user))
    })({ body: { email, password } })
  })
}

export default { signup, login }
