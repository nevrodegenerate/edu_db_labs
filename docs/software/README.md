# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється: 
- SQL-скрипт для створення на початкового наповнення бази даних
```SQL
CREATE TABLE IF NOT EXISTS lab4.ADMINISTRATOR (
  idADMINISTRATOR INT UNSIGNED NOT NULL,
  adm_delate TINYINT NULL,
  adm_upload LONGTEXT NULL,
  adm_annotation_chng LONGTEXT NULL,
  adm_control TINYINT NULL,
  STAFFLOGIN_idSTAFFLOGIN VARCHAR(45) NOT NULL,
  PRIMARY KEY (idADMINISTRATOR),
  INDEX fk_ADMINISTRATOR_STAFFLOGIN1_idx (STAFFLOGIN_idSTAFFLOGIN ASC) VISIBLE,
  CONSTRAINT fk_ADMINISTRATOR_STAFFLOGIN1
    FOREIGN KEY (STAFFLOGIN_idSTAFFLOGIN)
    REFERENCES lab4.STAFFLOGIN (idSTAFFLOGIN)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table lab4.EDITOR
-- -----------------------------------------------------
DROP TABLE IF EXISTS lab4.EDITOR ;

CREATE TABLE IF NOT EXISTS lab4.EDITOR (
  idEDITOR INT NOT NULL,
  STAFFLOGIN_idSTAFFLOGIN VARCHAR(45) NOT NULL,
  PRIMARY KEY (idEDITOR),
  INDEX fk_EDITOR_STAFFLOGIN1_idx (STAFFLOGIN_idSTAFFLOGIN ASC) VISIBLE,
  CONSTRAINT fk_EDITOR_STAFFLOGIN1
    FOREIGN KEY (STAFFLOGIN_idSTAFFLOGIN)
    REFERENCES lab4.STAFFLOGIN (idSTAFFLOGIN)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table lab4.BRANCH
-- -----------------------------------------------------
DROP TABLE IF EXISTS lab4.BRANCH ;

CREATE TABLE IF NOT EXISTS lab4.BRANCH (
  idBRANCH INT NOT NULL,
  branch_chng LONGTEXT NULL,
  EDITOR_idEDITOR INT NOT NULL,
  PRIMARY KEY (idBRANCH),
  INDEX fk_BRANCH_EDITOR1_idx (EDITOR_idEDITOR ASC) VISIBLE,
  CONSTRAINT fk_BRANCH_EDITOR1
    FOREIGN KEY (EDITOR_idEDITOR)
    REFERENCES lab4.EDITOR (idEDITOR)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
- RESTfull сервіс для управління даними
```

# RESTfull сервіс для управління даними

#### Основний файл (app.js)
```js
const express = require("express");
const cors = require("cors");
const router = require("./routes/index.js");
const AppError = require("./utils/appError.js");
const errorHandler = require("./utils/errorHandler.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.all("*", (req, res, next) => {
    next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

module.exports = app;
```

#### Встановлення доступу до бази даних (db.js)
```js
const mysql = require("mysql2");
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password1234",
    database: "lab6",
});

conn.connect();

module.exports = conn;
```


#### Маршрути (index.js)
```js
const express = require("express");
const controllers = require("../controllers.js");
const router = express.Router();

router.route("/file").get(controllers.getAllFiles).post(controllers.createFile);
router
    .route("/file/:id")
    .get(controllers.getFileById)
    .put(controllers.updateFile)
    .delete(controllers.deleteFile);
module.exports = router;
```

#### Контроллери (controllers.js)
```js
const AppError = require("../utils/appError.js");
const conn = require("../services/db.js");

exports.getAllFiles = (req, res, next) => {
    conn.query("SELECT * FROM file", function (err, data, fields) {
        if (err) return next(new AppError(err));
        res.status(200).json({
            status: "success",
            length: data?.length,
            data: data,
        });
    });
};

exports.createFile = (req, res, next) => {
    if (!req.body) return next(new AppError("No form data found", 404));
    const values = [
        req.body.idFILE,
        req.body.file_name,
        req.body.file_description,
        req.body.file_upload,
        req.body.file_format,


    ];
    conn.query(
        "INSERT INTO file (idFILE, file_name, file_description, file_upload, file_format) VALUES(?)",
        [values],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "file added!",
            });
        }
    );
};

exports.getFileById = (req, res, next) => {
    if (!req.params.id) {
        return next(new AppError("No file id found", 404));
    }
    conn.query(
        "SELECT * FROM file WHERE idFILE = ?",
        [req.params.id],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(200).json({
                status: "success",
                length: data?.length,
                data: data,
            });
        }
    );
};

exports.updateFile = (req, res, next) => {
    if (!req.params.id) {
        return next(new AppError("No file id found", 404));
    }
    conn.query(
        "UPDATE file SET file_name=?, file_description=?, file_upload=?, file_format=? WHERE idFILE=?",
        [
            req.body.file_name,
            req.body.file_description,
            req.body.file_upload,
            req.body.file_format,
            req.params.id,
        ],
        function (err, data, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "file info updated!",
            });
        }
    );
};

exports.deleteFile = (req, res, next) => {
    if (!req.params.id) {
        return next(new AppError("No todo id found", 404));
    }
    conn.query(
        "DELETE FROM file WHERE idFILE=?",
        [req.params.id],
        function (err, fields) {
            if (err) return next(new AppError(err, 500));
            res.status(201).json({
                status: "success",
                message: "file deleted!",
            });
        }
    );
};
```

#### appError.js
```js
class AppError extends Error {
    constructor(msg, statusCode) {
        super(msg);

        this.statusCode = statusCode;
        this.error = `${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}
module.exports = AppError;
```

#### errorHandler.js
```js
module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
};
```
