<?php

date_default_timezone_set('America/Bogota');
Header('Access-Control-Allow-Origin: *');
session_start();
require_once 'model/data.php';
$d = new Data();

$now = date("Y-m-d");
list($año, $mes, $dia) = explode('-', $now);

$opcion = $_GET["opcion"];

switch ($opcion) {


    case '1':
        $usuario = $_GET["usuario"];
        $password = $_GET["password"];
        $token = $_GET["token"];

        $log = $d->login($usuario, $password, $token);

        if (isset($log) && !is_null($log)) {
            $jsonLogin = array(
                "id" => $_SESSION["id"],
                "nombres" => $_SESSION['nombres'],
                "apellidos" => $_SESSION["apellidos"],
                "loggedin" => $_SESSION['loggedin'],


            );
        } else {
            $jsonLogin = array(
                "id" => 0,
                "loggedin" => 0
            );
        }
        print_r(json_encode($jsonLogin));
        break;


    case '2':


        $usuarios = $d->mostrarUsuarios();
        $cantidad = 0;
        print_r("[");
        foreach ($usuarios as $u) {
            $cantidad++;
        }
        $jsonCliente = array(
            "cantidad" => "$cantidad"

        );

        print_r(json_encode($jsonCliente));
        print_r("]");
        break;




    case '3':
        $id = $_GET["id"];

        $infoUsuario = $d->getUsuarioID($id);
        print_r("[");
        foreach ($infoUsuario as $u) {
            $jsonCliente = array(
                "id" => $u->id,
                "nombres" => $u->nombres,
                "apellidos" => $u->apellidos,
                "correo" => $u->correo,
                "usuario" => $u->usuario,

            );

            print_r(json_encode($jsonCliente));
        }
        print_r("]");
        break;

    case '4':
        $productos = $d->getProductos();
        $totalDatos = count($d->getProductos());
        $i = 0;

        print_r("[");
        foreach ($productos as $pro) {
            $i++;
            $jsonCliente = array(
                "id" => $pro->id,
                "nombre" => $pro->nombre,
                "cantidad" => $pro->cantidad,
                "precio" => $pro->precio,
                "fecha" => $pro->fecha

            );
            print_r(json_encode($jsonCliente));

            if ($i != $totalDatos) {
                print_r(",");
            }
        }
        print_r("]");

        break;

    case '5':
        $id = $_GET["id"];
        $nombre = $_GET["nombre"];
        $cantidad = $_GET["cantidad"];
        $precio = $_GET["precio"];
        $token = $_GET["token"];

        $existe = $d->updateProductos($id, $nombre, $cantidad, $precio, $token);

        $jsonCliente = array(
            "status" => 3,
            "err" => 0,
            "msg" => "Usuario modificado correctamente."
        );
        print_r(json_encode($jsonCliente));
        break;

    case '6':
        $id = $_GET["id"];
        $token = $_GET["token"];

        $existe = $d->deleteProductos($id, $token);

        $jsonCliente = array(
            "status" => 1,
            "err" => 0,
            "msg" => "Usuario eliminado correctamente."
        );
        print_r(json_encode($jsonCliente));
        break;

    case '7':
        $nombre = $_GET["nombre"];
        $cantidad = $_GET["cantidad"];
        $precio = $_GET["precio"];
     
        $token = $_GET["token"];
        $nuevo = $d->newProducto($nombre, $cantidad, $precio, $token);

        if ($nuevo == true) {
            $jsonCliente = array(
                "status" => 1
            );
            print_r(json_encode($jsonCliente));
        } else {
            $jsonCliente = array(
                "status" => 2
            );
            print_r(json_encode($jsonCliente));
        }
        break;
}
