import {} from '@remix-run/runtime';

export function loader(loaderArgs: LoaderArgs) {

}

export default function TestSubRoute({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}): JSX.Element {
  const classes = className ? `${className} bg-indigo-500` : "bg-indigo-500";

  return (
    <a
      className={classes}
      href={`${href}?utm_source=create-turbo&utm_medium=basic&utm_campaign=create-turbo"`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2>
        {title} TestSubRoute card with some <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
