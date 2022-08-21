USE ucode_web;

SELECT heroes.id, heroes.name, SUM(powers.power_points) AS points FROM heroes
JOIN powers ON powers.hero_id = heroes.id GROUP by heroes.id ORDER BY points DESC LIMIT 1;

SELECT heroes.name, powers.power_points FROM heroes
JOIN powers ON powers.hero_id = heroes.id WHERE powers.power_points = (SELECT min(powers.power_points) FROM powers) LIMIT 1;

SELECT teams.hero_id, heroes.name, teams.name, SUM(powers.power_points) AS points FROM heroes
JOIN powers ON powers.hero_id = heroes.id
JOIN teams ON teams.hero_id = heroes.id
WHERE teams.name = 'Avengers' GROUP BY teams.hero_id ORDER BY points DESC;

SELECT teams.name, SUM(powers.power_points) AS points FROM heroes
JOIN powers ON powers.hero_id = heroes.id
JOIN teams ON teams.hero_id = heroes.id GROUP BY teams.name ORDER BY points;
