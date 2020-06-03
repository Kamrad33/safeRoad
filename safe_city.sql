-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: safe_city
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `safe_city`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `safe_city` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;

USE `safe_city`;

--
-- Table structure for table `accident`
--

DROP TABLE IF EXISTS `accident`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `accident` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `latitude` double NOT NULL,
  `longtitude` double NOT NULL,
  `Date` varchar(10) NOT NULL,
  `Time` time NOT NULL,
  `Type` varchar(255) NOT NULL,
  `Veichles` int(11) NOT NULL,
  `Participants` int(11) NOT NULL,
  `Deaths` int(11) NOT NULL,
  `Injured` int(11) NOT NULL,
  `Weather` varchar(255) DEFAULT NULL,
  `Light` varchar(255) DEFAULT NULL,
  `RoadState` varchar(255) DEFAULT NULL,
  `District` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `Street` varchar(255) DEFAULT NULL,
  `House` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accident`
--

LOCK TABLES `accident` WRITE;
/*!40000 ALTER TABLE `accident` DISABLE KEYS */;
INSERT INTO `accident` VALUES (90,56.146733,40.37129,'30.04.2020','09:05:00','Столкновение',2,3,0,1,'Пасмурно','Светлое время суток','Сухое','Октябрьский район','г Владимир','пр-кт Строителей','4'),(91,56.167365,40.483514,'29.04.2020','08:05:00','Падение пассажира',1,2,0,1,'Пасмурно','Светлое время суток','Мокрое','Фрунзенский район','г Владимир','ул Добросельская','193'),(92,56.127967,40.402426,'28.04.2020','14:00:00','Столкновение',2,2,0,1,'Пасмурно','Светлое время суток','Сухое','Октябрьский район','г Владимир','ул Большая Московская','28'),(93,56.175876,40.459642,'08.04.2020','22:45:00','Столкновение',2,2,0,1,'Ясно','В темное время суток, освещение включено','Сухое','Фрунзенский район','г Владимир','',''),(95,56.107907,40.345348,'06.04.2020','07:05:00','Столкновение',2,2,0,2,'Ясно','Светлое время суток','Сухое','Ленинский район','г Владимир','ул Верхняя Дуброва','32'),(96,56.153121,40.421448,'05.04.2020','06:30:00','Столкновение',2,2,0,1,'Ясно','Светлое время суток','Сухое','Октябрьский район','г Владимир','ул Электрозаводская','1'),(97,56.118836,40.37202,'05.04.2020','13:10:00','Столкновение',3,4,0,1,'Пасмурно','Светлое время суток','Мокрое','Ленинский район','г Владимир','ул Диктора Левитана','1А'),(98,56.163751,40.469341,'04.04.2020','18:45:00','Наезд на стоящее ТС',4,4,0,1,'Пасмурно','Светлое время суток','Сухое','Фрунзенский район','г Владимир','пр-кт Суздальский','6'),(99,56.13369,40.349854,'02.04.2020','21:10:00','Наезд на стоящее ТС',3,4,0,2,'Дождь','В темное время суток, освещение включено','Мокрое','Октябрьский район','г Владимир','ул Лакина','157'),(100,56.113823,40.343964,'28.04.2020','21:10:00','Наезд на пешехода',1,2,0,1,'Ясно','В темное время суток, освещение включено','Сухое','Ленинский район','г Владимир','ул Верхняя Дуброва','5'),(101,56.086303,40.218769,'28.04.2020','17:30:00','Наезд на стоящее ТС',2,6,0,5,'Пасмурно','Светлое время суток','Сухое','Ленинский район','г Владимир','ул Ноябрьская','144'),(102,56.119541,40.363469,'28.04.2020','10:30:00','Столкновение',2,2,0,1,'Ясно','Светлое время суток','Сухое','Ленинский район','г Владимир','пр-кт Ленина','35'),(103,56.092402,40.241579,'28.04.2020','10:30:00','Столкновение',2,3,0,3,'Ясно','Светлое время суток','Сухое','Ленинский район','г Владимир','ул Ноябрьская','127 А'),(104,56.149004,40.362225,'20.04.2020','12:30:00','Столкновение',2,3,0,2,'Пасмурно','Светлое время суток','Мокрое','Октябрьский район','г Владимир','ул Белоконской','18'),(105,56.150713,40.378307,'18.04.2020','19:20:00','Столкновение',3,4,0,2,'Пасмурно','Светлое время суток','Мокрое','Октябрьский район','г Владимир','ул Тракторная','14'),(106,56.084136,40.210862,'15.04.2020','17:10:00','Столкновение',2,2,0,2,'Ясно','Светлое время суток','Сухое','Ленинский район','г Владимир','ул Ноябрьская','151а'),(107,56.172078,40.419216,'14.04.2020','13:45:00','Столкновение',5,5,0,1,'Пасмурно','Светлое время суток','Сухое','Фрунзенский район','г Владимир','ул Куйбышева','17'),(108,56.139118,40.434258,'13.04.2020','12:20:00','Падение пассажира',1,2,0,1,'Пасмурно','Светлое время суток','Сухое','Фрунзенский район','г Владимир','ул Большая Нижегородская','80А'),(109,56.104072,40.436511,'12.04.2020','17:40:00','Столкновение',2,5,0,3,'Ясно','Светлое время суток','Сухое','Октябрьский район','г Владимир','ш Судогодское','33'),(110,56.126676,40.396568,'11.04.2020','22:05:00','Столкновение',2,2,0,1,'Снегопад','В темное время суток, освещение включено','Мокрое','Ленинский район','г Владимир','ул Дворянская','1'),(111,56.160047,40.375764,'07.04.2020','19:40:00','Столкновение',2,2,0,1,'Ясно','В темное время суток, освещение включено','Сухое','Октябрьский район','г Владимир','ул Куйбышева','5Ж');
/*!40000 ALTER TABLE `accident` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `test` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1567 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1518,'Снегопад'),(1519,'Ясно'),(1520,'Пасмурно'),(1521,'Ясно'),(1522,'Ясно'),(1523,'Ясно'),(1524,'Снегопад'),(1525,'Ясно'),(1526,'Пасмурно'),(1527,'Ясно'),(1528,'Пасмурно'),(1529,'Дождь'),(1530,'Ясно'),(1531,'Пасмурно'),(1532,'Ясно'),(1533,'Ясно'),(1534,'Ясно'),(1535,'Ясно'),(1536,'Пасмурно'),(1537,'Пасмурно'),(1538,'Пасмурно'),(1539,'Ясно'),(1540,'Пасмурно'),(1541,'Пасмурно'),(1542,'Ясно'),(1543,'Пасмурно'),(1544,'Ясно'),(1545,'Пасмурно'),(1546,'Пасмурно'),(1547,'Пасмурно'),(1548,'Пасмурно'),(1549,'Пасмурно'),(1550,'Ясно'),(1551,'Пасмурно'),(1552,'Пасмурно'),(1553,'Пасмурно'),(1554,'Пасмурно'),(1555,'Пасмурно'),(1556,'Ясно'),(1557,'Ясно'),(1558,'Ясно'),(1559,'Ясно'),(1560,'Ясно'),(1561,'Пасмурно'),(1562,'Пасмурно'),(1563,'Ясно'),(1564,'Ясно'),(1565,'Ясно'),(1566,'Ясно');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(255) NOT NULL,
  `SecondName` varchar(255) NOT NULL,
  `Patronymic` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `Login` varchar(32) NOT NULL,
  `Password` varchar(32) NOT NULL,
  `UserRoleID` int(11) NOT NULL,
  `Blocked` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `UserRoleID` (`UserRoleID`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`UserRoleID`) REFERENCES `userrole` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (18,'Георгий','Петров','Иванович','email@mail.com','loginIvan123','password123',1,0),(19,'Петя','Иванов','Иванович','email123@mail.ru','loginPetya123','password123',1,0),(20,'Вася','Сюткин','Васильевич','emailVasya@mail.ru','loginVasya123','password123',1,0),(21,'asd','asd','asd','asd','asd','asd',1,0),(22,'Вальдемар','Иосипович','Вассерман','email@gmail.com','genius123','asd123',1,0),(23,'Дудка','Трубник','Егерьмейстер','asd@mail.ru','egr123','asd123',1,0),(24,'Иван','Иванович','Иванов','rawraw@mail.com','rawraw123','123',1,0),(25,'adm','adm','adm','adm','adm','adm',2,0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userrole`
--

DROP TABLE IF EXISTS `userrole`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userrole` (
  `ID` int(11) NOT NULL,
  `RoleName` varchar(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userrole`
--

LOCK TABLES `userrole` WRITE;
/*!40000 ALTER TABLE `userrole` DISABLE KEYS */;
INSERT INTO `userrole` VALUES (1,'Manager'),(2,'Admin');
/*!40000 ALTER TABLE `userrole` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-06-03 12:37:17
