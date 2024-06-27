export function Card({
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
        {title} Test card with some change <span>-&gt;</span>
      </h2>
      <p>{children}</p>
    </a>
  );
}
