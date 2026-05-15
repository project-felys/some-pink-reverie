import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return await fetch(`${process.env.OPENAI_SERVICE_PROVIDER}/health`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
