const User = require("../models/user");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const keys = require("../config/keys");

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secret;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (payload, done) => {
        User.findOne({_id: payload.id})
          .then(user => {
              if(user) done(null, user);
              else done(null, false)
          })
            .catch(err => done(err, false))
    })
    )
}

