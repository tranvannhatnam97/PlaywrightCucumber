import axios from "axios";

async function getTestcaseDetail(
  projectId: string,
  testcaseId: string,
  token: string
): Promise<any> {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/${projectId}/testcase/${testcaseId}/detail?needDataInRTF=false`,
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
getTestcaseDetail(
  "SMC",
  "SMC-TC-1994",
  "OWRhODg3NzEtYmEyZC0zYzUzLWI0MWItYTU2ZGI1MjRhNzE3LmM3YTRhOTQyLTQxM2QtNDM1Zi1iZDZlLWYyNDIyMmJiNzM4Yg=="
).then((data) => console.log(data));
