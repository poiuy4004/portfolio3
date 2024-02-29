import styles from "@/src/styles/components/modal.module.css";

type ModalType = {
  titleText?: string
  contentText?: string
  leftButtonText?: string
  rightButtonText?: string
  leftButtonFn?: string
  rightButtonFn?: any
}

function Modal({titleText, contentText, leftButtonText, rightButtonText, leftButtonFn, rightButtonFn}:ModalType){
  return(
    <article className={styles.container} onClick={()=>rightButtonFn(false)}>
      <section className={styles.box}>
        <div className={styles.title}>{titleText}</div>
        <section className={styles.content}>{contentText}</section>
        <div className={styles.buttonBox}>
          {leftButtonText? <button className={`${styles.button} ${styles.leftButton}`}>{leftButtonText}</button> : null}
          <button
            className={`${styles.button} ${styles.rightButton}`}
            onClick={()=>rightButtonFn(false)}
          >{rightButtonText}</button>
        </div>
      </section>
    </article>
  )
}
export default Modal;