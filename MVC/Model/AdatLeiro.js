const ADATLEIRO = {
    nev: {
        megj: "név",
        type: "text",
        placeholder: "Sussi Baki",
        value: "",
        pattern: /[A-Z][a-z]{2,15}/,
        title: "1 nagybetűvel kezdődik, legalább 3 karakter, legfeljebb 15"
    },
    szulEv: {
        megj: "születési év",
        type: "number",
        placeholder: "2000",
        value: "2000",
        pattern: {
            min: 1900,
            max: 2023
        },
        title: "[1900-2023]"
    }
};

export default ADATLEIRO;