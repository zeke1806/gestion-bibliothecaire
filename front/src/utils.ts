import dayjs from "dayjs";

export const formatDate = (date: string | undefined) =>
  dayjs(date).format("DD/MM/YYYY");
