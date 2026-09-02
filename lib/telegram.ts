import type { ApplyPayload } from "@/lib/apply";

export async function notifyTelegram(
  data: ApplyPayload,
): Promise<{ sent: boolean; error?: string }> {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return { sent: false, error: "Telegram not configured" };
  }

  const text = [
    "Diagnostic request",
    `Role: ${data.role}`,
    `Team size: ${data.teamSize}`,
    `Workflow: ${data.workflow}`,
    `Who does it today: ${data.who}`,
    `Rate: ${data.rate || "(disqualified before Q4)"}`,
    `Decision-maker: ${data.decider}`,
    `What to build: ${data.need}`,
    `Contact channel: ${data.channel}`,
    `Handle or email: ${data.handle}`,
  ].join("\n");

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      },
    );

    if (!response.ok) {
      return { sent: false, error: "Telegram send failed" };
    }

    return { sent: true };
  } catch {
    return { sent: false, error: "Telegram send failed" };
  }
}
