export const fetcher = (url: string) =>
  window.fetch(url).then(res => res.json());
