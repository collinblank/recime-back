require('dotenv').config()

module.exports = 
{
  "development": {
    "username": "bzgzflsmafpggh",
    "password": "a6e93d53aa13734ab6d75490d100c81ae18463524abdeb11b1e5ce891aa3dc22",
    "database": "d7ckka69flggqj",
    "host": "ec2-52-207-90-231.compute-1.amazonaws.com",
    "dialect": "postgres",
    "dialectOptions":{   
      "ssl":{
        "require": true,
        "rejectUnauthorized": false
      }
    }
  },
  "test": {
    "username": "bzgzflsmafpggh",
    "password": "a6e93d53aa13734ab6d75490d100c81ae18463524abdeb11b1e5ce891aa3dc22",
    "database": "d7ckka69flggqj-test",
    "host": "ec2-52-207-90-231.compute-1.amazonaws.com",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "dialectOptions":{   
      "ssl":{
        "require":true,
        "rejectUnauthorized":false
      }
    }
  }
}
