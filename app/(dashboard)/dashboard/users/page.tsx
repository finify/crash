
// function Users() {
//   return (
//     <h1 className="text-3xl">Users page</h1>
//   )
// }

// export default Users
import Link from "next/link";
const Page = () => {
  return (
    <div>
      <h1>Users Page</h1>
      <p>Users</p>
      <li> <Link href="/dashboard/users/1">Users 1</Link> </li>
      <li> <Link href="/dashboard/users/2">Users 2</Link> </li>
      <li> <Link href="/dashboard/users/3">Users 3</Link> </li>
      <li>User 2</li>
      <li>User 3</li>
      <li>User 4</li>
    </div>
  );
};

export default Page;
