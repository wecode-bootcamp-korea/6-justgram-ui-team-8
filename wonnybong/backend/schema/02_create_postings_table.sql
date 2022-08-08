CREATE TABLE `postings` (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `like` INT NOT NULL,
  `contents` varchar(2000) NULL,
  `created_at` datetime DEFAULT now()
)