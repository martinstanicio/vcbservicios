export function getWhatsAppURL(phone: number, message?: string): URL {
  const url = new URL("https://api.whatsapp.com/send");

  url.searchParams.append("phone", phone.toString());
  if (message) url.searchParams.append("text", message);

  return url;
}
