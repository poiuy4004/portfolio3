import styles from "@/src/styles/intro/_container/skillPage.module.css";
import Skill from "@/src/components/intro/Skill";
import Other from "@/src/components/intro/Other";
import { frontendSkills, backendSkills, otherSkills } from "@/src/constants/skills";

function SkillPage(){
  return(
    <article className={styles.container}>
      <section className={styles.box}>
        <div className={styles.devSkillBox}>
          <section className={styles.feBox}>
            <h2><div>Frontend</div><div></div></h2>
            <div className={styles.skillBox}>
              {frontendSkills.map(skill=><Skill skill={skill} />)}
            </div>
          </section>
          <section className={styles.beBox}>
            <h2><div>Backend</div><div></div></h2>
            <div className={styles.skillBox}>
              {backendSkills.map(skill=><Skill skill={skill} />)}
            </div>
          </section>
        </div>
        <section className={styles.others}>
          <h2><div>Others</div><div></div></h2>
          <div className={`${styles.skillBox} ${styles.other}`}>
            {otherSkills.map(skill=><Other skill={skill} />)}
          </div>
        </section>
      </section>
    </article>
  )
}
export default SkillPage;