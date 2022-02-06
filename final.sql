-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-02-2022 a las 23:06:47
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `final`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cars`
--

CREATE TABLE `cars` (
  `ID` int(11) NOT NULL,
  `Marca` varchar(20) NOT NULL,
  `Anio` varchar(15) NOT NULL,
  `Modelo` varchar(20) NOT NULL,
  `Km` varchar(20) NOT NULL,
  `Imagen` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cars`
--

INSERT INTO `cars` (`ID`, `Marca`, `Anio`, `Modelo`, `Km`, `Imagen`) VALUES
(3, 'Fiat', '2015', '500', '300253', ''),
(7, 'Chevrolet', '1900', 'chevy', '2789812', ''),
(12, 'BMW', '213', 'clio', '2789', ''),
(13, 'Fiat', '1900', 'fiesta', '12312412', ''),
(14, 'Chevrolet', '1900', '221', '2789812', ''),
(15, 'Chevrolet', '2010', 'Falcon', '2000', ''),
(16, 'Chevrolet', '2010', 'clio', '300253', ''),
(20, 'BMW', '2010', '221', '23441', 'q0vrpix5sgspl63qhl1a'),
(21, 'Chevrolet', '2010', 'clio', '300253', 'dmi5e1ugkirurwqp7uzc'),
(22, 'Chevrolet', '2010', '221', '300253', 'iqjmpepqrtuot4nmebys'),
(23, 'Ford', '123131', 'clio', '22000', 'rxrvozznw1dqkwt23gcr'),
(24, 'Chevrolet', '1900', 'clio', '2000', NULL),
(25, 'Chevrolet', '1900', 'Falcon', '2000', NULL),
(26, 'Chevrolet', '2010', 'Falcon', '300253', NULL),
(27, 'Chevrolet', '123123', 'asdasd', '300253', NULL),
(28, 'Chevrolet', '12312', 'asdad', '312312', 'z1aienxdptwc9j15kipo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `contraseña` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `email`, `contraseña`) VALUES
(1, 'admin', 'admin@admin.com', '21232f297a57a5a743894a0e4a801fc3');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`ID`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cars`
--
ALTER TABLE `cars`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
