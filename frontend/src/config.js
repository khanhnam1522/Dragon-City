const address = process.env.NODE_ENV === "production" ? "https://dragoncity-server.herokuapp.com" : "http://localhost:8081";
const BACKEND = {
    ADDRESS: address
};

export { BACKEND };