const email_logs_functionality = (user) => {
    
    let appendData;

    const get_messages = document.getElementById("get-messages");
    get_messages.textContent = `${user.total}/1.0K`;

    const day_filter = document.getElementById("day-filter");
    day_filter.onchange = () => {
        updateSentMessages();
    };

    const updateSentMessages = () => {
        const val = user[day_filter.value];
        if (val) {
            get_messages.textContent = `${val}/5.0K`;
        } else {
            get_messages.textContent = `${user.total}/5.0K`;
        }
    };


    const appendToTable = (data) => {
        const tbody = document.getElementById("tbody");
        tbody.innerHTML = null;

        data.forEach( ({ email, status, sent_time, clicks }, i) => {

            let tr = document.createElement("tr");

            let th_serial_number = document.createElement("th");
            th_serial_number.setAttribute("scope", "row");
            th_serial_number.textContent = i+1;

            let td_status = document.createElement("td");
            td_status.textContent = status;

            let td_email = document.createElement("td");
            td_email.textContent = email;

            let td_sent_time = document.createElement("td");
            td_sent_time.textContent = sent_time;

            let td_clicks = document.createElement("td");
            td_clicks.textContent = clicks;

            tr.append(th_serial_number ,td_status, td_email, td_sent_time, td_clicks);

            tbody.append(tr);
        });
    };

    // add event handler for spam filter
    const spam_filter = document.getElementById("spam-filter");
    let spam_value;
    spam_filter.onchange = () => {
        spam_value = spam_filter.value
        spamFilter(spam_value);
    };

    const spamFilter = () => {
        // const spam_value = spam_filter.value;
        console.log(spam_value);
        if (spam_value == "spam") {
            appendData = getUpdatedDataAfterFilter(0, "spam");
        } else if (spam_value == "not-spam") {
            appendData = getUpdatedDataAfterFilter(1, "spam");
        } else {
            appendData = user.data;
        }
        appendToTable(appendData);

    };


    // add event handler for delivery filter
    const delivery_filter = document.getElementById("delivery-filter");
    let delivery_value;
    delivery_filter.onchange = () => {
        delivery_value = delivery_filter.value;
        deliveryFilter();
    };

    const deliveryFilter = () => {
        // const delivery_value = delivery_filter.value;
        console.log(delivery_value);
        if (delivery_value == "delivered") {
            appendData = getUpdatedDataAfterFilter(1, "delivery");
        } else if (delivery_value == "not-delivered") {
            appendData = getUpdatedDataAfterFilter(0, "delivery");
        } else {
            appendData = user.data;
        }
        appendToTable(appendData);

    };

    const domain_filter = document.getElementById("domain-filter");
    let domain_value;
    domain_filter.onchange = () => {
        domain_value = domain_filter.value;
        domainFilter();
    };

    const domainFilter = () => {
        console.log(domain_value);
        appendData = getUpdatedDataAfterFilter(domain_value, "domain");
        appendToTable(appendData);
    };

    // filter the data for spam or delivery status
    const getUpdatedDataAfterFilter = (key, type) => {

        return user.data.filter((el) => {
            if (type == "delivery") {
                return el.delivery === key;
            } else if (type == "spam") {
                return el.spam === key;
            } else if (type === "domain") {
                if (domain_value == "others") {
                    return !(el.email.endsWith(`yahoo.com`)) && !(el.email.endsWith(`gmail.com`)) && !(el.email.endsWith(`outlook.com`));
                } else {
                    return el.email.endsWith(`${domain_value}.com`);
                }
            }
        });
    };


    // event handler for `Reset Filter Button`
    const reset_filter = document.getElementById("clear-filter-btn");
    reset_filter.onclick = () => {
        clearFilter();
        defautlTable();
    };


    const clearFilter = () => {
        spam_filter.selectedIndex = "";
        spam_value = "";
        delivery_filter.selectedIndex = "";
        delivery_value = "";
        domain_value = "";
        domain_filter.selectedIndex = "";
    };

    const defautlTable = () => {
        appendData = user.data;
        appendToTable(appendData);
    };

    defautlTable();
};
// end of the `addFunctionality` function()

export { email_logs_functionality };