<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    //pegar o email de entrada e filtrar
    $email = filter_input(INPUT_POST, 'Email', FILTER_SANITIZE_EMAIL);
    //se o email filtrado for válido
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        //então abra o arquivo para salvá-lo
        $saveEmail = fopen('arquivoNewsletter.txt', 'a');
        // se o arquivo estiver aberto
        if ($saveEmail) {
            // variável para analisar o arquivo
            $fileContent = file('arquivoNewsletter.txt', FILE_IGNORE_NEW_LINES);

            //se o email de entrada não estiver no arquivo
            if (!in_array($email, $fileContent)) {
                //então, salve
                fwrite($saveEmail, $email . PHP_EOL);
                fclose($saveEmail);
                echo '<script>window.alert("Inscrição feita com sucesso!");</script>';
                echo '<script>window.location.href = "index.html#div-final";</script>';
                exit();
                //se o email já estiver salvo no arquivo
            } else {
                //feche o arquivo, e retorne a mensagem
                fclose($saveEmail);
                echo '<script>window.alert("Esse e-mail já está inscrito.");</script>';
                echo '<script>window.location.href = "index.html#div-final";</script>';
                exit();
            }
            //caso o arquivo não seja aberto
        } else {
            echo '<script>window.alert("Erro ao abrir o arquivo!");</script>';
            echo '<script>window.location.href = "index.html#div-final";</script>';
            exit();
        }
    //caso o email de entrada não seja válido
    } else {
        echo '<script>window.alert("Esse e-mail é inválido!");</script>';
        echo '<script>window.location.href = "index.html#div-final";</script>';
        exit();
    }
}
?>
