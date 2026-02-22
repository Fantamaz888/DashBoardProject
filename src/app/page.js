'use client';
import { useState } from "react";
import { Sidebar } from "@/view/Sidebar/Sidebar";
import { Maindata } from "@/view/Maindata/Maindata";
import { Header } from "@/view/Header/Header";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="mainContent" style={{ flex: 1 }}>
          <Maindata />
        </main>

      </div>
    </div>
  );
}
