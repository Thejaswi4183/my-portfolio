"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Section({ id, title, children }:{
  id?: string; title: string; children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2, once: true });

  return (
    <section id={id} ref={ref} className="mt-16 md:mt-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-2xl md:text-3xl font-semibold mb-6 gradient-text"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.05 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
