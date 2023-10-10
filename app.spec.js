const it = require("./framework");
const expect = require("./framework");
const saludar = require("./app");

it("La función saluda", () => {
  expect(saludar("Platzi")).toBe("Hola Platzi");
});
