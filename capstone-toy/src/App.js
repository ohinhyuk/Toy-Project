import { useEffect, useState } from "react";
import ExportCSV from "./components/ExportCSV";
import ImportExcel from "./components/ImportExcel";
import { Button, TextField } from "@mui/material";
import { useSearchAPI } from "./components/SearchAPI";
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

function App() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState([]);
  const [answer, setAnswer] = useState([]);

  const useChatGptApi = async () => {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "너는 유저가 입력하는 말을 가장 관련성이 높은 단일 검색어로만 간결하게 반환하는 챗봇이야.",
        },
        {
          role: "user",
          content:
            "나는 웹/앱 서비스를 만들려고 하는데 내가 만들려고 하는 서비스가 이미 존재하는 지가 궁금해서 존재하는 지 검색을 통해 알아볼 건데 검색 키워드를 만들어 줘",
        },
        {
          role: "assistant",
          content: "알겠어요. 어떤 서비스를 만들려고 하시나요??",
        },
        //    {"role": "user", "content": "한동대학교 주변에 인기 있는 맛집들을 알고 싶은데 이런 정보를 모아주는 서비스가 이미 있을까?"}
        // {"role": "user", "content": "노인 분들이 키오스크를 사용할 때 시각적인 불편함을 가지시는데 이걸 해결해주는 서비스가 이미 있을까?"},
        {
          role: "user",
          content: `${text}`,
          // "동아리의 리쿠르팅 과정을 자동화 시켜주고 모든 동아리들의 활동 정보와 리쿠르팅 정보를 모아볼 수 있는 서비스",
        },
        {
          role: "assistant",
          content: "알겠어요. 어떤 식으로 키워드를 반환해드리면 될까요??",
        },
        // {"role": "user", "content": "15글자 이하로 만들고 다른 말 필요 없이 키워드만 반환해 줘. 그리고 각각 서비스 라는 말을 붙여서 반환 해줘 이런식으로 세 개를 만들어 줘. 다른 말 말고 넘버링 없이 , 로 구분해서 줘"}
        {
          role: "user",
          content:
            "글자 수는 15글자 이상 , 30글자 이하로 만들고 다른 말 필요 없이 키워드만 반환해 줘. 넘버링 없이 , 로 구분해서 총 3개 줘",
        },
      ],
    });

    await setResponse(completion.data.choices[0].message.content.split(",")[0]);
    var result = await useSearchAPI(
      completion.data.choices[0].message.content.split(",")[0]
    );
    setAnswer((prev) => [...prev, result.items[0]]);
    // result = await useSearchAPI(response[1]);
    setAnswer((prev) => [...prev, result.items[1]]);
    // result = await useSearchAPI(response[2]);
    setAnswer((prev) => [...prev, result.items[2]]);

    // result = await useSearchAPI(response[2]);
    // setAnswer((prev) => prev + ", " + result.items[2].link);

    console.log(result);
    console.log(completion.data.choices[0].message);
    console.log(text);
  };

  return (
    <div className="App">
      <ExportCSV />
      <ImportExcel />
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        placeholder="검색하고자 하시는 서비스를 설명 해주세요."
      />
      <Button onClick={useChatGptApi}>검색</Button>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {answer.map((item) => (
          <div>
            <p>{item.title}</p>
            <a href={item.link}>{item.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
