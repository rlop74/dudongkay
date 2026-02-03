import { motion, type Variants } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";
import mufasa1 from "../assets/mufasa-1.png";
import "./envelope.css";

export const AnimatedEnvelope = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="mt-24 flex justify-center">
            <motion.div
                className="envelope cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
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
                    className="letter flex flex-col items-center gap-3 rounded-lg bg-white p-4 shadow-lg"
                    variants={letterVariants}
                    animate={open ? "open" : "closed"}
                >
                    {/* wax seal accent */}
                    <span className="absolute -top-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-rose-500 text-xs font-bold text-white shadow-lg">
                        ✉️
                    </span>

                    <img
                        src={mufasa1}
                        alt="Letter content"
                        className="h-20 w-20 rounded-full object-cover shadow-md"
                    />

                    <Link
                        to="/letter"
                        onClick={(e) => e.stopPropagation()}
                        className="rounded-lg bg-rose-500 px-4 py-2 text-sm font-semibold !text-white transition hover:bg-rose-600 active:scale-95"
                    >
                        Open letter →
                    </Link>
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
        y: -180,
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 0.6,
            ease: "easeOut",
        },
    },
};
