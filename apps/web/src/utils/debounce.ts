export function debounce<TArgs extends unknown[]>(
  callback: (...args: TArgs) => void,
  wait: number,
) {
  let timeout: ReturnType<typeof setTimeout> | undefined;

  return (...args: TArgs) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => callback(...args), wait);
  };
}
