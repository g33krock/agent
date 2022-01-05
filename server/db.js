const Pool = require("pg").Pool;
require('dotenv').config()

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
});


const getAgents = (request, response) => {
  pool.query(
    "SELECT * FROM agent ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getAgentById = (request, response) => {
  const id = parseInt(request.params.id);

  console.log("Successful connection... you are the best!");
  pool.query(
    "SELECT * FROM agent WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createAgent = (request, response) => {
  const {
    firstName,
    lastName,
    logo,
    facebook,
    instagram,
    twitter,
    email,
    phone,
    address1,
    state,
    city,
    zip,
    message1,
    message2,
    testimonial1,
    testimonial2,
    testimonial3
  } = request.body;

  pool.query(
    "INSERT INTO agent (firstName, lastName, logo, facebook, instagram, twitter, email, phone, address1, state, city, zip, message1, message2, testimonial1, testimonial2, testimonial3) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)",
    [
      firstName,
      lastName,
      logo,
      facebook,
      instagram,
      twitter,
      email,
      phone,
      address1,
      state,
      city,
      zip,
      message1,
      message2,
      testimonial1,
      testimonial2,
      testimonial3
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Agent added`);
    }
  );
};

function updateAgent(request, response) {
  const id = parseInt(request.params.id);
  const {
    firstName,
    lastName,
    logo,
    facebook,
    instagram,
    twitter,
    email,
    phone,
    address1,
    state,
    city,
    zip,
    message1,
    message2,
    testimonial1,
    testimonial2,
    testimonial3
  } = request.body;

  pool.query(
    "UPDATE agent SET firstname = $1, lastname = $2, logo = $3, facebook = $4, instagram = $5, twitter = $6, email = $7, phone = $8, address1 = $9, state = $10, city = $11, zip = $12, message1 = $13, message2 = $14, testimonial1 = $15, testimonial2 = $16, testimonial3 = $17 WHERE id = $18",
    [
      firstName,
      lastName,
      logo,
      facebook,
      instagram,
      twitter,
      email,
      phone,
      address1,
      state,
      city,
      zip,
      message1,
      message2,
      testimonial1,
      testimonial2,
      testimonial3,
      id,
    ],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Agent modified`);
    }
  );
}

const deleteAgent = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "DELETE FROM agent WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Agent deleted`);
    }
  );
};

const getVideos = (request, response) => {
  pool.query(
    "SELECT * FROM video ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getFAQs = (request, response) => {
  pool.query(
    "SELECT * FROM faq ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getAddAgents = (request, response) => {
  const agency = parseInt(request.params.agency);
  pool.query(
    "SELECT * FROM addagent WHERE agency = $1",
    [agency],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getAgents,
  getAgentById,
  createAgent,
  updateAgent,
  deleteAgent,
  getVideos,
  getFAQs,
  getAddAgents,
};
