const express = require("express");
const { create } = require("express-handlebars");
const path = require("path");
require('./helper/link')()
const jamoliddin = require("jamoliddin9717");

const app = express();
const hbs = create({
  extname: "hbs",
  defaultLayout: "layout",
  runtimeOptions: {
    allowProtoMethodsByDefault: true,
    allowProtoPropertiesByDefault: true
}
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")));

const homeR = require("./routes/homeRouter");
const catalogR = require("./routes/catalogRouter");
const orderRouter = require("./routes/order");
const savedRouter = require("./routes/saved");
const contactRouter = require("./routes/contact");
const vacansyRouter = require("./routes/vacansy");
const addRouter = require("./routes/add");

app.use("/", homeR);
app.use("/catalog", catalogR);
app.use("/order", orderRouter);
app.use("/saved", savedRouter);
app.use("/contact", contactRouter);
app.use("/vacansy", vacansyRouter);
app.use("/add", addRouter);

try {
  const port = normalizePort(process.env.port || 3000);
  app.listen(port, () => {
    jamoliddin.consoleDesign(
      "success",
      `Server ${port} porti bilan eshitiliyapti.`
    );

    console.log(jamoliddin.date("MMM Do YY"));
  });
} catch (error) {
  console.error(error);
}

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}
