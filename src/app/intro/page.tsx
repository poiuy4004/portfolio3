import styles from "@/src/styles/intro/intro.module.css";

import Nav from "@/src/containers/intro/Nav";
import SkillPage from "@/src/containers/intro/SkillPage";
import ProjectPage from "@/src/containers/intro/ProjectPage";

export default function Home() {

  return (
    <main className={styles.container}>
      <article className={styles.navBox}><Nav /></article>
      <SkillPage />
      <ProjectPage />
    </main>
  );
}
