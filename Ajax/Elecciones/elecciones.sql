-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2014 at 10:01 PM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `eval2`
--

-- --------------------------------------------------------

--
-- Table structure for table `elecciones`
--

CREATE TABLE IF NOT EXISTS `elecciones` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Partido` varchar(30) COLLATE utf8_spanish_ci NOT NULL,
  `Votos` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci AUTO_INCREMENT=11 ;

--
-- Dumping data for table `elecciones`
--

INSERT INTO `elecciones` (`Id`, `Partido`, `Votos`) VALUES
(1, 'PSOE', 15000),
(2, 'PP', 11000),
(3, 'BILDU', 12000),
(4, 'EAJ-PNV', 16000),
(5, 'IU', 6500);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
