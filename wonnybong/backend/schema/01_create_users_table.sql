CREATE TABLE `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_id` varchar(12) UNIQUE NOT NULL,
  `email` varchar(100) UNIQUE NOT NULL,
	`description` varchar(20),
	`password` varchar(20) NOT NULL,
  `profile_image` varchar(3000) NOT NULL
)