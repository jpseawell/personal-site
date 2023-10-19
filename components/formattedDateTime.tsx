import { DateTime } from "luxon";

type FormattedDateTimeProps = {
  isoDateTime: string;
};

const formatDateTime = (dtStr: string) => {
  const dateTime = DateTime.fromISO(dtStr);

  if (Math.ceil(dateTime.diffNow("months").as("months")) < -1)
    return dateTime.toFormat("MMMM dd, yyyy");

  return dateTime.toRelative();
};

export default function FormattedDateTime({
  isoDateTime,
}: FormattedDateTimeProps) {
  return formatDateTime(isoDateTime);
}
