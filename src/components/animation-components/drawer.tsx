"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import {
    useDragControls,
    useMotionValue,
    useAnimate,
    motion,
    MotionValue,
} from "framer-motion";

interface DragCloseDrawerProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    children: ReactNode;
}

export const DragCloseDrawer: React.FC<DragCloseDrawerProps> = ({
    open,
    setOpen,
    children,
}) => {
    const [scope, animate] = useAnimate();
    const drawerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const y: MotionValue<number> = useMotionValue(0);
    const controls = useDragControls();

    useEffect(() => {
        if (drawerRef.current) {
            setHeight(drawerRef.current.getBoundingClientRect().height);
        }
    }, [open]);

    const handleClose = async () => {
        animate(scope.current, {
            opacity: [1, 0],
        });

        const yStart = y.get();

        await animate("#drawer", {
            y: [yStart, height],
        });

        setOpen(false);
    };

    return (
        <>
            {open && (
                <motion.div
                    ref={scope}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleClose}
                    className="fixed inset-0 z-50 bg-neutral-950/70 min-h-screen"
                >
                    <motion.div
                        id="drawer"
                        ref={drawerRef}
                        onClick={(e: React.MouseEvent) => e.stopPropagation()}
                        initial={{ y: "100%" }}
                        animate={{ y: "0%" }}
                        transition={{
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-0 h-[75vh] w-full overflow-hidden  bg-[#f51c20]"
                        style={{ y }}
                        drag="y"
                        dragControls={controls}
                        onDragEnd={() => {
                            if (y.get() >= 100) {
                                handleClose();
                            }
                        }}
                        dragListener={false}
                        dragConstraints={{
                            top: 0,
                            bottom: 0,
                        }}
                        dragElastic={{
                            top: 0,
                            bottom: 0.5,
                        }}
                    >
                        <div className="absolute left-0 right-0 top-0 z-10 flex justify-center p-4">
                            <button
                                onPointerDown={(e: React.PointerEvent) => {
                                    controls.start(e);
                                }}
                                className="h-2 w-14 cursor-grab touch-none rounded-full bg-black active:cursor-grabbing"
                            ></button>
                        </div>
                        <div className="relative z-0 h-full overflow-hidden p-4 pt-12">
                            {children}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
};
