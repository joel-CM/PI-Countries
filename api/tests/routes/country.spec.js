/* eslint-disable import/no-extraneous-dependencies */
const { describe, expect, it } = require("@jest/globals");

const app = require("../../src/app.js");
const session = require("supertest");

const agent = session(app);

describe("Country routes", () => {
  it("devería devolver un estatus 200", async () => {
    await agent.get("/api/countries").expect(200);
  });

  it("devería devolver un objeto", async () => {
    const res = await agent.get("/api/countries");
    expect(res.body).toBeInstanceOf(Object);
  });

  it("el obj devuelto devería tener las propiedades 'from' y 'results'", async () => {
    const res = await agent.get("/api/countries");
    expect(res.body).toHaveProperty("from", "DB");
    expect(res.body.results).toBeInstanceOf(Array);
  });
});
