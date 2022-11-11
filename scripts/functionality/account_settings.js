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
        content.innerHTML = accountDetailsComponents();
        getUserContent(user);
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
                    }
                };
                break;
            default:
                content.innerHTML = accountDetailsComponents();
                break;
        };
    };

    const update_name_btn = document.getElementById("update-name-btn-0685");
    update_name_btn.onclick = () => {
        let newUsername = document.getElementById("update-name-0685").value;
        user.name = newUsername;
        content.innerHTML = accountDetailsComponents();
        getUserContent(user);
        // PATCH request to update the username;
        patchrequest();
    };
};


const getUserContent = ({ id, name }) => {
    const user_name = document.getElementById("update-name-0685");
    user_name.placeholder = name;
    const user_email = document.getElementById("user-email-0685");
    user_email.textContent = name;
    const user_id = document.getElementById("account-id-0685");
    user_id.textContent = id;
};

function patchrequest () {
    console.log("making patch request");
}

export { account_settings_functionality };