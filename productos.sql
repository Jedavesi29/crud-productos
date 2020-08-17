-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-08-2020 a las 04:23:58
-- Versión del servidor: 10.3.16-MariaDB
-- Versión de PHP: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `productos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hoteles`
--

CREATE TABLE `hoteles` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `estrellas` int(11) NOT NULL,
  `ciudad` varchar(200) NOT NULL,
  `descripcion` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `hoteles`
--

INSERT INTO `hoteles` (`id`, `nombre`, `estrellas`, `ciudad`, `descripcion`) VALUES
(1, ' Hotel Cancun', 5, 'Chinu Cordoba', 'Hotel ubicado en la ciudad de chinu para el servicio del clientes'),
(2, 'Hotel Hawai', 4, 'Chinu Cordoba', 'Hotel ubicado en la ciudad de chinu para el servicio del clientes'),
(3, 'Hotel Dubai', 3, 'Chinu Cordoba', 'Hotel ubicado en la ciudad de chinu para el servicio del clientes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `fecha` datetime NOT NULL,
  `foto` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `cantidad`, `precio`, `fecha`, `foto`) VALUES
(1, 'Xiaomi Note 8 Pro', 8, '50000000', '2020-08-15 16:27:19', ''),
(3, 'Moto G6 Play', 20, '3000000', '2020-08-15 19:38:52', ''),
(4, 'Samsung A71', 9, '800000', '2020-08-16 15:29:35', NULL),
(5, 'Samsung', 20, '500000', '2020-08-16 15:30:06', NULL),
(6, 'Xiaomi Note 9S', 5, '800000', '2020-08-16 15:34:14', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `acceso` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `token`
--

INSERT INTO `token` (`id`, `acceso`) VALUES
(5, '0y5cj60kx1qp6j8f1xpao2c'),
(6, 'k8qh2f0wkukgfcs76tkq9'),
(7, '65qmwiilqnskidswfymyfr'),
(8, 's53enav5mog4a843mw7dg'),
(9, '7kfhtt3it5bp67sspxxnxo'),
(10, 'snakk7i7p7lrvi6ln2d0s'),
(11, 'f6v5o025lad5an3ro2rxsd'),
(12, 'bsvzcn8yrn9pkmiam44e3c'),
(13, 'j7ccqh0l22ewexao6gxg4n'),
(14, 'vhxc7lv2bkf3prhuof2q5q'),
(15, '501e5pzb0bgae7m6pys3p'),
(16, '07bebfc109ee39116aa5ceb6'),
(17, '81c34ab8abfaa6d6be78eee8');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombres` text NOT NULL,
  `apellidos` text NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombres`, `apellidos`, `usuario`, `password`) VALUES
(1, 'Jesus David', 'Vergara Sierra', 'jedavesi29', '$2y$15$MkazuSZRKkm0dki6O95uBOpgjSPfNtO/DQ8egKCJwJ01e1VzD7xcS');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `hoteles`
--
ALTER TABLE `hoteles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
