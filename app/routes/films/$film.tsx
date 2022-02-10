import { useCatch } from 'remix';

export default function () {
  return (
    <section>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. In assumenda
        consequatur ex tempora sit, ea aliquam nostrum ipsam. Eum dolorem
        reprehenderit earum tenetur ullam cupiditate laborum adipisci
        consectetur deleniti quidem?
      </p>
    </section>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  let message;
  switch (caught.status) {
    case 404:
      message = <p>Oh no!!! Looks like that film doesn't exist</p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <section>
      <h1>
        {caught.status}: {caught.statusText}
      </h1>
      {message}
    </section>
  );
}
