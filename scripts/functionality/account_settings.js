import accountDetailsComponents from '../../components/account-settings/account-details.js';
import transferOwnershipComponents from '../../components/account-settings/transfer-ownership.js';
import ssoComponents from '../../components/account-settings/sso.js';
import deleteAccountComponent from '../../components/account-settings/delete-account.js';



const account_settings_functionality = (user) => {

    // get content div 
    const content = document.getElementById("content-0685");

    // Get the container element
    let btnContainer = document.getElementById("top-section-nav-0685");

    // Get all buttons with class="btn" inside the container
    let btns = btnContainer.getElementsByClassName("nav-area-0685");

    // Loop through the buttons and add the active class to the current/clicked button
    for (let i = 0; i < btns.length; i++) {
        content.innerHTML = null;
        // By default `account details` will be in the content div
        content.innerHTML = accountDetailsComponents();
        getUserContent(user);
        // have the functionality whenever on the `account details` page
        const update_name_btn = document.getElementById("update-name-btn-0685");
        update_name_btn.onclick = () => {
            let newUsername = document.getElementById("update-name-0685").value;
            // PATCH request to update the username;
            patchRequest(user, newUsername);
        };
        btns[i].onclick = (event) => {

            activeBtn(event);
            // Add the components to the container
            addComponents(i); 
        };
    }


    let activeBtn = (e) => {
        let current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        e.target.className += " active";
    };

    const addComponents = (i) => {
        switch (i) {
            case 0:
                content.innerHTML = accountDetailsComponents();
                getUserContent(user);
                const update_name_btn = document.getElementById("update-name-btn-0685");
                update_name_btn.onclick = () => {
                    let newUsername = document.getElementById("update-name-0685").value;
                    // PATCH request to update the username;
                    patchRequest(user, newUsername);
                };
                break;
            case 1:
                content.innerHTML = transferOwnershipComponents();
                break;
            case 2:
                content.innerHTML = ssoComponents();
                break;
            case 3:
                content.innerHTML = deleteAccountComponent();
                const delete_account_btn = document.getElementById("delete-account-btn-0685");
                delete_account_btn.onclick = () => {
                    if (confirm("Account will be deleted 🛑")) {
                        console.log("User will be deleted");
                        // DELETE request to the server
                        // 1. POST data to `recently-deleted` 
                        // 2. DELETE request to server
                        // 3. Redirect to login page when account deleted or doesn't exist
                        // recentlyDeleted(user);
                        deleteFromServer(user);
                    }
                };
                break;
        };
    };
};


const getUserContent = ({ id, name, email }) => {
    const user_name = document.getElementById("update-name-0685");
    user_name.placeholder = name;
    const user_email = document.getElementById("user-email-0685");
    user_email.textContent = email;
    const user_id = document.getElementById("account-id-0685");
    user_id.textContent = id;
};

const patchRequest = async ({ id }, newUsername) => {
    console.log("making patch request");
    let send_this_data = {
        "name": newUsername
    };
    let res = await fetch(`https://hidden-journey-56401.herokuapp.com/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(send_this_data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await res.json();
    window.location.reload();
}

const recentlyDeleted = async (user) => {

    try {
        let res = await fetch(`https://hidden-journey-56401.herokuapp.com/recently-deleted`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data = await res.json();
    }
    
    catch(err) {
        console.log("err in line 117", err);
    }
};


const deleteFromServer = async ({ id }) => {
     
    try {
        let res = await fetch(`https://hidden-journey-56401.herokuapp.com/users/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        let data = await res.json();
        alert("Account has been deleted! 😐");
        window.location.reload();
    }
    catch(err) {
        console.log("error in line 140", err);
    }
};

export { account_settings_functionality };
