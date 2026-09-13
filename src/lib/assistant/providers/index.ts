import { anthropicModel, geminiModel, type ProviderId } from "../config";
import { createAnthropicProvider } from "./anthropic";
import { createGeminiProvider } from "./gemini";
import { createMockProvider } from "./mock";
import type { AssistantProvider } from "./types";

type Env = Record<string, string | undefined>;

export function createProvider(id: ProviderId, env: Env = process.env): AssistantProvider {
  switch (id) {
    case "anthropic":
      return createAnthropicProvider(env.ANTHROPIC_API_KEY!.trim(), anthropicModel(env));
    case "gemini":
      return createGeminiProvider(env.GEMINI_API_KEY!.trim(), geminiModel(env));
    case "mock":
      return createMockProvider();
  }
}

export type { AssistantProvider } from "./types";
