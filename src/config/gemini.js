 

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
    GoogleGenAI,
} from '@google/genai';

async function main() {
    const ai = new GoogleGenAI({
        apiKey: "AIzaSyA9kca4pwBU8dMDm4zs9hnf9LJEbsIVuLs",
    });
    const tools = [
        {
            googleSearch: {
            }
        },
    ];
    const config = {
        thinkingConfig: {
            thinkingBudget: -1,
        },
        tools,
    };
    const model = 'gemini-2.5-pro';
    const contents = [
        {
            role: 'user',
            parts: [
                {
                    text: `INSERT_INPUT_HERE`,
                },
            ],
        },
    ];

    const response = await ai.models.generateContentStream({
        model,
        config,
        contents,
    });
    let fileIndex = 0;
    for await (const chunk of response) {
        console.log(chunk.text);
    }
}

main();
