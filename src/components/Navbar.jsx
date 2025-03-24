import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-between p-4">
        <nav className="flex items-center space-x-4">
          <Image src="/logo.png" alt="logo" width={200} height={40} />
          <Link href="/">
            <Button>Home</Button>
          </Link>
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <Button>About</Button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
