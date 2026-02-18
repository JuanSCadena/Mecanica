"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 2000); // 2 seconds minimum load time
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950"
        >
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#FF5722]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            >
                <path d="M12 20.94c0 .59-.51 1.06-1.1 1.06H9.1c-.59 0-1.06-.47-1.06-1.06v-1.1c-.5-.17-1.15-.49-1.63-.8l-.94.72c-.46.36-1.13.26-1.48-.2l-2-3.46c-.35-.46-.25-1.13.2-1.48l.8-.62c-.06-.2-.06-.4-.06-.6s0-.4.06-.6l-.8-.62c-.45-.35-.55-1.02-.2-1.48l2-3.46c.35-.46 1.02-.56 1.48-.2l.94.72c.48-.31 1.13-.63 1.63-.8V4.06c0-.59.47-1.06 1.06-1.06h3.8c.59 0 1.06.47 1.06 1.06v1.1c.5.17 1.15.49 1.63.8l.94-.72c.46-.36 1.13-.26 1.48.2l2 3.46c.35.46.25 1.13-.2 1.48l-.8.62c.06.2.06.4.06.6s0 .4-.06.6l.8.62c.45.35.55 1.02.2 1.48l-2 3.46c-.35.46-1.02.56-1.48.2l-.94-.72c-.48.31-1.13.63-1.63.8v1.1c0 .59-.47 1.06-1.06 1.06h-3.8z" />
                <circle cx="12" cy="12" r="3" />
            </motion.svg>
        </motion.div>
    );
}
