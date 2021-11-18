var admin = require("firebase-admin")

var serviceAccount = require("../config/fbServiceAccountKey.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ecommerce-1c7b9-default-rtdb.firebaseio.com"
})

module.exports = admin
