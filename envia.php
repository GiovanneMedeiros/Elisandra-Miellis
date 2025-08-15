<?php

    $nome = addslashes($_POST['name']),
    $email = addslashes($_POST['email']),
    $phone = addslashes($_POST['phone']),
    $message = addslashes($_POST['message']),

    $para ='giovannemedeiros22@gmail.com';
    $assunto ='contato';

    $corpo = "nome: ".$nome."\n"."email: ".$email."\n"."phone: ".$phone."\n"."message: ".$message;

    $cabeca = "from: gilvanmedeiros93@gmail.com"."\n"."reply-to: ".email.""\n"."x=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("E-mail enviado com sucesso!");
    }else{
        echo("Houve um erro ao enviar o email!");
    }
?>