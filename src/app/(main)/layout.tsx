"use client";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { amiko, courgette, assistant} from '@/lib/fonts'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <style jsx global>{`
        html {
          font-family: ${amiko.style.fontFamily};
        }
        h1, h4 {
          font-family: ${courgette.style.fontFamily};
        }
        h2, h5 {
          font-family: ${assistant.style.fontFamily};
        }
      `}</style>
      <div className="flex flex-col">
        <NavBar/>
        <div className="mt-14">{children}</div>
        <Footer/>
      </div>
      </>
    );
  }