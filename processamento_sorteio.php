<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //variável retorno para armazenar os retornos e jogar na tela em seguida.
    $retorno = array();
   //se o nome for inserido e não estiver vazio
    if (isset($_POST["name"]) && !empty($_POST["name"])) {
        //armazene o nome na variável $nome e filtre ele para evitar injeção de código
        $nome = htmlspecialchars($_POST["name"]);
    } else {
        $retorno[] = "Por favor, insira seu nome.";
    }
    //mesma coisa com o email
    if (isset($_POST["email"]) && !empty($_POST["email"])) {
        //armazene em $email e filtre o email, verificando se ele é válido
        $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
        // se o email não for válido, retorne a resposta
        if (!$email) {
            $retorno[] = "O e-mail inserido não é válido.";
        }
    } else {
        $retorno[] = "Por favor, insira seu e-mail.";
    }
    //se o nome e email forem atribuídos às variáveis, significa que o nome está limpo e e-mail é válido.
    if (isset($nome) && isset($email)) {
        //então, para verificar se esses dados de entrada já estão salvos, cria uma variável para
        //identificar o arquivo, e outra variável para identificar os dados de entrada, para assim
        //analisar se os dados de entrada já estão no arquivo.
        $dataFile = file("arquivoSorteio.txt", FILE_IGNORE_NEW_LINES);
        $entryData = "Nome: $nome e E-mail: $email";
        //se os dados de entrada não estiverem no arquivo
        if (!in_array($entryData, $dataFile)) {
            //então abra o arquivo, armazenado na variável $saveData
            $saveData = fopen("arquivoSorteio.txt", "a");
            //se o arquivo estiver aberto
            if ($saveData) {
                //então escreva os dados de entrada
                fwrite($saveData, $entryData . PHP_EOL);
                //feche o arquivo
                fclose($saveData);
                $retorno[] = "Enviado com sucesso!";
            } else {
                //caso o arquivo não abrir para os dados serem escritos.
                $retorno[] = "Erro ao escrever no arquivo.";
            }
            //caso os dados de entrada já estejam salvos no arquivo
        } else {
            $retorno[] = "Nome e e-mail já cadastrados.";
        }
    }
    //retorno jogado na tela através do window.alert
    foreach ($retorno as $mensagem) {
        echo '<script>window.alert("' . $mensagem . '")</script>';
    }
    //voltar para página
    echo '<script>window.location.href = "loja.html#sorteio";</script>';
    exit();
}
?>
