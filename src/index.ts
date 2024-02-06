import express, { Request, Response } from "express";
import { getHostData } from "./lib";
import path from "path";
import Handlebars from "hbs";

const app = express();
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "..", "views"));
Handlebars.registerHelper('print_txt', function (this: any) {
  return this;
})
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/error", (req: Request, res: Response) => res.render("error"));

app.get("/resolve-host", async (req: Request, res: Response) => {
  const hostname = (req.query.hostname as string) || "example.com";
  try {
    const result = await getHostData(hostname);
    return res.render("result", {
      message: `dns records for ${hostname}`,
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.render("error", {
      message: `Failed to fetched dns records for ${hostname}`,
      data: null,
    });
  }
});

app.get("/api/resolve-host", async (req: Request, res: Response) => {
  const hostname = (req.query.hostname as string) || "example.com";
  try {
    const result = await getHostData(hostname);
    return res.json({
      success: true,
      message: `Fetched dns records for ${hostname}`,
      data: result,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      success: false,
      message: `Failed to fetched dns records for ${hostname}`,
      data: null,
    });
  }
});

app.get("/my-ip", (req: Request, res: Response) => {
  const myip = req.ip;
  return res.json({
    success: true,
    message: "My IP Address",
    data: myip,
  });
});

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);
