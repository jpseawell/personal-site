import { DateTime } from "luxon";

type FormattedDateTimeProps = {
  isoDateTime: string;
};

const formatDateTime = (dtStr: string) => {
  const dateTime = DateTime.fromISO(dtStr);

  if (Math.ceil(dateTime.diffNow("days").as("days")) < -3)
    return dateTime.toFormat("MMM. dd, yyyy");

  return dateTime.toRelative();
};

export default function FormattedDateTime({
  isoDateTime,
}: FormattedDateTimeProps) {
  return formatDateTime(isoDateTime);
}
