import superagent from "superagent";

    describe("list-users", () => {
        beforeAll(() => {
            console.log("start")
        })
        it("status", async () => {
        const response = await superagent.get("https://reqres.in/api/users?page=2");
        expect(response.status).toBe(200);
        });
    });
    // describe("single-user-not-found", () => {
    //     it("status", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users/23");
    //     expect(response.status).toBe(404);
    //     });
    // });
    describe("API_2 HEAD", () => {
        it("Body", async () => {
          const res = await superagent.head("https://reqres.in/api/users?page=2");
          expect(res.body).toEqual({});
        });
      });
    const expectedObd: {name: string} = {
        name: "cerulean"
    };
    describe("single-user-not-found", () => {
        it("body", async () => {
        const res = await superagent
        .get("https://reqres.in/api/unknown").query({id: 1});
        expect(res.body.data[0].name).toEqual(expectedObd.name);
        });
    });
    // describe("single-user", () => {
    //     it("status", async () => {
    //     const response = await superagent.head("https://reqres.in/api/users?page=2");
    //     expect(response.body).toEqual("data");
    //     });
    // });
    // describe("list-users", () => {
    //     it("status", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     expect(response.status).toBe(200);
    //     });
    // });
    // describe("list-users", () => {
    //     it("status", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     expect(response.status).toBe(200);
    //     });
    // });
    // describe("create-user-post", () => {
    //     // @ts-ignore
    //     const response: any
    //     superagent
    //     .post('https://reqres.in/api/users')
    //     .set("Content-Type", "application/json")
    //     .send({"name": "morpheus", "job": "leader"})
    //     expect(response.status).toBe(200);
        // });
    // });
    // describe("list-users", () => {
    //     it("status", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     expect(response.status).toBe(200);
    //     });
    // });
    // describe("list-users", () => {
    //     it("status", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     expect(response.status).toBe(200);
    //     });
    // });
    // describe("list-users", () => {
    //     it("status", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     expect(response.status).toBe(200);
        // });
    // });
    afterAll(() => {
        console.log("end")
    });