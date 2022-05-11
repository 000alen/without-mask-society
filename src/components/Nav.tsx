import React, { useState } from "react";

import { DiscordIcon } from "./icons/DiscordIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { OpenseaIcon } from "./icons/OpenseaIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

interface Props {
  twitter_url: string;
  instagram_url: string;
  discord_url: string;
  opensea_url: string;
  digitalrocket_url: string;
}

export const Nav: React.FC<Props> = ({
  twitter_url,
  instagram_url,
  discord_url,
  opensea_url,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex-row items-end justify-around hidden gap-2 p-12 md:flex lg:ml-12">
        <a
          className="text-xl italic font-bold transition-all hover:text-green-400"
          href="#about"
        >
          ABOUT
        </a>
        <a
          className="text-xl italic font-bold transition-all hover:text-green-400"
          href="#team"
        >
          TEAM
        </a>
        <a
          className="text-xl italic font-bold transition-all hover:text-green-400"
          href="#roadmap"
        >
          ROADMAP
        </a>
        <a
          className="text-xl italic font-bold transition-all hover:text-green-400"
          href="#shop"
        >
          SHOP
        </a>
        <a
          className="text-xl italic font-bold transition-all hover:text-green-400"
          href="#faq"
        >
          FAQ
        </a>
        <a
          className="text-xl italic font-bold transition-all hover:text-green-400"
          href="#blogs"
        >
          BLOGS
        </a>

        <div className="flex flex-row gap-4">
          <a
            className="transition-all hover:text-green-400"
            href={twitter_url}
            target="_blank"
          >
            <TwitterIcon className="w-6 h-6 transition-all hover:fill-green-400" />
          </a>
          <a
            className="transition-all hover:text-green-400"
            href={instagram_url}
            target="_blank"
          >
            <InstagramIcon className="w-6 h-6 transition-all hover:fill-green-400" />
          </a>
          <a
            className="transition-all hover:text-green-400"
            href={discord_url}
            target="_blank"
          >
            <DiscordIcon className="w-6 h-6 transition-all hover:fill-green-400" />
          </a>
          <a href={opensea_url} target="_blank">
            <OpenseaIcon className="w-6 h-6 transition-all hover:fill-green-400" />
          </a>
        </div>
      </nav>

      <div className="flex flex-row gap-4 p-12 md:hidden">
        <a
          className="transition-all hover:text-green-400"
          href={twitter_url}
          target="_blank"
        >
          <TwitterIcon className="w-6 h-6 transition-all hover:fill-green-400" />
        </a>
        <a
          className="transition-all hover:text-green-400"
          href={instagram_url}
          target="_blank"
        >
          <InstagramIcon className="w-6 h-6 transition-all hover:fill-green-400" />
        </a>
        <a
          className="transition-all hover:text-green-400"
          href={discord_url}
          target="_blank"
        >
          <DiscordIcon className="w-6 h-6 transition-all hover:fill-green-400" />
        </a>
        <a href={opensea_url} target="_blank">
          <OpenseaIcon className="w-6 h-6 transition-all hover:fill-green-400" />
        </a>
      </div>

      <div className="fixed top-0 right-0 z-50 p-12 md:hidden">
        {/* <button
          className="w-6 h-6 bg-red-500"
          onClick={() => setIsOpen((p) => !p)}
        ></button> */}

        <div
          className={`${isOpen ? "checked" : ""} w-6 h-6 hamburger`}
          onClick={() => setIsOpen((p) => !p)}
        >
          <div className="bar"></div>
        </div>
      </div>

      <nav
        className={`${
          isOpen ? "opacity-100" : "invisible opacity-0"
        } transition-all fixed top-0 left-0 z-40 flex flex-col items-center justify-center w-screen h-screen bg-green-400 md:hidden`}
      >
        <a
          className="text-xl italic font-bold"
          href="#about"
          onClick={() => setIsOpen(false)}
        >
          ABOUT
        </a>
        <a
          className="text-xl italic font-bold"
          href="#team"
          onClick={() => setIsOpen(false)}
        >
          TEAM
        </a>
        <a
          className="text-xl italic font-bold"
          href="#roadmap"
          onClick={() => setIsOpen(false)}
        >
          ROADMAP
        </a>
        <a
          className="text-xl italic font-bold"
          href="#shop"
          onClick={() => setIsOpen(false)}
        >
          SHOP
        </a>
        <a
          className="text-xl italic font-bold"
          href="#faq"
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </a>
        <a
          className="text-xl italic font-bold"
          href="#blogs"
          onClick={() => setIsOpen(false)}
        >
          BLOGS
        </a>
      </nav>
    </>
  );
};
