import { ActionLogin, ActionRegister } from "@/types";

export const handleLogin = async (
  email: string,
  password: string
): Promise<ActionLogin> => {
  try {
    const response = await fetch("https://assign-api.piton.com.tr/api/rest/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};

export const handleRegister = async (
  name: string,
  email: string,
  password: string,
) => {
  try {
    const data = {
      name: name,
      email: email,
      password: password
    }

    const response = await fetch("https://assign-api.piton.com.tr/api/rest/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        data
      ),
    });
    const result = await response.json();
    console.log("result: ")
    console.log(result)
    return result;
  } catch (error) {
    console.log("hata ile karşılaşıldı ?")
    console.log(error)
    throw error;
  }
};