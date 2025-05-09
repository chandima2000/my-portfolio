import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechProfile from "./components/TechProfile";


export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Blogs />
      <TechProfile/>
    </main>
  );
} 