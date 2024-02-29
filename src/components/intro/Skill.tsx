import styles from "@/src/styles/intro/_components/skill.module.css";
import Image from "next/image";

type SkillType = {
  skill: {
    imageUrl: string
    name?: string
  }
}
function Skill({skill}:SkillType){
  return(
    <div className={styles.container}>
      {/* <Image className={styles.img} src={skill.imageUrl} alt="" /> */}
      <img className={styles.img} src={skill.imageUrl} alt={skill.name} />
      <h3 className={styles.name}>{skill.name}</h3>
    </div>
  ) 
}
export default Skill;