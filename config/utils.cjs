/* eslint-disable no-undef */
// config/utils.cjs

const _ = require("lodash");
const noEnvFile = process.env.NO_ENVFILE;
if (_.isNil(noEnvFile)) require("dotenv").config();
module.exports.nodeEnv = process.env.NODE_ENV;