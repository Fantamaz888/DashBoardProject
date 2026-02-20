
import { Sidebar } from "@/view/Sidebar/Sidebar";


import styles from "./page.module.css";
import { Header } from "@/view/Header/Header";

export default function Home() {
  return (

    <div className="Wrapper">
      <Sidebar/>
      <div className="Content">
        <Header/>
        </div>
    </div>
  );
}
