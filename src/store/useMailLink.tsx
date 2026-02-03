import { create } from "zustand";
// import { createJSONStorage, persist } from "zustand/middleware";

export const useMailLink = create(
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
