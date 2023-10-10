const saludar = require("../app");

var x = true;
var a = {};
var b = {};

describe("verificar que la variable es true", () => {
  it("La función saluda", () => {
    expect(saludar("Platzi")).toBe("Hola Platzi");
  });
  it("La función saluda", () => {
    expect(saludar("Platzi")).toContain("Hola");
  });
  it("X es true", () => {
    expect(x).toBeTruthy();
    expect(x).toEqual(true);
  });
  it("objetos iguales", () => {
    expect(a).toEqual(b);
  });
});
