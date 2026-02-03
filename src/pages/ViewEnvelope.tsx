import { Link } from "react-router";
import where from "../assets/where.png";

export const ViewEnvelope = () => {
    return (
        <div className="relative flex max-w-5xl flex-col items-center rounded-3xl bg-white/90 p-10 text-center shadow-2xl backdrop-blur">
            <img src={where} className="rounded-xl shadow-xl" />
            <h2 className="text-xl font-semibold text-slate-800">
                This you rn...anong kalokohan to?? 🤣
            </h2>
            <p className="text-black">I just wanna ask you something...</p>
            <Link
                to="/open-envelope"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-rose-500 px-8 py-3 !font-semibold !text-white shadow-md transition hover:bg-rose-600 hover:shadow-lg cursor-pointer"
            >
                kayy click mo to
            </Link>
        </div>
    );
};
