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

interface NavLinkProps {
  href: string;
  onClick?: () => void;
  onHoverEffect?: boolean;
  children: string;
}

interface NavIconProps {
  href: string;
  IconComponent: React.FC<{ className?: string }>;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  onClick,
  onHoverEffect = true,
  children,
}) => {
  return (
    <a
      className={`text-xl italic font-bold ${
        onHoverEffect ? "transition-all hover:text-green-400" : ""
      }`}
      href={href}
      onClick={() => onClick && onClick()}
    >
      {children}
    </a>
  );
};

const NavIcon: React.FC<NavIconProps> = ({ href, IconComponent }) => {
  return (
    <a
      className="transition-all hover:text-green-400"
      href={href}
      target="_blank"
    >
      <IconComponent className="w-6 h-6 transition-all hover:fill-green-400" />
    </a>
  );
};

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
        <NavLink href="#about">ABOUT</NavLink>
        <NavLink href="#team">TEAM</NavLink>
        <NavLink href="#roadmap">ROADMAP</NavLink>
        <NavLink href="#shop">SHOP</NavLink>
        <NavLink href="#faq">FAQ</NavLink>
        <NavLink href="#blogs">BLOGS</NavLink>

        <div className="flex flex-row gap-4">
          <NavIcon href={twitter_url} IconComponent={TwitterIcon} />
          <NavIcon href={instagram_url} IconComponent={InstagramIcon} />
          <NavIcon href={discord_url} IconComponent={DiscordIcon} />
          <NavIcon href={opensea_url} IconComponent={OpenseaIcon} />
        </div>
      </nav>

      <div className="flex flex-row gap-4 p-12 md:hidden">
        <NavIcon href={twitter_url} IconComponent={TwitterIcon} />
        <NavIcon href={instagram_url} IconComponent={InstagramIcon} />
        <NavIcon href={discord_url} IconComponent={DiscordIcon} />
        <NavIcon href={opensea_url} IconComponent={OpenseaIcon} />
      </div>

      <div className="fixed top-0 right-0 z-50 p-12 md:hidden">
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
        <NavLink
          href="#about"
          onHoverEffect={false}
          onClick={() => setIsOpen(false)}
        >
          ABOUT
        </NavLink>
        <NavLink
          href="#team"
          onHoverEffect={false}
          onClick={() => setIsOpen(false)}
        >
          TEAM
        </NavLink>
        <NavLink
          href="#roadmap"
          onHoverEffect={false}
          onClick={() => setIsOpen(false)}
        >
          ROADMAP
        </NavLink>
        <NavLink
          href="#shop"
          onHoverEffect={false}
          onClick={() => setIsOpen(false)}
        >
          SHOP
        </NavLink>
        <NavLink
          href="#faq"
          onHoverEffect={false}
          onClick={() => setIsOpen(false)}
        >
          FAQ
        </NavLink>
        <NavLink
          href="#blogs"
          onHoverEffect={false}
          onClick={() => setIsOpen(false)}
        >
          BLOGS
        </NavLink>
      </nav>
    </>
  );
};
