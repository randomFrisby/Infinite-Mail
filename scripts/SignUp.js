const alphaNumeric = 'abcdefghijklmnopqrstuvwxyzABCEDFGHIJKLMNOPQRSTUVWXYZ1234567890';
const numbers = '0123456789';
const plans = ["free", "paid"];


const signup_btn = document.getElementById("sig-up");
signup_btn.onclick = () => {
    openInput();
};



const openInput = () => {
   
    document.getElementById("hide-div").style.visibility = "visible";

    document.getElementById("sig-up").style.visibility = "hidden"; 

    document.getElementById("detail").style.visibility = "hidden"; 

    let cont = document.getElementById("contanir2");
    cont.style.marginTop  = "280px"

   
    
};

const register = document.getElementById("register");
register.onclick = () => {
    Register();
};


const Register = async() => {
    // onclick function for sign up
    // 1. Save sign up credentials in localStorage for login
    // 2. Create user data as object
    // 3. Make post request to store user data in the server
    // 4. Store id of the user in localStorage

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const signUpInfo = { username, email, password };

    localStorage.setItem("user", JSON.stringify(signUpInfo));

    let send_this_data = createUserData(signUpInfo);

    localStorage.setItem("userid", send_this_data.id);

    console.log("send_this_data", send_this_data);

    let res = await fetch(`http://localhost:3000/users`, {
        method: "POST",
        body: JSON.stringify(send_this_data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let data = await res.json();
};

const createUserData = (signUpInfo) => {

    const user = {
        id: randomNumber(1, 10),
        name: signUpInfo.username,
        username: randomAlpaNumeric(alphaNumeric, 15),
        password: randomAlpaNumeric(alphaNumeric, 15),
        today: randomNumber(10, 100),
        week: randomNumber(100, 500),
        month: randomNumber(500, 1000),
        card: `${randomAlpaNumeric(numbers, 4)} ${randomAlpaNumeric(numbers, 4)} ${randomAlpaNumeric(numbers, 4)}`,
        plan: plans[randomNumber(0, 1)],
        api_token: generateArray(),
        total: `${randomNumber(1, 10)}.0K`,
        data: sendData()
    };

    return user
};



const randomNumber = (min, max) => { 
    return Math.floor(Math.random() * (max - min) + min);
};


function randomAlpaNumeric(arr, len) {
    var ans = '';
    for (var i = len; i > 0; i--) {
        ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
};

const generateArray = () => {

    let arrLength = randomNumber(4, 8);

    let newArr = [];

    for (let i = 0; i < arrLength; i++) {
        newArr.push(randomAlpaNumeric(alphaNumeric, 8));
    }

    return newArr;
};

const sendData = () => {
    return [
        {
            "email": "abc@email.com",
            "status": "Unread",
            "spam": 1,
            "sent_time": "08-11-2022",
            "clicks": 10,
            "delivery": 0
        },
        {
            "email": "xyz@yahoo.com",
            "status": "Pending",
            "spam": 0,
            "sent_time": "10-09-2022",
            "clicks": 34,
            "delivery": 1
        },
        {
            "email": "jkl@gmail.com",
            "status": "Read",
            "spam": 1,
            "sent_time": "20-03-2019",
            "clicks": 100,
            "delivery": 1
        },
        {
            "email": "pqr@gmail.com",
            "status": "Read",
            "spam": 1,
            "sent_time": "20-03-2019",
            "clicks": 78,
            "delivery": 0
        },
        {
            "email": "mno@gmail.com",
            "status": "Pending",
            "spam": 0,
            "sent_time": "20-03-2019",
            "clicks": 90,
            "delivery": 1
        }
    ];
};