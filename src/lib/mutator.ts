export const customFetch = async <T>(
  url: string,
  options: RequestInit
): Promise<T> => {
  const response = await fetch(url, {
    ...options,
    credentials: "include",
  });

  const data = await response.json();
  return data.data;
};
