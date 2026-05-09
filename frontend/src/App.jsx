import { useState } from "react";
import axios from "axios";


function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (!prompt) return;

    try {
      setLoading(true);

      const res = await axios.post(
        "http://127.0.0.1:8000/chat",
        {
          prompt,
        }
      );

      setResponse(res.data.response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <h1>Orchestrix</h1>

      <textarea
        rows={8}
        cols={50}
        placeholder="Ask engineering question..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      /> 

      <button onClick={handleSubmit}>
        {loading ? "Loading..." : "Ask AI"}
      </button>

      <div
        style={{
          width: "600px",
          border: "1px solid gray",
          padding: "20px",
          whiteSpace: "pre-wrap",
        }}
      >
        {response}
      </div>
    </div>
  );
}

export default App;