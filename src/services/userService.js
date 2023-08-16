import { httpAxios } from "@/helpers/httpHelper";

export async function SignUpUser(user) {
  try {
    const res = await httpAxios.post("/api/users", user);
    return res;
  } catch (err) {
    console.log(err);
  }
}
