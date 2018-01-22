-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 04, 2015 at 10:00 AM
-- Server version: 5.5.27
-- PHP Version: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ajax`
--

-- --------------------------------------------------------

--
-- Table structure for table `medallero`
--

CREATE TABLE IF NOT EXISTS `medallero` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Pais` varchar(30) NOT NULL,
  `Oro` int(3) NOT NULL,
  `Plata` int(3) NOT NULL,
  `Bronce` int(3) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Dumping data for table `medallero`
--

INSERT INTO `medallero` (`Id`, `Pais`, `Oro`, `Plata`, `Bronce`) VALUES
(1, 'EEUU', 3, 3, 2),
(2, 'Francia', 2, 1, 0),
(5, 'Alemania', 1, 1, 2),
(7, 'Portugal', 0, 1, 1),
(8, 'Ecuador', 1, 0, 1),
(9, 'Australia', 0, 0, 2),
(10, 'Marruecos', 0, 0, 0),
(11, 'Vietnam', 0, 0, 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
