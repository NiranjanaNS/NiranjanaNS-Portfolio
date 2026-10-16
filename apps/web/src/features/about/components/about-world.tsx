import Image from "next/image";
import { Code2, Sprout } from "lucide-react";
import { about } from "@/data/about";
import forest from "../../../../public/images/about-forest.png";
import styles from "./about-world.module.css";

const focusIcons = [Code2, Sprout];

export function AboutWorld() {
  return (
    <div className={styles.world}>
      <Image src={forest} alt="" sizes="100vw" className={styles.landscape} />
      <div className={styles.wash} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>02 / About Forest</p>
        <h2 id="about-heading">{about.title}</h2>
        <div className={styles.introduction}>
          {about.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <dl className={styles.focus}>
          {about.focus.map((item, index) => {
            const Icon = focusIcons[index];
            return (
              <div key={item.title} className={styles.focusItem}>
                <dt>
                  <Icon aria-hidden="true" size={20} strokeWidth={1.6} />
                  {item.title}
                </dt>
                <dd>{item.description}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </div>
  );
}
