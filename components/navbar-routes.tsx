import { UserButton } from "@clerk/nextjs";

export default function NavbarRoutes() {
  return (
    <div className="ml-auto h-full flex items-center gap-x-2">
      <UserButton />
    </div>
  );
}
