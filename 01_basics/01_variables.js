const accountId = 144553
let accountEmail = "navy936978@gmail.com"
var accountPassword = "12345"
accountCity = "Meerut"
let accountState;
// accountId = 2//  not allowed 

accountEmail = "ashish@yadav.com"
accountPassword = "212122121"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not use var 
because of issue in block scope and functional scope
*/ 

console.table([accountId,accountEmail, accountPassword,accountCity,accountState])

