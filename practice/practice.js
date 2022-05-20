

let userName='DeVonte G';
let userEmail='someone@email.com';
let password='password';
let dateOfBirth='dd/mm/yyyy';
let creditCardInfo='xxxx-xxxx-xxxx-xxxx';


const variable = ['userName','userEmail','password','dateOfBirth', 'userAge','gender','mobileNumber','country','browser','timeOnline', 'preferences','creditCardInfo','billingAddress','shippingAddress','basicOrPrime','itemsInCart','accountType','language','switchAccount','signOut'];



document.write(`
    <p>User Name: ${userName}</p>
    <p>User Email: ${userEmail}</p>
    <p>Password: ${variable[2]}</p>
    <p>Date of Birth: ${variable[3]}</p>
    <p>User Age: ${variable[4]}</p>
    <p>Gender: ${variable[5]}</p>
    <p>Mobile Number: ${variable[6]}</p>
    <p>Country: ${variable[7]}</p>
    <p>Browser: ${variable[8]}</p>
    <p>Time on Line: ${variable[9]}</p>
    <p>Preferences: ${variable[10]}</p>
    <p>CC Information: ${variable[11]}</p>
    <p>Billing Address: ${variable[12]}</p>
    <p>Shipping Address: ${variable[13]}</p>
    <p>Membership Type: ${variable[14]}</p>
    <p>Items in Cart: ${variable[15]}</p>
    <p>Account Type: ${variable[16]}</p>
    <p>Language: ${variable[17]}</p>
    <p>Switch Account: ${variable[18]}</p>
    <p>Sign Out: ${variable[19]}</p>
`)
