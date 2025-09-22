"use client";

import React from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "../components/ui/resizable-navbar";
import Prism from "../components/ui/Prism";

const HomePage: React.FC = () => {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Markets", link: "/markets" },
    { name: "Trade", link: "/trade" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton href="/app" variant="primary">
            Wallet
          </NavbarButton>
        </NavBody>
      </Navbar>

      {/* Hero Section với Prism */}
      <section className="relative h-[100vh] w-full">
        <Prism
          animationType="3drotate"
          height={3.5}
          baseWidth={5.5}
          glow={1.2}
          noise={0.4}
          hueShift={0.5}
          colorFrequency={1.2}
          scale={3.2}
          transparent={true}
          timeScale={0.6}
          suspendWhenOffscreen={true}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Crypto Prism</h1>
        </div>
      </section>

      {/* Nội dung phía dưới */}
      <main className="h-[200vh] bg-black flex justify-center items-center">
        <p className="text-neutral-500 text-xl">
          Scroll để test Navbar + Prism...
        </p>
      </main>
    </div>
  );
};

export default HomePage;
