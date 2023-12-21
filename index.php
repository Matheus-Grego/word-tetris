<!DOCTYPE html>
<html lang="pt-Br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crack The Code</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@900&family=Press+Start+2P&display=swap"
        rel="stylesheet">
    
</head>

<body>
    <?php require './src/navbar.php'
    ?>

    <div id="conteudo">

        <div class="bouncing-text">
            <div class="c">C</div>
            <div class="r">R</div>
            <div class="a">A</div>
            <div class="c2">C</div>
            <div class="k">K</div>
            <div class="space"></div>
            <div class="t">T</div>
            <div class="h">H</div>
            <div class="e">E</div>
            <div class="space"></div>
            <div class="c3">C</div>
            <div class="o">O</div>
            <div class="d">D</div>
            <div class="e2">E</div>
        </div>
        <div class="pontos">
            <h2>Pontos: <span class="points-display">0</span></h2>
        </div>

        <div id="quadrado">
            <div id="terminal" class="inacessivel">
                
                <div id="codigos">
                    <div class="textos" id="cod10"></div>
                    <div class="textos" id="cod9"></div>
                    <div class="textos" id="cod8"></div>
                    <div class="textos" id="cod7"></div>
                    <div class="textos" id="cod6"></div>
                    <div class="textos" id="cod5"></div>
                    <div class="textos" id="cod4"></div>
                    <div class="textos" id="cod3"></div>
                    <div class="textos" id="cod2"></div>
                    <div class="textos" id="cod1"></div>
                </div>
                <div class="linha-comando">
                    <span>$</span>
                    <input id="comando" type="text">
                </div>
            </div>
            <button onclick="populateDiv()" class="btn"> <span>iniciar</span> </button>
            <script>
                const btn = document.querySelector(".btn");
                btn.onmousemove = function (e) {
                    const rect = btn.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    btn.style.setProperty('--x', x + 'px');
                    btn.style.setProperty('--y', y + 'px');
                }
                btn.onmouseout = function () {
                    btn.style.setProperty('--w', '0px');
                    btn.style.setProperty('--h', '0px');
  }
            </script>
        </div>
    </div>
    <div id="cod11"></div>
    <script src="generator.js"></script>

</body>

</html>