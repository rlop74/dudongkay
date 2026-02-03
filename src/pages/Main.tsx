import { Link } from "react-router";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import mufasa2 from "../assets/mufasa-2.png";
import { useMailLink } from "../store/useMailLink";

export const Main = () => {
    const showMailLink = useMailLink((state) => state.showMailLink);
    const setShowMailLink = useMailLink((state) => state.setShowMailLink);
    const showMain = useMailLink((state) => state.showMain);
    const setShowMain = useMailLink((state) => state.setShowMain);

    return (
        <div className="flex flex-col items-center gap-15">
            {showMailLink && (
                <>
                    <Link
                        to="/"
                        onClick={() => setShowMain(!showMain)}
                        className="text-xl hover:!font-bold !text-rose-500 hover:scale-110 transition duration-300 ease-in-out cursor-pointer"
                    >
                        I want to pet mufasa again!!!!
                    </Link>
                    <div className="relative mb-12 w-full max-w-md rounded-3xl bg-white/90 p-10 text-center shadow-2xl backdrop-blur">
                        {/* Decorative stamp */}
                        <div className="absolute -top-4 -right-4 rotate-12 rounded-lg bg-rose-500 px-3 py-1 text-sm font-semibold text-white shadow-md">
                            Sealed
                        </div>

                        <h2 className="text-3xl font-semibold text-slate-800">
                            📬 Mufasa sent you a mail
                        </h2>
                        <p className="mt-3 text-slate-600">
                            Someone sent you something special.
                        </p>

                        {/* Image strip (drop your images here) */}
                        <div className="mt-4 flex gap-6 opacity-90">
                            {/* Replace src with your images */}
                            <img
                                src={image2}
                                className="h-28 w-28 rotate-[-6deg] rounded-xl object-cover shadow-lg hover:scale-200 transition duration-300 ease-in-out"
                            />
                            <img
                                src={mufasa2}
                                className="h-28 w-28 rotate-[4deg] rounded-xl object-cover shadow-lg"
                            />
                            <img
                                src={image1}
                                className="hidden h-28 w-28 rotate-[-2deg] rounded-xl object-cover shadow-lg md:block hover:scale-200 transition duration-300 ease-in-out"
                            />
                        </div>

                        <Link
                            to="/envelope"
                            onClick={() => setShowMailLink(false)}
                            className="mt-8 inline-flex items-center justify-center rounded-xl bg-rose-500 px-8 py-4 text-lg font-semibold !text-white shadow-lg transition hover:bg-rose-600 hover:shadow-xl active:scale-95 hover:scale-110 cursor-pointer"
                        >
                            View the envelope →
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};
