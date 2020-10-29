const axios = require("axios");
const url = "http://localhost:3000";

const getById = async (id) => {
  return await axios
    .get(`${url}/aula/${id}`)
    .then((response) => {
      const [result] = response.data;
      console.log(result);
      const disciplina1 = result.horario1.aula;
      const horario1 = result.horario1.hora;

      const disciplina2 = result.horario2.aula;
      const horario2 = result.horario2.hora;

      if (disciplina2 && horario2) {
        console.log(
          `Hoje você tem aula de ${disciplina1} no horário de ${horario1} e logo após você tem aula de ${disciplina2} no horário de ${horario2}.`
        );
        return;
      }
      console.log(
        `Hoje você tem apenas a aula de ${disciplina1} no horário de ${horario1}.`
      );
    })
    .catch((error) => {
      console.log(error);
      console.log("Opa, deu ruim hein?!");
    });
};

const getNoteByDisciplina = async (disciplina) => {
  return await axios
    .get(`${url}/disciplina/${disciplina}`)
    .then((response) => {
      const result = response.data;
      console.log(`A sua nota atual em ${disciplina} é ${String(result.nota)}`);
    })
    .catch((error) => {
      console.log(error);
      console.log("Opa, deu ruim hein?!");
    });
};

getNoteByDisciplina("monografia");
