enum Znak {
    minus = "minus",
    plus = "plus"
}

function clickBtn(znak: Znak) {
    const body = JSON.stringify({znak: znak})

    fetch('http://localhost:3005/click', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: body
    }).then((response) => {
        return response.json();
    }).then((data) => {

        if(data.plus) {
            const plus = document.getElementById("counterPlus");

            plus.innerText = Number(plus.innerText) + 1;
        } else if(data.minus) {
            const minus = document.getElementById("counterMinus");

            minus.textContent = Number(minus.innerText) + 1;
        }
    });

}