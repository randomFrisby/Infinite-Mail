const api_token_functionality = (user) => {

    const total_tokens = document.getElementById("total-tokens-0685");
    total_tokens.textContent = `Total tokens: ${user.api_token.length}`;

    const plan = document.getElementById("plan");
    plan.textContent = user.plan;

    const tbody = document.getElementById("tbody-0685");

    const appendTable = ({ api_token, name }) => {

        tbody.innerHTML = null;

        api_token.forEach( (el, i) => {

            let tr = document.createElement("tr");

            let th = document.createElement("th");
            th.setAttribute("scope", "row");
            th.textContent = i+1;

            let td1 = document.createElement("td");
            td1.textContent = el;

            let td2 = document.createElement("td");
            td2.textContent = name;

            tr.append(th, td1, td2);

            tbody.append(tr);
        });

    };

    appendTable(user);

};

export { api_token_functionality };