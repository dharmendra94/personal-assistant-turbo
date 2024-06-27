import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const messageProm = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello from the loader!");
    }, 2000);
  });

  const ordersInfoProm = new Promise<{ orderCount: number }>((resolve) => {
    setTimeout(() => {
      resolve({ orderCount: 5 });
    }, 3000);
  });

  const tasksProm = new Promise<{ id: number; title: string }[]>((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Task 1" },
        { id: 2, title: "Task 2" },
        { id: 3, title: "Task 3" },
      ]);
    }, 300);
  });

  const [message, ordersInfo, tasks] = await Promise.all([
    messageProm,
    ordersInfoProm,
    tasksProm,
  ]);

  return { message, ordersInfo, tasks };
}

export default function Home() {
  const { message, ordersInfo, tasks } = useLoaderData<typeof loader>();

  return (
    <div className="ml-48 p-8">
      <h1>{message}</h1>

      <h1>{ordersInfo.orderCount}</h1>

      <div>
        <h1>Tasks</h1>
        <ul>
          {tasks.map((task: { id: number; title: string }) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
