const axios = require("axios");
require("dotenv").config();

const BASE_URL = "http://4.224.186.213/evaluation-service";

let accessToken = null;

async function getToken() {
  try {
    const response = await axios.post(`${BASE_URL}/auth`, {
      email: process.env.EMAIL,
      name: process.env.NAME,
      rollNo: process.env.ROLL_NO,
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      accessCode: process.env.ACCESS_CODE
    });
    accessToken = response.data.access_token;
    console.log("Token obtained successfully");
  } catch (error) {
    console.error("Auth error:", error.response?.data);
    throw error;
  }
}

async function getApi() {
  if (!accessToken) await getToken();
  return axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${accessToken}` }
  });
}

module.exports = { getApi };