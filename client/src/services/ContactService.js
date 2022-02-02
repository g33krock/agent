import { baseURL } from "../baseURL";

class ContactService {
  async create (contactObject) {
    try {
      const response = await fetch(`${baseURL}/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactObject),
        });
        return await response.json();
      }
        catch (error) {
          
        }
  }
}

export const contactService = new ContactService();
