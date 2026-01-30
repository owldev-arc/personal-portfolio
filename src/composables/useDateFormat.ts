export function useDateFormat() {
  function formatDate(
    date: string | null | undefined,
    locale: string = "id-ID",
    options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
    },
  ): string {
    if (!date) return "";

    try {
      return new Date(date).toLocaleDateString(locale, options);
    } catch {
      return "";
    }
  }

  function formatFullDate(
    date: string | null | undefined,
    locale: string = "id-ID",
  ): string {
    return formatDate(date, locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return {
    formatDate,
    formatFullDate,
  };
}
