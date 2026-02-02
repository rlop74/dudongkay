import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import "./envelope.css";

export const AnimatedEnvelope = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="container">
            <motion.div
                className="envelope"
                onClick={() => setOpen((prev) => !prev)}
            >
                {/* Flap */}
                <motion.div
                    className="flap"
                    variants={flapVariants}
                    animate={open ? "open" : "closed"}
                />

                {/* Letter */}
                <motion.div
                    className="letter"
                    variants={letterVariants}
                    animate={open ? "open" : "closed"}
                >
                    <p className="text-black">
                        Click me 👋
                    </p>
                </motion.div>

                {/* Envelope body */}
                <div className="body" />
            </motion.div>
        </div>
    );
};

/* ---------------- VARIANTS ---------------- */

const flapVariants: Variants = {
    closed: {
        rotateX: 0,
        zIndex: 2,
    },
    open: {
        rotateX: -180,
        zIndex: 0,
        transition: {
            duration: 0.6,
            ease: "easeInOut",
        },
    },
};

const letterVariants: Variants = {
    closed: {
        y: 0,
        opacity: 0,
    },
    open: {
        y: -90,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
