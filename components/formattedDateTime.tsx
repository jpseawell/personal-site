import { DateTime } from "luxon";

type FormattedDateTimeProps = {
  isoDateTime: string;
  neverRelative?: boolean;
};

const formatDateTime = (dtStr: string, neverRelative: boolean) => {
  const dateTime = DateTime.fromISO(dtStr);

  if (neverRelative || Math.ceil(dateTime.diffNow("days").as("days")) < -3)
    return dateTime.toFormat("MMM. dd, yyyy");

  return dateTime.toRelative();
};

export default function FormattedDateTime({
  isoDateTime,
  neverRelative = false,
}: FormattedDateTimeProps) {
  return formatDateTime(isoDateTime, neverRelative);
}
