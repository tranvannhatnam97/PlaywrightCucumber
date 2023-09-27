import axios from "axios";
import { token } from "../apiToken";
async function getTestcaseFolderTree(projectId) {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/${projectId}/testcase/folder`,
    headers: {
      Authorization: `AioAuth ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve test cases");
  }
}

async function getTestCycleFolderTree(projectId) {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/${projectId}/testcycle/folder`,
    headers: {
      Authorization: `AioAuth ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to retrieve test cases");
  }
}

var projectId = "SMC";
getTestCycleFolderTree(projectId).then((res) =>
  console.log(JSON.stringify(res))
);
