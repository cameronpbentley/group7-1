import { Link } from "react-router-dom";
import usersDB from "../data/users.json";

export default function Profile() {
  const currentUser = usersDB.UsersDB[0];

  const followersCount = currentUser.followers?.length ?? 237;
  const followingCount = currentUser.following?.length ?? 35;
  const filmsAllTime = currentUser.filmsAllTime ?? 31;
  const filmsThisYear = currentUser.filmsThisYear ?? 9;

  const friends = currentUser.friends ?? [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Emma Jones" },
    { id: 3, name: "Jake" },
    { id: 4, name: "Tina" },
    { id: 5, name: "Ricky" },
  ];

  return (
    <section className="p-4 space-y-6">
      <header className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-gray-300" />

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{currentUser.username}</h1>

          <div className="flex gap-6">
            <Link to="/friends?tab=followers">
              <p className="text-sm hover:underline cursor-pointer">
                Followers: {followersCount}
              </p>
            </Link>

            <Link to="/friends?tab=following">
              <p className="text-sm hover:underline cursor-pointer">
                Following: {followingCount}
              </p>
            </Link>
          </div>

          <div className="flex gap-6 text-sm">
            <p>Films Watched (All Time): {filmsAllTime}</p>
            <p>Films Watched (This Year): {filmsThisYear}</p>
          </div>

          <div className="flex gap-3 mt-2">
            <button className="px-3 py-1 bg-gray-200 rounded">Share Profile</button>

            <Link to="/settings">
              <button className="px-3 py-1 bg-gray-200 rounded">Settings</button>
            </Link>

            <Link to="/achievements">
              <button className="px-3 py-1 bg-gray-200 rounded">Achievements</button>
            </Link>
          </div>
        </div>
      </header>

      <section>
        <h2 className="text-lg font-semibold mb-3">
          Your Friends ({friends.length})
        </h2>

        <ul className="space-y-3">
          {friends.map((friend) => (
            <li key={friend.id} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <Link
                to={`/friends/${friend.id}`}
                className="hover:underline"
              >
                {friend.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
