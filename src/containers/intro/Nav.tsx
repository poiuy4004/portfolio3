import styles from "@/src/styles/intro/_container/nav.module.css";

function Nav(){
  return(
    <nav>
      <ul>
        <li><button>Intro</button></li>
        <li><button>Skill</button></li>
        <li>
          <ul>
            <h5><button>Project</button></h5>
            <li><button>⋯ing</button></li>
            <li><button>Web</button></li>
            <li><button>App</button></li>
          </ul>
        </li>
        <li><button>Contact</button></li>
      </ul>
    </nav>
  )
}
export default Nav;