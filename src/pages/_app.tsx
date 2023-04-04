import { type AppType } from "next/app";
import Script from "next/script";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "@src/utils/api";

import "@src/styles/globals.css";
import { Layout } from "@src/components/layout/Layout";
import { env } from "@src/env.mjs";

export enum Page {
  Home = "/",
  EmailSubscribed = "/email-subscribed",
  VerificationEmailSent = "/verification-email-sent",
  SubscribeEmail = "/subscribe-email",
}

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id={"1"} strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>

      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
