document.querySelector("h1").textContent = "Fooled you bitches!";

const data = [{
        i: "1.png"
    },
    {
        i: "2.png"
    }
];

data.forEach(d => {
    const t = document.createElement("img");
    t.src = "imgs/" + d.i;
    document.body.appendChild(t);
});