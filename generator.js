class CharacterGenerator {
  get UppercaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  get LowercaseLetter() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  get RandomNumber() {
    return Math.floor(Math.random() * 9) + 1;
  }
}

function generateCode(size) {
  let code = "";
  const generator = new CharacterGenerator();
  console.log(size);
  for (let a = 0; a < size; a++) {
    const randomIndex = Math.floor(Math.random() * 3);
    switch (randomIndex) {
      case 0:
        code += generator.UppercaseLetter;
        break;
      case 1:
        code += generator.LowercaseLetter;
        break;
      case 2:
        code += generator.RandomNumber;
        break;
    }
  }
  return code;
}

let pontos = 0;
let i = 1; //indicador da coluna "cod"

const saveMatch = (points) => {
  if (points != null) {
    let sendData = new FormData();
    document.getElementById("comando").value = "";
    sendData.append("points", points);
    fetch("./src/save_match.php", {
      method: "POST",
      body: sendData,
    })
      .then((res) => {})
      .then((res) => {
        window.location.reload();
      });
  }
};

function populateDiv() {
  var desfoqueterminal = document.getElementById("terminal");
  var botao = document.querySelector(".btn");
  desfoqueterminal.classList.remove("inacessivel");
  botao.style.display = "none";
  console.log(CharacterGenerator.UppercaseLetter);
  //verifica e popula a coluna se estiver vazia, e se o usuário não conseguir esvaziar mais nenhuma com as 10 cols populadas (chegar até cod11), game over
  if (i <= 11) {
    if (i == 11) {
      alert(`Game Over, você fez ${pontos}`);
      saveMatch(pontos);
    }
    let div = document.getElementById(`cod${i}`);
    if (div.innerHTML.trim() === "") {
      let code = generateCode(Math.floor(Math.random() * (4 + 1) + 8));
      div.innerHTML = code;
    }
    i++;
    setTimeout(populateDiv, Math.floor(Math.random() * 1000 + 5000));
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var comandoInput = document.getElementById("comando");
  var codigos = {};

  for (let j = 1; j <= 11; j++) {
    let elemento = document.getElementById(`cod${j}`);
    if (elemento) {
      codigos[j] = elemento;
    }
  }

  comandoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      var valorDigitado = comandoInput.value.trim();

      if (valorDigitado !== "") {
        // percorrer as colunas para verificar se o valor digitado se refere a alguma delas
        for (let j = 1; j < 11; j++) {
          var codigo = codigos[j].textContent.trim();

          if (valorDigitado === codigo) {
            pontos += codigo.length * 2;
            // Pega o código de cima e passa para baixo, como uma pilha
            for (let k = j; k <= 10; k++) {
              var codigoAcima = codigos[k + 1].textContent.trim();
              codigos[k].innerText = codigoAcima || "";

              if (!codigoAcima) {
                codigos[k].innerText = "";
                i = k;
                break;
              }
            }

            //animação da tela
            document.body.classList.add("shake-animation");
            document.querySelector(".points-display").innerHTML = pontos;
            setTimeout(function () {
              document.body.classList.remove("shake-animation");
            }, 1000);

            comandoInput.value = "";
            return;
          }
        }
      }
    }
  });
});
