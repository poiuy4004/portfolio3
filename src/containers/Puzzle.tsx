'use client'
import styles from "@/src/styles/puzzle.module.css";
import { useRouter } from "next/navigation";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

function Puzzle(){
  const router = useRouter()
  return(
    <article className={styles.container}>
      <section className={styles.box}>
        <JigsawPuzzle
          imageSrc="images/puzzleImg.png"
          rows={2}
          columns={3}
          onSolved={()=>router.push("/intro")}
        />
      </section>
    </article>
  )
}
export default Puzzle;


