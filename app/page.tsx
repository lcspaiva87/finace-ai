import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/sign-in");
  }
  return (
    <div className="w-full flex items-center justify-center">
      <UserButton
        showName

      />
    </div>
  );
}
