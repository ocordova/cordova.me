export async function json(...args: Parameters<typeof fetch>) {
  const response = await fetch(...args);

  return await response.json();
}
