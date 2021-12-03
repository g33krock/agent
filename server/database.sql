CREATE DATABASE agentsite;

CREATE TABLE agent(
    agent_id SERIAL PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    logo VARCHAR(255),
    facebook VARCHAR(255),
    instagram VARCHAR(255),
    twitter VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(255),
    address1 VARCHAR(255),
    state VARCHAR(2),
    city VARCHAR(255),
    zip VARCHAR(255)
);