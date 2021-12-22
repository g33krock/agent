import { baseURL } from "../baseURL";

class AgentService {
  async all() {
    const response = await fetch(`${baseURL}/agents`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  async one(agentObject) {
    const response = await fetch(`${baseURL}/agent/` + agentObject.agentID, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  async addAgents(agentObject) {
    const response = await fetch(`${baseURL}/addagents/` + agentObject.agentID, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  async create(agentObject) {
    const response = await fetch(`${baseURL}/agent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agentObject),
    });
    return await response.json();
  }

  async update(agentObject) {
    const response = await fetch(`${baseURL}/agent/` + agentObject.agentID, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(agentObject),
    });
    const data = response;
    console.log(data);
  };

  async delete(agentObject) {
    const response = await fetch(`${baseURL}/agent/` + agentObject.agentID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response;
  }
}

export const agentService = new AgentService();
