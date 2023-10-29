import Projects from "@/component/projects/Projects";
import NavBar from "@/component/nav-bar/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
<NavBar/>
<Projects/>

  
  </main>
  )
}
