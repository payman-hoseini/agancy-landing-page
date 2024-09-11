import Image from "next/image";
import Header from "./components/header";



import Article from "./components/article";
import Client from "./components/client";
import Gallery from "./components/gallery";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="max-w-[1440px] w-screen mx-auto h-screen">
        <Header />
        <Article />
        <Client />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}
