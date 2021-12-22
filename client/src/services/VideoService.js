import { baseURL } from "../baseURL";

class VideoService {
  async all() {
    const response = await fetch(`${baseURL}/videos`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  async one(videoObject) {
    const response = await fetch(`${baseURL}/video/` + videoObject.videoID, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  async create(videoObject) {
    const response = await fetch(`${baseURL}/video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(videoObject),
    });
    return await response.json();
  }

  async update(videoObject) {
    const response = await fetch(`${baseURL}/video/` + videoObject.videoID, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(videoObject),
    });
    const data = response;
    console.log(data);
  };

  async delete(videoObject) {
    const response = await fetch(`${baseURL}/video/` + videoObject.videoID, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return response;
  }
}

export const videoService = new VideoService();
