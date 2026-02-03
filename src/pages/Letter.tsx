import { motion } from "framer-motion";
import valentine1 from "../assets/valentine-1.png";
import valentine2 from "../assets/valentine-2.png";
import valentine3 from "../assets/valentine-3.png";
import { Link } from "react-router";
import { useMailLink } from "../store/useMailLink";
import { useState } from "react";

export const Letter = () => {
    const showMailLink = useMailLink((s) => s.showMailLink);
    const setShowMailLink = useMailLink((s) => s.setShowMailLink);
    const showMain = useMailLink((s) => s.showMain);
    const setShowMain = useMailLink((s) => s.setShowMain);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const moveButton = () => {
        const padding = 100; // keeps it away from edges

        const maxX = window.innerWidth - padding;
        const maxY = window.innerHeight - padding;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        setPos({ x, y });
    };

    return (
        <div className="mx-auto mt-24 w-[1000px]">
            {/* TOP FOLD — hero image */}
            <motion.div
                className="h-44 bg-white rounded-t-2xl shadow-lg origin-bottom"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ rotateX: -180 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            >
                {/* <img
                    src={valentine1}
                    alt="Memory"
                    className="h-full w-full object-cover rounded-t-2xl"
                /> */}
            </motion.div>

            {/* MIDDLE — letter body */}
            <motion.div
                className="bg-white px-10 py-12 shadow-xl border-x border-slate-200"
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
            >
                {/* Close */}
                <Link
                    to="/"
                    onClick={() => {
                        setShowMailLink(!showMailLink);
                        setShowMain(!showMain);
                    }}
                    className="mb-6 inline-block text-sm text-slate-400 hover:text-slate-600"
                >
                    ← Close letter
                </Link>

                {/* Opening line */}
                <h2 className="text-2xl font-semibold leading-snug text-slate-800">
                    Okay… hear me out.
                </h2>

                <p className="mt-4 leading-relaxed text-slate-600">
                    I’m not good at doing things the normal way, and I know you
                    told me to not bother but I wanted this to feel a little
                    special.
                </p>

                {/* 3-photo strip */}
                <div className="mt-8 flex justify-center gap-4">
                    <img
                        src={valentine1}
                        className="h-28 w-28 rotate-[-4deg] rounded-xl object-cover shadow-md hover:scale-200 transition duration-300 ease-in-out"
                    />
                    <img
                        src={valentine2}
                        className="h-28 w-28 rotate-[2deg] rounded-xl object-cover shadow-md hover:scale-200 transition duration-300 ease-in-out"
                    />
                    <img
                        src={valentine3}
                        className="h-28 w-28 rotate-[-1deg] rounded-xl object-cover shadow-md hover:scale-200 transition duration-300 ease-in-out"
                    />
                </div>

                {/* The ask */}
                <p className="mt-10 text-lg font-medium leading-relaxed text-slate-800">
                    So… I was wondering
                </p>

                <p className="mt-2 text-xl font-semibold text-rose-500">
                    Will you be my Valentine...again? 💌
                </p>

                {/* CTA */}
                <div className="mt-10 flex justify-end gap-3 items-center">
                    <Link
                        to="/yay"
                        className="rounded-full bg-rose-500 px-7 py-3 !text-sm !font-semibold !text-white shadow-md transition hover:bg-rose-600 active:scale-95 hover:scale-150 transition duration-300 ease-in-out"
                    >
                        Yes ♥️
                    </Link>
                    <p className="text-black">
                        Yes nilagay ko talaga sa malayo yung NO. try mo lang :)
                    </p>
                    <motion.button
                        onMouseEnter={moveButton}
                        animate={{ x: pos.x, y: pos.y }}
                        transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 20,
                        }}
                        className="fixed left-0 top-0 rounded-full bg-slate-200 px-8 py-3 text-sm font-semibold text-white shadow-md cursor-not-allowed"
                    >
                        No (try me)
                    </motion.button>
                </div>
            </motion.div>

            {/* BOTTOM FOLD */}
            <motion.div
                className="h-36 bg-white rounded-b-2xl shadow-lg"
                style={{ transformStyle: "preserve-3d" }}
                initial={{ rotateX: 180 }}
                animate={{ rotateX: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            />
        </div>
    );
};
