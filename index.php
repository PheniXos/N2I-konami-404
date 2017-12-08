<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>404 | Err-err-err... or.</title>
    <link type="text/css" rel="stylesheet" href="./css/style.css"/>
    <link type="text/css" rel="stylesheet" href="./css/bootstrap.min.css"/>
    <link type="text/css" rel="stylesheet" href="./css/mdb.min.css"/>
    <link type="text/css" rel="stylesheet" href="./css/credit_styles.css"/>
    <link type="text/css" rel="stylesheet" href="./css/style2.css"/>
    <link type="text/css" rel="stylesheet" href="./css/styles.css"/>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,400,500" rel="stylesheet">
    <!-- Font-awesome -->
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
</head>
<body>
<section class="text-xs-center wow fadeIn game-header" style="visibility: visible; animation-name: fadeIn;">
    <div class="container">

        <div id="Logout" class="littleMarginBottom">
            <div id="resultArea"></div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <h1 class="page-header text-xs-center">Erreur 404</h1>
            </div>
            <div class="col-xs-12">
                <p class="text-fluid">
                    Mais !? Qu'est-ce que...!? Eh oui ! Voilà un jeu ! <br/> Un jeu dont les règles restent encore obscures pour certains... <br/> Vous n'aurez pas à éviter des bombes comme dans un démineur basique...<br/>Mais à éviter des voitures !</br>
                </p>
            </div>
        </div>

    </div>
</section>

<section id="intro" class="text-xs-center wow fadeIn game-corp" style="visibility: visible; animation-name: fadeIn;">
    <div class="container">

        <div class="row">
            <div class="col-xs-12">

                <div id="game_div" class="game">
                    <div id="pge"></div>

                    <button onclick="game()" class="btn btn-register retry-btn" id="retry">Retry</button>

                    <form name="forsec" id="chrono">
                        <input type="text" size="3" name="secb" class="chrono_value"> minute(s)
                        <input type="text" size="3" name="seca" class="chrono_value"> seconde(s)
                        <input type="text" size="3" name="secc" class="chrono_value"> dixième(s)
                    </form>

                </div>

            </div>

            <div class="col-xs-12">
                <div class="form-win undisplay" id="form-win">

                    <div class="card">
                        <div class="card-block">

                            <form id="saveScoreForm" data-loader="#saveScoreSubmit">
                                <!--Header-->
                                <div class="form-header red-arena" id="score-display">
                                    <h3><i class="fa fa-trophy"></i> Sauvegarder le score:</h3>
                                </div>
                                </div>

                            </form>
                            <!--/Form with header-->
                        </div>
                    </div>

                </div>
            </div>

        </div>

        <div class="controlers">
            <h3 class="control-header">Controles :</h3>
            <img src="assets/img/souris-clic-droit.png" class="control-img" align="left"></img>
            <p class="control-description">  || Clique droit --> placer un drapeau</p>
            <img src="sassets/img/souris-clic-gauche.png" class="control-img" align="left" width="20px;"></img>
            <p class="control-description">  || Clique gauche --> dévoiler la case</p>
        </div>

    </div>
</section>
<script type="text/javascript" src="./js/jquery-3.2.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js"></script>
<script type="text/javascript" src="./js/bootstrap.min.js"></script>
<script type="text/javascript" src="./js/mdb.min.js"></script>
<script type="text/javascript" src="./js/game.js"></script>
<script type="text/javascript" src="./js/konami.js"></script>
</body>
</html>