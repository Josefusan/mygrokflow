import type { LeadPayload } from "@/lib/lead";
import { SITE_NAME, WEB3FORMS_ACCESS_KEY } from "@/lib/site";

/**
 * Email a captured lead to the inbox behind the Web3Forms access key. Runs in
 * the browser: Web3Forms rejects server-side calls on its free plan. Best-effort,
 * so an outage never blocks the download.
 */
export async function emailLead(data: LeadPayload): Promise<boolean> {
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New playbook lead: ${data.name}`,
        from_name: `${SITE_NAME} Playbook`,
        // Web3Forms echoes these named fields into the email body.
        name: data.name,
        email: data.email,
        phone: data.phone,
        instagram_or_linkedin: data.social,
        source: "Med Spa Front Desk Playbook",
      }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
