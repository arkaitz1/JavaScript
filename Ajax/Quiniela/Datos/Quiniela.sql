-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 29-01-2016 a las 01:26:36
-- Versión del servidor: 5.5.44-0ubuntu0.14.04.1
-- Versión de PHP: 5.5.9-1ubuntu4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `enrique`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Quiniela`
--

CREATE TABLE IF NOT EXISTS `Quiniela` (
  `Jornada` int(5) NOT NULL,
  `EqCasa1` varchar(30) NOT NULL,
  `EqFuera1` varchar(30) NOT NULL,
  `EqCasa2` varchar(30) NOT NULL,
  `EqFuera2` varchar(30) NOT NULL,
  `EqCasa3` varchar(30) NOT NULL,
  `EqFuera3` varchar(30) NOT NULL,
  `EqCasa4` varchar(30) NOT NULL,
  `EqFuera4` varchar(30) NOT NULL,
  `EqCasa5` varchar(30) NOT NULL,
  `EqFuera5` varchar(30) NOT NULL,
  `EqCasa6` varchar(30) NOT NULL,
  `EqFuera6` varchar(30) NOT NULL,
  `EqCasa7` varchar(30) NOT NULL,
  `EqFuera7` varchar(30) NOT NULL,
  `EqCasa8` varchar(30) NOT NULL,
  `EqFuera8` varchar(30) NOT NULL,
  `EqCasa9` varchar(30) NOT NULL,
  `EqFuera9` varchar(30) NOT NULL,
  `EqCasa10` varchar(30) NOT NULL,
  `EqFuera10` varchar(30) NOT NULL,
  `EqCasa11` varchar(30) NOT NULL,
  `EqFuera11` varchar(30) NOT NULL,
  `EqCasa12` varchar(30) NOT NULL,
  `EqFuera12` varchar(30) NOT NULL,
  `EqCasa13` varchar(30) NOT NULL,
  `EqFuera13` varchar(30) NOT NULL,
  `EqCasa14` varchar(30) NOT NULL,
  `EqFuera14` varchar(30) NOT NULL,
  PRIMARY KEY (`Jornada`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `Quiniela`
--

INSERT INTO `Quiniela` (`Jornada`, `EqCasa1`, `EqFuera1`, `EqCasa2`, `EqFuera2`, `EqCasa3`, `EqFuera3`, `EqCasa4`, `EqFuera4`, `EqCasa5`, `EqFuera5`, `EqCasa6`, `EqFuera6`, `EqCasa7`, `EqFuera7`, `EqCasa8`, `EqFuera8`, `EqCasa9`, `EqFuera9`, `EqCasa10`, `EqFuera10`, `EqCasa11`, `EqFuera11`, `EqCasa12`, `EqFuera12`, `EqCasa13`, `EqFuera13`, `EqCasa14`, `EqFuera14`) VALUES
(25, 'Getafe', 'Athletic Club', 'Eibar', 'Malaga', 'Las Palmas', 'Celta', 'R.Sociedad', 'Betis', 'Sevilla', 'Levante', 'Valencia', 'Sporting', 'Villarreal', 'Granada', 'R. Madrid', 'R. Union', 'Llagostera', 'Lugo', 'Huesca', 'Albacete', 'R. Oviedo', 'Alaves', 'Almeria', 'Zaragoza', 'Ponferradina', 'Mallorca', 'Mirandes', 'Osasuna');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
