export const API = {
  get: async function (url = "", params = {}) {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        params,
      });
      return response.json();
    } catch (error) {
      throw new Error("Problems trying get data 🤢🤢...");
    }
  },
};
