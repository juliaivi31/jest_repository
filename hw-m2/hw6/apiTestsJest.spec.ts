import superagent, { SuperAgent } from "superagent";

describe("api-tests-1", function() {
    beforeEach(() => {
        console.log("get-method")
    })
    test("list-users", async () => {
        const response = await superagent.get("https://reqres.in/api/users?page=2");
        expect(response.status).toBe(200);
    });
    test("single-user", async () => {
        const body = await superagent.get("https://reqres.in/api/users/2");
        expect(body.id).toBe(2);
    });
    test("get", async () => {
        const response = await superagent.get("https://reqres.in/api/users?page=2");
        console.log(response);
        expect(response.status).toBe(200);
    });
    // test("get", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     console.log(response);
    //     expect(response.status).toBe(200);
    // });
    // test("get", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     console.log(response);
    //     expect(response.status).toBe(200);
    // });
    // test("get", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     console.log(response);
    //     expect(response.status).toBe(200);
    // });
    // test("get", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     console.log(response);
    //     expect(response.status).toBe(200);
    // });
    // test("get", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     console.log(response);
    //     expect(response.status).toBe(200);
    // });
    // test("get", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     console.log(response);
    //     expect(response.status).toBe(200);
    // });
    // test("get", async () => {
    //     const response = await superagent.get("https://reqres.in/api/users?page=2");
    //     console.log(response);
    //     expect(response.status).toBe(200);
    // });
});