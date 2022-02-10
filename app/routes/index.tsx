import { redirect } from 'remix';
export function loader() {
  return redirect('/tickets', 308);
}

export default function () {
  return <></>;
}
