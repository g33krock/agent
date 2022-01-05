import { baseURL } from "../baseURL";

class FAQService {
  async all() {
    const response = await fetch(`${baseURL}/fax`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  async one(faqObject) {
    const response = await fetch(`${baseURL}/fak/` + faqObject.faqID, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  async create(faqObject) {
    const response = await fetch(`${baseURL}/fak`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(faqObject),
    });
    return await response.json();
  }

  async update(faqObject) {
    const response = await fetch(`${baseURL}/fak/` + faqObject.faqID, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(faqObject),
    });
    const data = response;
    console.log(data);
  };

  async delete(faqObject) {
    const response = await fetch(`${baseURL}/fak/` + faqObject.faqID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response;
  }
}

export const faqService = new FAQService();
