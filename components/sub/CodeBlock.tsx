"use client";

import Prism from "prismjs";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-go";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";
import { useEffect, useState } from "react";

interface CodeBlockProps {
  pythonCode?: string;
  golangCode?: string;
  nodejsCode?: string;
  curlCode?: string;
  title?: string;
}

// 示例代码，实际使用时可替换为真实代码
const pythonCode = `# Using Token authentication
import requests
# Your API token from the platform dashboard or API settings
token = "tk_095fa33201c94b108aee"
# Use streaming response
response = requests.post(
    "https://deepcore.top/api/open/agents/{"agentId}/dialogue",
    headers={
        "X-API-Token": token
    },
    json={
        "message": "Hello, Agent!",
        "conversation_id": "optional-conversation-id",
        "init_flag": False
    },
    stream=True  # Enable streaming
)
# Process streaming response
for chunk in response.iter_lines():
    if chunk:
        # Filter out empty lines
        data = chunk.decode('utf-8')
        if data.startswith('data: '):
            # Remove 'data: ' prefix
            content = data[6:]
            print(content)`;

const golangCode = `// Using Token authentication
package main
import (
    "bufio"
    "bytes"
    "encoding/json"
    "fmt"
    "net/http"
    "strings"
)
func main() {
    // Your API token from the platform dashboard or API settings
    token := "tk_095fa33201c94b108aee"
    // Use token to call API
    apiURL := "/api/open/agents/{"agentId}/dialogue"
    apiReqBody := []byte(\`{
        "message": "Hello, Agent!",
        "conversation_id": "optional-conversation-id",
        "init_flag": false
    }\`)
    apiReq, _ := http.NewRequest("POST", apiURL, bytes.NewBuffer(apiReqBody))
    apiReq.Header.Set("Content-Type", "application/json")
    apiReq.Header.Set("X-API-Token", token)
    client := &http.Client{}
    apiResp, err := client.Do(apiReq)
    if err != nil {
        fmt.Println("Error calling API:", err)
        return
    }
    defer apiResp.Body.Close()
    // Process streaming response
    scanner := bufio.NewScanner(apiResp.Body)
    for scanner.Scan() {
        line := scanner.Text()
        if strings.HasPrefix(line, "data: ") {
            // Remove 'data: ' prefix
            content := line[6:]
            fmt.Println(content)
        }
    }
    if err := scanner.Err(); err != nil {
        fmt.Println("Error reading response:", err)
    }
}`;

const nodejsCode = `// TypeScript example
// First install required dependencies:
// npm install node-fetch@2 node-fetch@2
import fetch from 'node-fetch';
async function callAPI(): Promise<void> {
    // Your API token from the platform dashboard or API settings
    const token = "tk_095fa33201c94b108aee";
    try {
        const apiResponse = await fetch("/api/open/agents/{"agentId}/dialogue', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Token': token
            },
            body: JSON.stringify({
                message: 'Hello, Agent!',
                conversation_id: 'optional-conversation-id',
                init_flag: false
            })
        });
        // Process streaming response
        if (apiResponse.body) {
            // Create a readable stream
            const reader = apiResponse.body;
            // Handle stream processing
            reader.on('readable', () => {
                let chunk;
                while (null !== (chunk = reader.read())) {
                    const lines = chunk.toString().split('\\n');
                    for (const line of lines) {
                        if (line.startsWith('data: ')) {
                            // Remove 'data: ' prefix
                            const content = line.substring(6);
                            console.log(content);
                        }
                    }
                }
            });
            // Handle errors
            reader.on('error', (err) => {
                console.error('Error reading stream:', err);
            });
        }
    } catch (error) {
        console.error('Error calling API:', error);
    }
}
// Execute function
callAPI()().catch(console.error);`;

const curlCode = `# Using token authentication
# Get your API token from the platform dashboard or API settings
# Use token to call API (streaming response)
curl -X POST \\
  "https://deepcore.top/api/open/agents/{"agentId}/dialogue" \\
  -H "X-API-Token: tk_095fa33201c94b108aee" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Hello, Agent!",
    "conversation_id": "optional-conversation-id",
    "init_flag": false
  }'
# Response will be returned as a stream, with each line starting with "data: " containing the AI's reply`;

export default function CodeBlock({
  pythonCode: pythonCodeProp,
  golangCode: golangCodeProp,
  nodejsCode: nodejsCodeProp,
  curlCode: curlCodeProp,
  title,
}: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState<"python" | "golang" | "nodejs" | "curl">("python");

  useEffect(() => {
    Prism.highlightAll();
  }, [activeTab]);

  return (
    <div className="my-12 mt-40 code-block z-20 mx-auto relative w-[680px] max-w-4xl">
      <div className="backdrop-blur-lg  rounded-xl  overflow-hidden shadow-2xl border border-gray-800/50">
        {/* macOS window controls bar */}
        <div className="flex items-center  px-4 py-3  border-b border-gray-700/50">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56] flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-[10px]">×</span>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E] flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-[10px]">−</span>
            </div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F] flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-[10px]">+</span>
            </div>
          </div>
          <div className="ml-4 text-sm text-gray-400text-center">{title}</div>
        </div>

        {/* Language tabs */}
        <div className="flex ">
          <button
            className={`px-6 py-2 text-sm ${
              activeTab === "python" ? "text-[#9ECE6A] border-b-2 border-[#9ECE6A]" : "text-gray-400"
            } transition-colors duration-200`}
            onClick={() => setActiveTab("python")}
          >
            Python
          </button>
          <button
            className={`px-6 py-2 text-sm ${
              activeTab === "golang" ? "text-[#9ECE6A] border-b-2 border-[#9ECE6A]" : "text-gray-400"
            } transition-colors duration-200`}
            onClick={() => setActiveTab("golang")}
          >
            Golang
          </button>
          <button
            className={`px-6 py-2 text-sm ${
              activeTab === "nodejs" ? "text-[#9ECE6A] border-b-2 border-[#9ECE6A]" : "text-gray-400"
            } transition-colors duration-200`}
            onClick={() => setActiveTab("nodejs")}
          >
            Node.js
          </button>
          {/* <button
            className={`px-6 py-2 text-sm ${
              activeTab === "curl" ? "text-[#9ECE6A] border-b-2 border-[#9ECE6A]" : "text-gray-400"
            } transition-colors duration-200`}
            onClick={() => setActiveTab("curl")}
          >
            cURL
          </button> */}
        </div>

        {/* Code content */}
        <div className="p-6 overflow-auto max-h-[450px] font-mono text-sm scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          {activeTab === "python" && (
            <pre className="language-python" style={{ background: "transparent" }}>
              <code>{pythonCodeProp || pythonCode}</code>
            </pre>
          )}
          {activeTab === "golang" && (
            <pre className="language-go" style={{ background: "transparent" }}>
              <code>{golangCodeProp || golangCode}</code>
            </pre>
          )}
          {activeTab === "nodejs" && (
            <pre className="language-javascript" style={{ background: "transparent" }}>
              <code>{nodejsCodeProp || nodejsCode}</code>
            </pre>
          )}
          {activeTab === "curl" && (
            <pre className="language-bash" style={{ background: "transparent" }}>
              <code>{curlCodeProp || curlCode}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
