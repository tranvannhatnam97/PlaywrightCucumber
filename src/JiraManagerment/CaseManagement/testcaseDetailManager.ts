import axios from "axios";
import { token, serverUrl } from "../apiToken";
async function getTestcaseDetail(
  projectId: string,
  testcaseId: string
): Promise<any> {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${serverUrl}/api/v1/project/${projectId}/testcase/${testcaseId}/detail?needDataInRTF=false`,
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
getTestcaseDetail("SMC", "SMC-TC-2001").then((data) => console.log(data));

async function createTestcase() {}
