export type ContactMessage = { name: string; email: string; phone: string; message: string };

/**
 * TODO: connect this to a real service (email, Formspree, an API route...).
 * Right now it only waits a moment and returns, so no message is sent anywhere yet.
 */
export async function sendMessage(_data: ContactMessage): Promise<void> {
  await new Promise((r) => setTimeout(r, 900));
}
