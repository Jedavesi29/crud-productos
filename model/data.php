<?php

date_default_timezone_set('America/Bogota');
require_once "conexion.php";
require_once "usuario.php";
require_once "producto.php";
class Data
{
	private $con;

	public function __construct()
	{
		$this->con = new Conexion();
	}

	public function login($usuario, $password, $token)
	{


		$query = "SELECT * from usuarios where usuario = '$usuario' LIMIT 1";
		$res = $this->con->ejecutar($query);
		$usuarios = array();

		if ($res = $this->con->ejecutar($query)) {
			/* obtener el array de objetos */
			while ($reg = $res->fetch_object()) {
				$nombres = $reg->nombres;
				$apellidos = $reg->apellidos;
				$usuario = $reg->usuario;
				$passwordDB = $reg->password;
				$id = $reg->id;
			}

			if (isset($passwordDB) && !is_null($passwordDB)) {
				if (password_verify($password, $passwordDB)) {
					$_SESSION['usuario'] = $usuario;
					$_SESSION['loggedin'] = true;
					$_SESSION["nombres"] = $nombres;
					$_SESSION["apellidos"] = $apellidos;
					$_SESSION["id"] = $id;
					$_SESSION["token"] = $token;
					$res->close();

					$query = "INSERT INTO token  VALUES (null,'$token')";
					$res = $this->con->ejecutar($query);
				} else {
					$usuarios = null;
				}
			}
		} else {
			$usuarios = null;
		}
		return $usuarios;
	}

	public function mostrarUsuarios()
	{

		$usuarios = array();
		$query = "SELECT * FROM usuarios ORDER BY id DESC ";

		$res = $this->con->ejecutar($query);

		while ($reg = $res->fetch_object()) {
			$usua = new Usuario();

			$usua->id = $reg->id;
			$usua->nombres = $reg->nombres;
			$usua->apellidos = $reg->apellidos;

			$usua->usuario = $reg->usuario;
			$usua->password = $reg->password;

			array_push($usuarios, $usua);
		}

		return $usuarios;
	}


	public function getUsuarioID($id)
	{

		$query = "SELECT * from usuarios where id = $id LIMIT 1";
		$res = $this->con->ejecutar($query);
		$usuarios = array();

		if ($res = $this->con->ejecutar($query)) {


			while ($reg = $res->fetch_object()) {
				$u = new Usuario();

				$u->id = $reg->id;
				$u->nombres = $reg->nombres;
				$u->apellidos = $reg->apellidos;

				$u->usuario = $reg->usuario;


				array_push($usuarios, $u);
			}

			return $usuarios;
		}
	}

	public function getProductos()
	{
		$productos = array();

		$query = "SELECT * from producto";
		$res = $this->con->ejecutar($query);

		while ($reg = $res->fetch_object()) {
			$pro = new Productos();

			$pro->id = $reg->id;
			$pro->nombre = $reg->nombre;
			$pro->cantidad = $reg->cantidad;
			$pro->precio = $reg->precio;
			$pro->fecha = $reg->fecha;

			array_push($productos, $pro);
		}
		return $productos;
	}


	public function updateProductos($id, $nombre, $cantidad, $precio, $toke)
	{


		$query = "SELECT id, acceso FROM token WHERE acceso= '$toke' ";
		$res = $this->con->ejecutar($query);
		$reg = $res->fetch_assoc();

		if (isset($reg)) {
			$query = "UPDATE producto set nombre = '$nombre', cantidad = '$cantidad', precio = '$precio' where id=$id";
			$this->con->ejecutar($query);
		}
	}




	public function deleteProductos($id, $toke)
	{
		$query = "SELECT id, acceso FROM token WHERE acceso= '$toke' ";
		$res = $this->con->ejecutar($query);
		$reg = $res->fetch_assoc();

		if (isset($reg)) {
			$query = "DELETE FROM producto  where id=$id";
			$this->con->ejecutar($query);
		}
	}


	public function newProducto($nombre, $cantidad, $precio, $toke)
	{

		$query = "SELECT id, acceso FROM token WHERE acceso= '$toke' ";
		$res = $this->con->ejecutar($query);
		$reg = $res->fetch_assoc();
		if (isset($reg)) {
			$query = "INSERT INTO producto VALUES (null,'$nombre',$cantidad,$precio,now(),null)";
			$this->con->ejecutar($query);
			$exite = true;
		} else {

			$exite = false;
		}
		return $exite;
	}
}
