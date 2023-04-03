import { FaEnvelope } from "react-icons/fa";
import { FC } from "react";
import { Page } from "@src/pages/_app";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className="z-10 flex flex-wrap items-center justify-between">
      <div className={"w-full justify-between p-6"}>
        <div className="flex flex-shrink-0 pr-6">
          <Link
            href={Page.Home}
            className={"flex cursor-pointer flex-row items-center gap-4"}
          >
            <FaEnvelope color={"white"} />
            <p className="text-lg font-semibold tracking-tight">
              <span className="text-primary">Board Game Clock</span> Newsletter
            </p>
          </Link>
        </div>
        {/*<div className="flex items-center">*/}
        {/*  <div className="mr-4 text-sm">*/}
        {/*    <Link href="/login">*/}
        {/*      <p className=" hover:text-gray-300">*/}
        {/*        <FaUser className="mr-1 inline-block h-5 w-5" />*/}
        {/*        Login*/}
        {/*      </p>*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </nav>
  );
};

export default Navbar;
