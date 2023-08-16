import { httpAxios } from "@/helpers/httpHelper";

export async function addTask(task) {
  try {
    const res = await httpAxios.post("/api/tasks", task);
    return res;
  } catch (error) {
    console.log(error);
  }
}
