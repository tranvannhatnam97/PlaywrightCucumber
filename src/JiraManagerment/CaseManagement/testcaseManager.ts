import axios from "axios";

async function getTestcases(
  projectId: string,
  startAt,
  token: string
): Promise<any> {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://tcms.aiojiraapps.com/aio-tcms/api/v1/project/${projectId}/testcase?startAt=${startAt}&maxResults=100&needDataInRTF=false`,
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
async function getAllTestcases(projectId: string, token: string) {
  var i = 0;
  var testcases = [];
  var repeat = 0;
  const MAX_REPEAT = 5;
  let isLast;
  do {
    try {
      if (repeat > MAX_REPEAT - 1) {
        throw new Error("Over repeated, can't load testcase");
      }
      await getTestcases(projectId, i, token)
        .then((data) => {
          console.log(data.items.length);
          testcases = testcases.concat(data.items);
          repeat = 0;
          i = i + 100;
          isLast = data.isLast;
        })
        .catch((error) => {
          console.log(`Repeate ${repeat} error: `, error);
          repeat = repeat + 1;
        });
    } catch (error) {
      console.log(error.message);
    }
  } while (isLast !== true);
  return testcases;
}
const projectId = "SMC";
const token =
  "OWRhODg3NzEtYmEyZC0zYzUzLWI0MWItYTU2ZGI1MjRhNzE3LmM3YTRhOTQyLTQxM2QtNDM1Zi1iZDZlLWYyNDIyMmJiNzM4Yg==";

getAllTestcases(projectId, token).then((res) => console.log(res.length));

//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
