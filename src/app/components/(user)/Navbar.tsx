"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import useLoginModal from "@/lib/hooks/useLoginModal";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsCart4 } from "react-icons/bs";
import { MdOutlineHistory } from "react-icons/md";
import { RotatingLines } from "react-loader-spinner";
import UserAccountAvatar from "../UserAccountAvatar";
import { ThemeToggler1 } from "../_ThemeToggler";
import CartIcon from "./CartIcon";
import LogoIcon from "/public/logo.png";
import { UserNotifs } from "@/components/UserNotifs";
import Search from "../Search";
import { usePathname } from "next/navigation";
import { MessagesSquareIcon, Bell } from "lucide-react";

const Navbar = () => {
  const { data: session, status } = useSession();
  const loginModal = useLoginModal();
  const pathname = usePathname();
  //temporary fix lang muna to, baguhin mo nalang pag mag codes ka na ulit
  return (
    <nav className="fixed flex justify-between gap-5 items-center shadow-sm drop-shadow-md w-full z-50 px-3 py-2 min-h-[5rem] mix-h-[5rem]  bg-[#24643B] dark:bg-[#242526] md:px-20">
      <Link href="/" className="w-[3rem] text-center">
        <Image src={LogoIcon} alt="AGreen Nature Connect" className="" />
      </Link>

      {status === "loading" ? (
        <div className="text-center flex justify-center">
          <RotatingLines
            strokeColor="yellow"
            strokeWidth="5"
            animationDuration="0.75"
            width="20"
            visible={true}
          />
        </div>
      ) : (
        <div className="flex items-center text-[1.5rem] gap-3 justify-between">
          {status === "authenticated" ? (
            <div className="flex items-center justify-evenly gap-3.5 text-[1.5rem] text-white font-bold">
              {/**  <Notification />
                            <Settings />*/}
              <div className="max-md:block hidden mt-4">
                <ThemeToggler1 />
              </div>

              <div className="hidden max-md:block mt-[2%] text-[32px] md:text-[32px]">
                <UserNotifs />
              </div>

              <div className="hidden md:block mt-[9%] text-[1.5rem] md:text-[2rem]">
                <UserNotifs />
              </div>

              <Link
                href="/message"
                className="hidden max-md:block mt-[2%] text-[1.5rem] md:text-[2rem]"
              >
                <MessagesSquareIcon style={{ width: "25px", height: "25px" }} />
              </Link>

              <Link
                href="/message"
                className="hidden md:block mt-[7%] text-[1.5rem] md:text-[2rem]"
              >
                <MessagesSquareIcon style={{ width: "30px", height: "30px" }} />
              </Link>

              <div className="hidden md:block mt-[10%]">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link
                        href={"/order-status"}
                        className="hidden md:block text-[1.5rem] md:text-[2rem]"
                      >
                        <MdOutlineHistory />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Transaction history</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Link href={"/cart"} className="text-[1.5rem] md:text-[2rem]">
                <CartIcon />
              </Link>
              <div className="md:hidden">
                <UserAccountAvatar />
              </div>
            </div>
          ) : (
            <>
              <div className="max-md:block hidden mt-4 text-yellow-400">
                <ThemeToggler1 />
              </div>
              <button onClick={loginModal.onOpen} className="text-white">
                <BsCart4 />
              </button>
              <div className="max-md:block hidden">
                <button
                  onClick={loginModal.onOpen}
                  className="active:scale-95 inline-flex items-center justify-center text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 bg-[#4DE69E]/90 font-poppins rounded-lg hover:shadow-lg hover:bg-[#BAEBD4] text-black font-bold h-10 py-2 px-4"
                >
                  Sign In
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
