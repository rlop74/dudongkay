import { motion } from "framer-motion";
import image1 from "../assets/1.png";
import { Link } from "react-router";
import { useMailLink } from "../store/useMailLink";
import valentine4 from "../assets/valentine-4.png";

export const Yay = () => {
    const setShowMailLink = useMailLink((state) => state.setShowMailLink);
    const setShowMain = useMailLink((state) => state.setShowMain);

    return (

            <img src={valentine4} className="h-200 w-100 rounded-lg shadow-lg" />

    );
};
