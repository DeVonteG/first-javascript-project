//Variables being utilized are from youtube, amazon, netflix, etc. 
//
// userName
// userEmail
// password
// dateOfBirth
// userAge
// mobileNumber
// country
// browser
// timeOnline
// preferences
// creditCardInfo
// billingAddress
// shippingAddress
// gender
// basicOrPrime
// ItemsInCart
// accountType
// language
// switchAccount
// signOut


///////Remember to use [] brackets when adding constants. If you add () it will not work and only use the last constant letter by letter ///////
//// if there are multiple variables in an array they must be labeled with [#]

let userName='DeVonte G';
let userEmail='someone@email.com';
let password='password';
let dateOfBirth='mm/dd/yyyy';
let userAge=18-99;
let gender='male or female';
let mobileNumber='xxx-xxx-xxxx';
let country='United States';
let browser='Duck Duck Go';
let timeOnline=2;
let preferences='n/a';
let creditCardInfo='xxxx-xxxx-xxxx-xxxx';
let billingAddress='123 Mills Rd.';
let shippingAddress='123 Mills Rd.';
let basicOrPrime='Prime';
let itemsInCart= 6;
let accountType='Paid';
let language='English';
let switchAccount='Account 1';
let signout='Sign Out';


const variable = ['userName','userEmail','password','dateOfBirth', 'userAge','gender','mobileNumber','country','browser','timeOnline', 'preferences','creditCardInfo','billingAddress','shippingAddress','basicOrPrime','itemsInCart','accountType','language','switchAccount','signOut']


document.write(`
    <p class="variables">User Name: ${variable[0]}</p>
    <p class="variables">User Email: ${variable[1]}</p>
    <p class="variables">Password: ${variable[2]}</p>
    <p class="variables">Date of Birth: ${variable[3]}</p>
    <p class="variables">User Age: ${variable[4]}</p>
    <p class="variables">Gender: ${variable[5]}</p>
    <p class="variables">Mobile Number: ${variable[6]}</p>
    <p class="variables">Country: ${variable[7]}</p>
    <p class="variables">Browser: ${variable[8]}</p>
    <p class="variables">Time on Line: ${variable[9]}</p>
    <p class="variables">Preferences: ${variable[10]}</p>
    <p class="variables">CC Information: ${variable[11]}</p>
    <p class="variables">Billing Address: ${variable[12]}</p>
    <p class="variables">Shipping Address: ${variable[13]}</p>
    <p class="variables">Membership Type: ${variable[14]}</p>
    <p class="variables">Items in Cart: ${variable[15]}</p>
    <p class="variables">Account Type: ${variable[16]}</p>
    <p class="variables">Language: ${variable[17]}</p>
    <p class="variables">Switch Account: ${variable[18]}</p>
    <p class="variables">Sign Out: ${variable[19]}</p>
`)
