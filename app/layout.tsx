import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import Script from "next/script"
import { FB_PIXEL_ID } from "@/lib/fbpixel"
import ChatWidget from "@/components/chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CleverCat - Turn Your Videos Into Revenue Engines",
  description: "CleverCat helps you monetize your videos with no code, no friction, and all performance.",
  generator: 'v0.dev'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/main_logo.png" />
        {/* or use another format: <link rel="icon" href="/logo.png" type="image/png" /> */}

        {/* Facebook Pixel base code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src='https://connect.facebook.net/en_US/fbevents.js';
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script');
              fbq('init', '${FB_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>

      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header />
            <main>{children}</main>
            <Footer />
            <ChatWidget />
          </div>
          <Toaster
            position="top-center"
            richColors
            closeButton
          // toastOptions={{
          //   classNames: {
          //     toast: "bg-slate-800 text-white border border-slate-700",
          //     description: "text-sm text-gray-300",
          //   },
          // }}
          />
        </ThemeProvider>
      </body>
      {/* <script src="http://34.194.154.4:5000/static/widget/widget.js" data-user-id="aad4c151-a54c-44d0-959c-5b04d9a18f52" data-request-id="cmbt2ljft000bpdldi0jaq398" defer></script> */}
    </html>
  )
}
