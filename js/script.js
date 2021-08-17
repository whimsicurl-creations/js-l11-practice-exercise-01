const randomFolks = document.querySelector(".random-peeps");
const dropdown = document.querySelector(".num-users");
const selectUserNumber = document.querySelector("select");

dropdown.classList.remove("hide");

const getData = async function (numUsers) {
    const usersRequest = await fetch(`https://randomuser.me/api?results=${numUsers}`);
    const data = await usersRequest.json();
    //console.log(data);
    const usersResults = data.results;
    //console.log(usersResults);
    displayUsers(usersResults);
};

getData(1);

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

    for (const user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;

        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</p>
            <img src=${imageUrl} alt="User avatar" />
        `;
        randomFolks.append(userDiv);
    }
};

selectUserNumber.addEventListener("change", function (e) {
    const numUsers = e.target.value;
    getData(numUsers);  
    }
);