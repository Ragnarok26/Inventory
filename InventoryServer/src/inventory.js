const express = require('express');

function createRouter(db) {
  const router = express.Router();

  router.post('/inventory', (req, res, next) => {
    db.query(
      'INSERT INTO Producto (Nombre, Costo, Iva, Precio) VALUES (?,?,?,?)',
      [req.body.nombre, req.body.costo, req.body.iva, req.body.precio],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });

  router.get('/inventory', function (req, res, next) {
    db.query(
      'SELECT Id AS id, Nombre AS nombre, Costo AS costo, Iva AS iva, Precio AS precio FROM Producto',
      [],
      (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json(results);
        }
      }
    );
  });

  return router;
}

module.exports = createRouter;