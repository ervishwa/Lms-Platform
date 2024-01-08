"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default function NavbarRoutes() {
  const pathName = usePathname();

  const isTeacherPage = pathName?.startsWith("/teacher");
  const isStudentPage = pathName?.includes("/chapter");
  return (
    <div className="ml-auto h-full flex items-center gap-x-2">
      {isTeacherPage || isStudentPage ? (
        <Link href="/">
          <Button size="sm" variant="ghost">
            <LogOut className="h-4 w-4 mr-2" />
            Exit
          </Button>
        </Link>
      ) : (
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher Mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
