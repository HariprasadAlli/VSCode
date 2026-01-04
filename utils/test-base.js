const base = require('@playwright/test')

exports.customtest = base.test.extend(
    {
        testDataForLogin : {
  userName : "Hariprasad",
  password : "Perigord1!",
  vpin1 : "1",
  vpin2 : "1",
  vpin3 : "1"

        }
    }
)