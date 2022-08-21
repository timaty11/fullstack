USE ucode_web;

INSERT INTO `powers` (hero_id, name, power_points, type) VALUES ( 1, 'Iron suit', 200, 'defence');
INSERT INTO `powers` (hero_id, name, power_points, type) VALUES ( 2, 'Green boy', 200, 'attack');
INSERT INTO `powers` (hero_id, name, power_points, type) VALUES ( 3, 'Combat suit', 200, 'defence');

INSERT INTO `races` (hero_id, name) VALUES ( 1, 'Human');
INSERT INTO `races` (hero_id, name) VALUES ( 2, 'Human');
INSERT INTO `races` (hero_id, name) VALUES ( 3, 'Human');

INSERT INTO `teams` (hero_id, name) VALUES ( 1, 'Avengers');
INSERT INTO `teams` (hero_id, name) VALUES ( 2, 'Avengers');
INSERT INTO `teams` (hero_id, name) VALUES ( 3, 'Avengers');
