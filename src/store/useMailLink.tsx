import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";

type MailLinkState = {
    showMailLink: boolean;
    showMain: boolean;
    setShowMailLink: (bool: boolean) => void;
    setShowMain: (bool: boolean) => void;
};

export const useMailLink = create<MailLinkState>(
    // persist(
    (set) => ({
        showMailLink: false,
        showMain: true,
        setShowMailLink: (bool: boolean) =>
            set({
                showMailLink: bool,
            }),
        setShowMain: (bool: boolean) =>
            set({
                showMain: bool,
            }),
    }),
    // {
    //     name: "mailLinkStorage",
    //     storage: createJSONStorage(() => localStorage),
    // },
);
