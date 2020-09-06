/** Contain the logic of the backend of the application */

// Set of connections that users will start using as they make requests
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "root",
  database: "api",
  port: "5432",
});

const getUsers = async (req, res) => {
<<<<<<< HEAD
    const response = await pool.query('SELECT * FROM users ORDER BY id ASC');
    console.log(response.rows);
=======
  try {
    const response = await pool.query("SELECT id, name, dad, mom, birth FROM users ORDER BY id ASC");
>>>>>>> feature/birth-date
    res.status(200).json(response.rows);
  } catch (err) {
    res.json(err);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const response = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);
    res.json(response.rows);
  } catch (err) {
    res.json(err);
  }
};

const getUserById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

const createUser = async (req, res) => {
<<<<<<< HEAD
    const { name, dad, mom } = req.body;
    const response = await pool.query('INSERT INTO users (name, dad, mom) VALUES ($1, $2, $3)', [name, dad, mom]);
    console.log(response);
=======
  try {
    const { name, dad, mom, birth } = req.body;
    const response = await pool.query(
      "INSERT INTO users (name, dad, mom, birth) VALUES ($1, $2, $3, $4)",
      [name, dad, mom, birth]
    );
>>>>>>> feature/birth-date
    res.json({
      message: "A new person was created",
      body: {
        user: { name, dad, mom, birth },
      },
    });
  } catch (err) {
    res.json(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { name, dad, mom, birth } = req.body;

    const response = await pool.query(
      "UPDATE users SET name = $1, dad = $2, mom = $3, birth = $4 WHERE id = $5",
      [name, dad, mom, birth, id]
    );
    console.log(response);
    res.json("Person updated in the family");
  } catch (err) {
    res.json(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await pool.query("DELETE FROM users where id = $1", [id]);
    res.json(`Person ${id} was deleted from the family`);
  } catch (err) {
    res.json(err);
  }
};

const updateUser = async (req, res) => {
    const id = parseInt(req.params.id);
    const { name, dad, mom } = req.body;

    const response =await pool.query('UPDATE users SET name = $1, dad = $2, mom = $3 WHERE id = $4', [
        name,
        dad,
        mom,
        id
    ]);
    console.log(response);
    res.json('Person updated in the family');
};

const deleteUser = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`Person ${id} was deleted from the family`);
};

module.exports = {
<<<<<<< HEAD
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
=======
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
>>>>>>> feature/birth-date
