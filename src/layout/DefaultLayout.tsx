import { Link, Outlet } from "react-router";
import { useState } from "react";

// hooks
import { useMailLink } from "../store/useMailLink";

// images
import mufasaGIF from "../assets/mufasa.gif";
import mufasaStill from "../assets/mufasa-still.png";
import mufasa2 from "../assets/mufasa-2.png";

export const DefaultLayout = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const showMain = useMailLink((state) => state.showMain);
    const setShowMain = useMailLink((state) => state.setShowMain);
    const showMailLink = useMailLink((state) => state.showMailLink);
    const setShowMailLink = useMailLink((state) => state.setShowMailLink);

    return (
        <div className="relative min-h-screen w-screen overflow-hidden bg-gradient-to-br from-rose-100 via-rose-200 to-rose-300">
            {/* Header */}
            <header className="relative mx-6 mt-6 rounded-2xl bg-white/80 backdrop-blur shadow-lg">
                <div className="flex items-center justify-between px-8 py-4">
                    <h1 className="text-2xl font-bold tracking-tight text-slate-800">
                        The Sealed Envelope
                    </h1>

                    <div className="flex items-center gap-3 text-slate-700">
                        <img
                            src={mufasa2}
                            alt="Avatar"
                            className="h-12 w-12 rounded-full object-cover ring-2 ring-rose-300"
                        />
                        <span className="font-medium">DudongKay</span>
                    </div>
                </div>
            </header>

            <main className="relative flex min-h-[calc(100vh-120px)] flex-col items-center justify-center px-6">
                {showMain ? (
                    <Link
                        to="/main"
                        onMouseOver={() => setIsPlaying(true)}
                        onMouseOut={() => setIsPlaying(false)}
                        onClick={() => {
                            setShowMailLink(true);
                            setShowMain(false);
                        }}
                        className="mb-10"
                    >
                        {isPlaying ? (
                            <div className="flex flex-col items-center gap-3">
                                <img
                                    src={mufasaGIF}
                                    alt="Mufasa GIF"
                                    className="h-70 w-70"
                                />
                                <h2 className="!text-rose-500 font-bold text-2xl">
                                    Boing boing boing 😂
                                </h2>
                                <p className="!text-rose-500 text-sm">
                                    Click to finish petting!
                                </p>
                            </div>
                        ) : (
                            <div>
                                <h2 className="!text-rose-500 font-bold text-2xl">
                                    Hover over Mufasa to pet 😽
                                </h2>
                                <img
                                    src={mufasaStill}
                                    alt="Mufasa still"
                                    className="h-70 w-70"
                                />
                            </div>
                        )}
                    </Link>
                ) : (
                    ""
                )}
                <Outlet />
            </main>
        </div>
    );
};
