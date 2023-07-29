import getAllUsers from '@/app/services/getAllUsers';
import {Metadata} from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Users Page',
  description: 'Users Page',
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users: User[] = await usersData;

  const content = (
    <section className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center">
            Back to <Link href="/">Home Page</Link>
        </h1>
        <h1 className="text-4xl font-bold text-center">Users Page</h1>
        <ul className="flex flex-col items-center justify-center">
            {users.map((user) => (
                <li key={user.id}>
                    <Link href={`/users/${user.id}`}>
                        {user.name}
                    </Link>
                </li>
            ))}
        </ul>
    </section>
  )
  
  return content;
}
