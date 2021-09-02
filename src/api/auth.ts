import axios from "axios";

export default class Auth {
  static async authenticate(user: string, password: string): Promise<any> {
    const { data } = await axios.post("http://localhost:5000/authenticate", {
      user,
      password,
    });
    return data;
  }
}
