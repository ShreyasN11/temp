import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '@/common/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '@/common/Magnetic';

export default function index() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const x = useTransform(scrollYProgress, [0, 1], [0, 100])
    const y = useTransform(scrollYProgress, [0, 1], [-200, 0])
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])
    return (
        <motion.div style={{y, marginTop:200, paddingBottom:100}} ref={container} className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <h2>Have any </h2>
                    <h2>Suggestions</h2>
                    <motion.div style={{x}} className={styles.buttonContainer}>
                        <Rounded  backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded>
                    </motion.div>
                </div>
                <div className={styles.nav}>
                        <Rounded>
                            <p>gymify.support@gmail.com</p>
                        </Rounded>
                        <Rounded>
                            <p>customercare.gymify@gmail.com</p>
                        </Rounded>
                </div>
            </div>
        </motion.div>
    )
}
