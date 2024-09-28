import SignOut from "./SignOut";
import { auth, signOut } from "../../auth";

export default async function Header() {
    const session = await auth();

    return (
        <header>
        <form className="w-screen flex justify-end bg-sky-600"
          action={async () => {
            'use server';
            await signOut();
          }}>
          {session ? <SignOut /> : <div></div>}
        </form>
        </header>

    )
} 