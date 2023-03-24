import React from "react";
import Navbar from "@src/components/layout/Navbar";
import Head from "next/head";
import { Footer } from "@src/components/layout/Footer";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Head>
        <title>Board game clock | newsletter</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={"relative flex min-h-screen w-full flex-col bg-slate-900"}
      >
        <div
          className={
            "relative z-10 mx-auto flex min-h-screen w-full flex-col bg-slate-800 xl:container"
          }
        >
          <Navbar />
          <main className="z-10 flex h-full w-full flex-1 flex-col gap-12 p-4">
            {children}
          </main>
          <Footer />
          <div
            className={
              "absolute inset-0 z-[2] bg-[url('https://cdn.dribbble.com/userupload/3274746/file/original-c4c6dc1fbc4277fb6159b83edc7d2ef9.png?compress=1&resize=1024x576&vertical=center')] bg-cover bg-center bg-no-repeat opacity-80"
            }
          />
        </div>
        <div
          className={
            "absolute inset-0 z-[1] bg-[url('https://cdn-icons-png.flaticon.com/512/1067/1067453.png?w=1380&t=st=1679660098~exp=1679660698~hmac=e0216f417ada4100bba53094044b71218d72414b1720c18edf4e28c211f5600d')] bg-center bg-repeat opacity-20"
          }
        />
      </div>
    </>
  );
};
