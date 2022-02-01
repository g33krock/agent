import { baseURL } from "../baseURL";

class ContactService {
  async create(contactObject) {
    const response = await fetch(`${baseURL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactObject),
    });
    return await response.json();
  }
}

export const contactService = new ContactService();
