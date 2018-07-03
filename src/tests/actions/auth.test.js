import { login, logout } from "../../actions/auth";

test("should setup login auth action object", () => {
    const uid = "abc-123"
    const action = login(uid);
    expect(action).toEqual( {
        type: "LOGIN",
        uid
    });
});

test("should setup logout auth action object", () => {
    const action = logout();
    expect(action).toEqual( {
        type: "LOGOUT",
    });
});