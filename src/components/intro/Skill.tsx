import styles from "@/src/styles/intro/_components/skill.module.css";

function Skill({skill}){
  return(
    <div className={styles.container}>
      <img className={styles.img} src={skill.imageUrl} alt={skill.name} />
      <h3 className={styles.name}>{skill.name}</h3>
    </div>
  ) 
}
export default Skill;