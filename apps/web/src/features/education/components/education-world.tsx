import Image from "next/image";
import { BookOpen, School } from "lucide-react";
import { education } from "@/data/education";
import courtyard from "../../../../public/images/education-courtyard.png";
import styles from "./education-world.module.css";

export function EducationWorld() {
  return (
    <div className={styles.world}>
      <Image src={courtyard} alt="" sizes="100vw" className={styles.landscape} />
      <div className={styles.wash} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.eyebrow}>03 / Education</p>
        <h2 id="education-heading">Learning, in progress.</h2>
        <ol className={styles.timeline}>
          {education.map((entry) => {
            const Icon = entry.id === "btech" ? BookOpen : School;
            return (
              <li key={entry.id}>
                <p className={styles.period}>
                  <Icon size={18} aria-hidden="true" />
                  {entry.periodLabel}: {entry.period}
                </p>
                <h3>{entry.qualification}</h3>
                {entry.status !== "Completed" && <p className={styles.status}>{entry.status}</p>}
                <p className={styles.institution}>{entry.institution}</p>
                <p className={styles.location}>{entry.location}</p>
                {entry.note && <p className={styles.note}>{entry.note}</p>}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
