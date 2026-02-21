
import { Sidebar } from "@/view/Sidebar/Sidebar";


import styles from "./page.module.css";
import { Header } from "@/view/Header/Header";
import Maindata from "@/view/Maindata/Maindata"

export default function Home() {
  return (

    <div className="Wrapper">
      <Sidebar/>
      <div className="Content">
        <Header/>
        </div>
        <Maindata/>
    </div>
  );
}
