CREATE TABLE `posting_images` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`posting_id` INT NOT NULL,
	`image_url` varchar(3000) NOT NULL,
  `image_alt` varchar(100) NOT NULL
)