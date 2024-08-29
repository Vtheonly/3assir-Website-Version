<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insertion</title>
</head>
<body>
    <form action="insertion.php" method="post">
        <fieldset>
            <table>
                <tr><td>Nom:</td><td><input type="text" name="nom" size="50" maxlength="50"></td></tr>
                <tr><td>Prénom:</td><td><input type="text" name="prenom" size="50" maxlength="50"></td></tr>
                <tr><td>Âge:</td><td><input type="text" name="age" size="50" maxlength="50"></td></tr>
                <tr><td>Adresse:</td><td><input type="text" name="adresse" size="50" maxlength="50"></td></tr>
                <tr><td>Ville:</td><td><input type="text" name="ville" size="50" maxlength="50"></td></tr>
                <tr><td>Email:</td><td><input type="text" name="email" size="50" maxlength="50"></td></tr>
            </table>
        </fieldset>
        <input type="submit" name="enregistrer" value="Enregistrer">
    </form>

    <?php
    if(isset($_POST['enregistrer'])) {
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $age = $_POST['age'];
        $adresse = $_POST['adresse'];
        $ville = $_POST['ville'];
        $email = $_POST['email'];

        if(!empty($nom) && !empty($prenom) && !empty($age) && !empty($adresse) && !empty($ville) && !empty($email)) {
            $dsn = 'mysql:dbname=web_mohamed;host=localhost';
            $user = "root";
            $password = "";

            try {
                $bddPDO = new PDO($dsn, $user, $password);
            } catch(PDOException $e) {
                echo 'Erreur de connexion : ' . $e->getMessage();
            }

            $requete = $bddPDO->prepare("INSERT INTO clients (nom, prenom, age, adresse, ville, email) VALUES (:nom, :prenom, :age, :adresse, :ville, :email)");
            $requete->bindValue(':nom', $nom);
            $requete->bindValue(':prenom', $prenom);
            $requete->bindValue(':age', $age);
            $requete->bindValue(':adresse', $adresse);
            $requete->bindValue(':ville', $ville);
            $requete->bindValue(':email', $email);
            $requete->execute();
            echo "Enregistrement réussi.";
        } else {
            echo "Veuillez remplir tous les champs.";
        }
    }
    ?>
</body>
</html>
