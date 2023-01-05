CREATE TABLE `admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `customers` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `customer_address` varchar(255) DEFAULT NULL,
  `customer_contact` varchar(255) DEFAULT NULL,
  `customer_emailid` varchar(255) DEFAULT NULL,
  `customer_gender` varchar(255) DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_dob` date DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `helpers` (
  `helper_id` int NOT NULL AUTO_INCREMENT,
  `helper_dob` date DEFAULT NULL,
  `helper_address` varchar(255) DEFAULT NULL,
  `helper_contact` varchar(255) DEFAULT NULL,
  `helper_email` varchar(255) DEFAULT NULL,
  `helper_gender` varchar(255) DEFAULT NULL,
  `helper_name` varchar(255) DEFAULT NULL,
  `helper_services` varchar(255) DEFAULT NULL,
  `helper_servicecharge` int DEFAULT NULL,
  PRIMARY KEY (`helper_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `orders` (
  `order_id` int NOT NULL AUTO_INCREMENT,
  `order_remarks` varchar(255) DEFAULT NULL,
  `customer_id` int DEFAULT NULL,
  `helper_id` int DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FKpxtb8awmi0dk6smoh2vp1litg` (`customer_id`),
  KEY `FKhdo0eo33e64q9xsxen02eeicp` (`helper_id`),
  CONSTRAINT `FKhdo0eo33e64q9xsxen02eeicp` FOREIGN KEY (`helper_id`) REFERENCES `helpers` (`helper_id`),
  CONSTRAINT `FKpxtb8awmi0dk6smoh2vp1litg` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
