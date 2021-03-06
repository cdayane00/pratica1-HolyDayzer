import express from 'express';

const app = express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
  ];

app.get("/holidays", (req, res) => {
    res.send(holidays);
})

const hoje = new Date();
const dataHoje = hoje.toLocaleDateString();


app.get("/is-today-holiday", (req, res) => {
    for (let index = 0; index < holidays.length; index++) {
        if(dataHoje != holidays[index].date){
            res.send(`Não, hoje não é feriado`);
        }
        else{
            res.send(`Sim, hoje é ${holidays[index].name}`);
        }   
    }
})

app.listen(3000);