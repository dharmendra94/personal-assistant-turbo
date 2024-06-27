import { Link } from "@remix-run/react";

const Sidebar = () => {
  return (
    <div className="w-48 bg-gray-800 h-full fixed">
      <ul className="list-none p-0">
        <li className="border-b border-gray-700">
          <Link
            to="#option1"
            className="block text-white py-4 px-4 hover:bg-gray-600"
          >
            Home
          </Link>
        </li>
        <li className="border-b border-gray-700">
          <Link
            to="#option2"
            className="block text-white py-4 px-4 hover:bg-gray-600"
          >
            Compliance
          </Link>
        </li>
        <li className="border-b border-gray-700">
          <Link
            to="#option3"
            className="block text-white py-4 px-4 hover:bg-gray-600"
          >
            Tax
          </Link>
        </li>
        <li className="border-b border-gray-700">
          <Link
            to="#option4"
            className="block text-white py-4 px-4 hover:bg-gray-600"
          >
            Legal
          </Link>
        </li>
        <li className="border-b border-gray-700">
          <Link
            to="#option5"
            className="block text-white py-4 px-4 hover:bg-gray-600"
          >
            Partnerships
          </Link>
        </li>
        <li className="border-b border-gray-700">
          <Link
            to="#option6"
            className="block text-white py-4 px-4 hover:bg-gray-600"
          >
            Books
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
