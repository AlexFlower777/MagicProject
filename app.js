const express = require("express");
const logger = require("morgan");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const hbs = require("hbs");

const app = express();
const PORT = 3000;

const indexRouter = require("./routes/index");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
hbs.registerPartials(path.join(__dirname, "views", "partials"));

app.use(
  session({
    secret: "apojrglkdzfng;sakg", // строка для шифрования сессии
    resave: false, // не пересохраняем сессию если не было изменений
    saveUninitialized: false, // не сохраняем сессию если она пустая
    cookie: { secure: false }, // не HTTPS
    name: "userCookie", // имя сессионной куки
    store: new FileStore(), // хранилище для куков - папка с файлами
  })
);

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
