CREATE TABLE users
(
    id serial PRIMARY KEY NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    hash VARCHAR(255) NOT NULL,
    role int DEFAULT 0 NOT NULL
); 