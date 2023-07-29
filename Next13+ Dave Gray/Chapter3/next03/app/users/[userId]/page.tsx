import getUser from "@/app/services/getUser";
import getUserPosts from "@/app/services/getUserPosts";
import Link from "next/link";
import { Suspense } from "react";
import UserPosts from "./components/Posts";

type Params = {
    params: {
        userId: string;
    }
}

export async function generateMetadata({params: {userId}}: Params) {
    const userData:Promise<User> = await getUser(userId);
    const userPostsData:Promise<Post[]> = await getUserPosts(userId);
    const user = await userData;

    return {    
        title: user.name,
        description: user.name,
    }
}


export default async function UserPage({params: {userId}}: Params) {
    const userData:Promise<User> = getUser(userId);
    const userPostsData:Promise<Post[]> = getUserPosts(userId);
    console.log(userId);

    // const [user, userPosts] = await Promise.all([userData, userPostsData]);

    const user = await userData;

  return (
    <>
        <h1 className="text-4xl font-bold text-center">
            Back to <Link href="/users">Users Page</Link>
        </h1>

        <h1 className="text-4xl font-bold text-center">
            {user.name}&apos;s Posts  
        </h1>
        <Suspense fallback={
            <h1 className="text-4xl font-bold text-center">
                Loading...
            </h1>
        }>
            <UserPosts promise={userPostsData} />
        </Suspense>
    </>
  )
}
