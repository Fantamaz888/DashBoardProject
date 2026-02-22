import { Sidebar } from "@/view/Sidebar/Sidebar";
import { Maindata } from "@/view/Maindata/Maindata";
import { Header } from "@/view/Header/Header";

export default function Home() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh'}}>
      
      <Sidebar />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        
        <main style={{ padding: '20px' }}>
          <Maindata />
        </main>
      </div>

    </div>
  );
}