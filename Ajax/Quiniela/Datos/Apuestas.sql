-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 29-01-2016 a las 01:27:48
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
-- Estructura de tabla para la tabla `Apuestas`
--

CREATE TABLE IF NOT EXISTS `Apuestas` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Comprador` varchar(30) NOT NULL,
  `R1` varchar(1) NOT NULL,
  `R2` varchar(1) NOT NULL,
  `R3` varchar(1) NOT NULL,
  `R4` varchar(1) NOT NULL,
  `R5` varchar(1) NOT NULL,
  `R6` varchar(1) NOT NULL,
  `R7` varchar(1) NOT NULL,
  `R8` varchar(1) NOT NULL,
  `R9` varchar(1) NOT NULL,
  `R10` varchar(1) NOT NULL,
  `R11` varchar(1) NOT NULL,
  `R12` varchar(1) NOT NULL,
  `R13` varchar(1) NOT NULL,
  `R14` varchar(1) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
