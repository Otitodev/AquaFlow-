
import { GoogleGenAI, Type } from "@google/genai";

// Use process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getAIAssistance = async (message: string, history: { role: 'user' | 'model', text: string }[]) => {
  try {
    // Calling generateContent directly on ai.models
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: `You are AquaBot, the friendly AI assistant for AquaFlow Plumbing, based in Chicago.
        Your goal is to help customers diagnose plumbing issues and provide very rough price estimates for repairs in the Chicago area.
        
        Rules:
        1. Always be professional, reassuring, and slightly technical but accessible.
        2. If the issue sounds like an emergency (e.g., major flood, no water, sewage backup), tell them to call our 24/7 hotline immediately: (312) 555-0199.
        3. For price estimates, use a range (e.g., "$150 - $400") and always state that this is a "preliminary estimate" and "on-site inspection is required for a firm quote."
        4. Mention Chicago-specific nuances like freezing pipes in winter if relevant.
        5. Encourage booking an appointment at AquaFlowPlumbing.com.
        6. Keep responses concise and formatted with bullet points if helpful.`,
        temperature: 0.7,
      },
    });

    // Access .text property directly
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having a little trouble connecting to my central brain. Please call us directly at (312) 555-0199 for immediate assistance!";
  }
};

export const getSmartEstimate = async (issueDescription: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Provide a structured breakdown of possible causes and an estimated cost range for this plumbing issue: "${issueDescription}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            likelyCauses: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            estimatedRange: {
              type: Type.STRING,
              description: "Cost range like $200-$500"
            },
            urgencyLevel: {
              type: Type.STRING,
              description: "Low, Medium, High, or Emergency"
            },
            professionalAdvice: {
              type: Type.STRING
            }
          },
          required: ["likelyCauses", "estimatedRange", "urgencyLevel", "professionalAdvice"]
        }
      }
    });
    // Use response.text.trim() for parsing JSON responses
    return JSON.parse(response.text.trim());
  } catch (error) {
    console.error("Estimation Error:", error);
    return null;
  }
};
