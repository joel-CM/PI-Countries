const { Country, conn } = require("../../src/db.js");
const { expect, beforeAll, beforeEach } = require("@jest/globals");

describe("Country model", () => {
  beforeAll(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Country.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Country.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Country.create({ name: "Argentina" });
      });
    });
  });
});
