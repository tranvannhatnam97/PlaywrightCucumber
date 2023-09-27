import axios from "axios";
import { token, serverUrl } from "../apiToken";

async function getTestcases(projectId: string, startAt): Promise<any> {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${serverUrl}/api/v1/project/${projectId}/testcase?startAt=${startAt}&maxResults=100&needDataInRTF=false`,
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
async function getPackTestcases(
  projectId: string,
  startAt: number,
  parallel = 1
): Promise<any> {
  var testcases = [];
  var testPack = {
    testcases: undefined,
    isLast: undefined,
  };
  var items = Array.from({ length: parallel }, (_, index) => index);
  var repeat = 0;
  var isLast: Boolean;
  const MAX_REPEAT = 5;
  const promises = items.map(async (item) => {
    try {
      if (repeat > MAX_REPEAT - 1) {
        throw new Error("Over repeated, can't load testcase");
      }
      await getTestcases(projectId, startAt * 100 + item * 100)
        .then((data) => {
          console.log(data.items.length);
          console.log(data.items[0].key);
          testcases = testcases.concat(data.items);
          // repeat = 0;
          if (item == parallel - 1) {
            isLast = data.isLast;
          }
        })
        .catch((error) => {
          console.log(`Repeate ${repeat} error: `, error);
          repeat = repeat + 1;
        });
    } catch (error) {
      console.log(error.message);
    }
  });
  await Promise.all(promises);
  testPack.testcases = testcases;
  testPack.isLast = isLast;
  return testPack;
}
async function getAllTestcases(projectId: string, parallel = 1) {
  var i = 0;
  var testcases = [];
  var isLast;
  do {
    try {
      var pack = await getPackTestcases(projectId, i, parallel);
      testcases = testcases.concat(pack.testcases);
      isLast = pack.isLast;
      i = i + parallel;
    } catch (error) {
      console.log(error.message);
    }
  } while (isLast !== true);
  return testcases;
}
const projectId = "SMC";
getAllTestcases(projectId, 5).then((res) => console.log(res.length));
// getPackTestcases(projectId, 5).then((res) => console.log(res.isLast));

//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
