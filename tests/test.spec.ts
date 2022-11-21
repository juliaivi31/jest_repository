import superagent, { SuperAgent } from "superagent";

describe("my first story", function() {
    test("my first test case", async () => {
        const response = await superagent.get("https://reqres.in/api/users?page=2");
        console.log(response);
        expect(response.status).toBe(404);
    })
})