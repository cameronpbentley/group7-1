import { Link } from "react-router-dom";

export default function FriendItem({ user }: any) {
  return (
    <Link
      to={`/friends/${user.id}`}
      className="flex gap-3 items-center p-2 hover:bg-gray-100 rounded"
    >
      <div className="w-10 h-10 rounded-full bg-gray-300" />
      <p>{user.name}</p>
    </Link>
  );
}
