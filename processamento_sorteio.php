<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $retorno = array();

    if (isset($_POST["name"]) && !empty($_POST["name"])) {
        $nome = htmlspecialchars($_POST["name"]);
    } else {
        $retorno[] = "Por favor, insira seu nome.";
    }

    if (isset($_POST["email"]) && !empty($_POST["email"])) {
        $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
        if (!$email) {
            $retorno[] = "O e-mail inserido não é válido.";
        }
    } else {
        $retorno[] = "Por favor, insira seu e-mail.";
    }

    if (isset($nome) && isset($email)) {
        $saveData = fopen("arquivoSorteio.txt", "a");
        if ($saveData) {
            fwrite($saveData, "Nome: $nome e E-mail: $email" . PHP_EOL);
            fclose($saveData);
            $retorno[] = "Enviado com sucesso!";
        } else {
            $retorno[] = "Erro ao escrever no arquivo.";
        }
    }

    foreach ($retorno as $mensagem) {
        echo '<script>window.alert("' . $mensagem . '")</script>';
    }

    echo '<script>window.location.href = "loja.html#sorteio";</script>';
    exit();
}
?>
