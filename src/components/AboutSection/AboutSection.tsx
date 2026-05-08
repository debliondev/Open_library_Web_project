"use client";

import { useInView } from "app/hooks/useInView";
import styles from "./style.module.css";

export default function AboutSection() {
  const [ref, isInView] = useInView<HTMLElement>({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      id="AboutUS"
      className={`${styles.aboutSection}${isInView ? " animate-fadeIn" : ""}`}
      style={{ opacity: isInView ? undefined : 0 }}
    >
      <h2>About Us</h2>
      <p>Discover our virtual library and explore a world of knowledge. We are dedicated to providing access to a wide range of books and resources for everyone.</p>
    </section>
  );
}
