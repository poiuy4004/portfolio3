'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "@/src/styles/root.module.css";

import Modal from "@/src/components/Modal";
import Puzzle from "@/src/containers/Puzzle";

export default function Home() {
  const [openModal, setOpenModal] = useState(true);
  const router = useRouter()
  useEffect(()=>{
    setTimeout(()=>setOpenModal(false),2222)
    if(window.innerWidth<1025){
      router.push("/intro")
    }
  },[])
  return (
    <main className={styles.container}>
      <Puzzle />
      <button className={styles.skipButton} onClick={()=>router.push("intro")}>퍼즐 건너뛰기 ►</button>
      {openModal? <Modal titleText="퍼즐을 맞춰보세요!" contentText="퍼즐을 맞추고 포트폴리오를 확인하세요!" rightButtonText="닫기" rightButtonFn={setOpenModal} /> : null}
    </main>
  );
}
