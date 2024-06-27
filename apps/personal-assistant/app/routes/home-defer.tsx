import { Await, defer, useLoaderData } from "@remix-run/react";
import { Suspense } from "react";

export async function loader() {
  const message = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello from the deferred loader!");
    }, 1000);
  });

  const ordersInfo = new Promise<{ orderCount: number }>((resolve) => {
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
    });
  });

  const tasks = await tasksProm;

  return defer({ message, ordersInfo, tasks });
}

export default function HomeDefer() {
  const {
    message: messageProm,
    ordersInfo,
    tasks,
  } = useLoaderData<typeof loader>();

  return (
    <div className="ml-48 p-8">
      <Suspense
        fallback={
          <div className="animate-pulse bg-gray-300 h-8 w-full mb-4"></div>
        }
      >
        <Await resolve={messageProm}>
          {(message) => <h1 className="text-brand-500">{message}</h1>}
        </Await>
      </Suspense>

      <Suspense
        fallback={
          <div className="animate-pulse bg-gray-300 h-8 w-full mb-4"></div>
        }
      >
        <Await resolve={ordersInfo}>
          {({ orderCount }) => <h1>{orderCount}</h1>}
        </Await>
      </Suspense>

      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map((task: { id: number; title: string }) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
