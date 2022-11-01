function welCome(){
    let user_input = prompt("Welcome to Simple Bank PLC, Pls enter a valid acct number to continue");

    if(user_input.length !== 10 || isNaN(user_input) || user_input == ""){
        alert("Pls enter a valid acct number");
        welCome();

    }else {
        acctPin();
    }
}
welCome();

 function acctPin(){
     let pin = prompt("please enter your account pin ");

     if(pin.length !== 4 || isNaN(pin) || pin == ""){
         alert("Incorrect pin! Please enter your 4-digit pin");
         acctPin();

     }else {
         Select();
     }
 };

 function Select(){
     let selection = prompt("          Welcome buddy! \nPlease select your account type \n1. Savings \n2. Current \n3. Go back");
     let savings = 'Welcome to your savings account';
     let current = 'Welcome to your current account';
     let error = "!Please enter a valid input ('1' '2' or '3')";

     if(selection == "1"){
         alert(savings);
         Savings();

     }else if(selection == "2"){
         alert(current);
         Savings();
     
     }else if(selection == "3"){
        welCome();
        
     }else{
         alert(error);
         Select();
     }
 }

function Savings(){
    let input = prompt("Hi, What transaction do you wish to perform in your account? \n 1. Withdrawal      2. Transfer \n 3. Deposit      4. Enquiry\n 5. Go back")
    let error = 'invalid input!, please enter a digit from 1 to 4';

    if(input == 1){
        Withdrawal();

    }else if(input == 2){
        Transfer();

    }else if(input == 3){
        Deposit();

    }else if(input == 4){
        Enquiry();

    }else if(input == 5){
        Select();
    }else{
        alert(error);
        Savings();
    }
}
// withdrawal function
function Withdrawal(){
    let amount = prompt('Your current balance is N8000. How much do you want to withdraw? \n1. N2000        2. N5000 \n3. N10000       4. Others\n5. Go back       6. Cancel');

    if(amount == 1){
        alert('Success, transaction completed!\nYour new account balance is N6000');
        More();

    }else if(amount == 2){
        alert('Success, transaction completed!\nYour new account balance is N3000');
        More();

    }else if(amount == 3){
        alert('Insufficient funds, transaction failed!');
        More();
        
    }else if(amount == 4){
        Other();

    }else if(amount == 5){
        Savings();

    }else if(amount == 6){
        More();

    }else{
        alert('Please enter a valid option');
        Withdrawal();
    }
}

// withdraw Other amount
function Other(){
    let bal = 8000;
    let amount = prompt('Enter amount to withdraw');
    let x = bal-amount;

    if(amount <= bal){
        alert('Success, transaction completed! \nYour new account balance is ' + 'N' + x);
        More();

    }else{
        alert('Insufficient funds, transaction failed! Input a lesser value!');
        Other(); 
    }
}

// Another transaction?
function More(){
    let final = prompt('Want to perform another transaction? \n1. YES \n2. NO')
    if(final == 1){
        Savings();

    }else if(final == 2){
        alert('Thanks for banking with us, Stay safe');

    }else{
        alert('Please choose a valid option!');
        More();
    }
}

// Enquiry... Check balance
function Enquiry(){
    let bal = 'N8000'
    alert('Dear customer, your current account balance is ' + bal);
    More();
}

// The end of ATM project

//------------------------------------------------------------------------------------------
// Transfer block...
function Transfer(){
    let a = prompt("Select the recipient's insitution/bank \n1. GTB         2. ECO\n3. FCMB      4. UBA\n5. More options");
 
    if(a == '1'){
        AccNo();

    }else if(a == '2'){
        AccNo();

    }else if(a == '3'){
        AccNo();
        
    }else if(a == '4'){
        AccNo();
       
    }else if(a == '5'){
        alert('Please go back and select from the listed options');
        Transfer();

    }else{
        alert('Huh!, Please choose a valid option');
        Transfer();
    }
}

function AccNo(){
    let input = prompt('Enter account number');
    
    if(input.length !== 10 || isNaN(input) || input == ""){
        alert('Enter a valid account number to proceed');
        AccNo();

    }else {
        Amount();
    }
}

function Amount(){
    let c = prompt('Enter Amount to send');
    let bal = 8000;
    let x = bal-c;
    
    if(c <= bal){
        alert('Success, transaction completed! \nYour new account balance is ' + 'N' + x);
        More();

    }else if(c == "" || isNaN(c)) {
        alert('Please enter a valid amount');
        Amount();

    }
}
//-------------------------------------------------------------------------
//Deposit function
function Deposit(){
    let cbal = 8000;
    let deposit = prompt('Your current balance is N' + cbal + ', How much do u want to deposit?');
    let mbal = cbal + deposit;

    if(deposit == "" || isNaN(deposit)){
        alert("Please enter amount to deposit");
        Deposit();

    }else {
        alert('Great! You have successfully deposited N' + deposit + ' into your account. \nYour Main account balance is N' + mbal);
        More();
    }
}
    

    


