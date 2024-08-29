<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Affichage des clients</title>
</head>
<body>

<?php

$dns = 'mysql:dbname=web_mohamed;host=localhost';
$user = "root";
$password="";

try {
    $bdd = new PDO($dns, $user, $password);
} catch(PDOException $e) {
    echo 'Erreur de connexion : ' . $e->getMessage(); 
}

$req = "SELECT * FROM clients";
$res = $bdd->query($req);

if (!$res) {
    echo "La récupération de données a rencontré un problème";
} else {
    $nbr_clients = $res->rowCount();
}  
?>

<h2>Tous les clients</h2>
<h3>Il y a <?= $nbr_clients ?> clients</h3>

<table border="1">
    <tr>
        <th>ID Client</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Âge</th>
        <th>Adresse</th>
        <th>Ville</th>
        <th>Email</th>
    </tr>

    <?php
    while ($ligne = $res->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr>";
        foreach ($ligne as $valeur) {
            echo "<td>$valeur</td>";
        }   
        echo "</tr>";
    }
    ?>

</table>

<?php
$res->closeCursor();
?>
 
</body>
</html>
