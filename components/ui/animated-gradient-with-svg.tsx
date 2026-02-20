"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useDimensions } from "@/components/hooks/use-debounced-dimensions";

interface AnimatedGradientProps {
    colors: string[];
    speed?: number;
    blur?: "light" | "medium" | "heavy";
}

interface CircleConfig {
    top: number;
    left: number;
    tx1: number;
    ty1: number;
    tx2: number;
    ty2: number;
    tx3: number;
    ty3: number;
    tx4: number;
    ty4: number;
    sizeMultiplier: number;
}

const generateCircleConfig = (): CircleConfig => ({
    top: Math.random() * 50,
    left: Math.random() * 50,
    tx1: Math.random() - 0.5,
    ty1: Math.random() - 0.5,
    tx2: Math.random() - 0.5,
    ty2: Math.random() - 0.5,
    tx3: Math.random() - 0.5,
    ty3: Math.random() - 0.5,
    tx4: Math.random() - 0.5,
    ty4: Math.random() - 0.5,
    sizeMultiplier: 0.5 + Math.random(),
});

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
    colors,
    speed = 5,
    blur = "light",
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const dimensions = useDimensions(containerRef);
    const [mounted, setMounted] = useState(false);
    const [configs, setConfigs] = useState<CircleConfig[]>([]);

    useEffect(() => {
        setConfigs(colors.map(() => generateCircleConfig()));
        setMounted(true);
    }, [colors]);

    const circleSize = useMemo(
        () => Math.max(dimensions.width, dimensions.height),
        [dimensions.width, dimensions.height]
    );

    const blurClass =
        blur === "light"
            ? "blur-2xl"
            : blur === "medium"
                ? "blur-3xl"
                : "blur-[100px]";

    if (!mounted) {
        return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />;
    }

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden">
            <div className={cn(`absolute inset-0`, blurClass)}>
                {colors.map((color, index) => {
                    const cfg = configs[index];
                    if (!cfg) return null;
                    return (
                        <svg
                            key={index}
                            className="absolute animate-background-gradient"
                            style={
                                {
                                    top: `${cfg.top}%`,
                                    left: `${cfg.left}%`,
                                    "--background-gradient-speed": `${1 / speed}s`,
                                    "--tx-1": cfg.tx1,
                                    "--ty-1": cfg.ty1,
                                    "--tx-2": cfg.tx2,
                                    "--ty-2": cfg.ty2,
                                    "--tx-3": cfg.tx3,
                                    "--ty-3": cfg.ty3,
                                    "--tx-4": cfg.tx4,
                                    "--ty-4": cfg.ty4,
                                } as React.CSSProperties
                            }
                            width={circleSize * cfg.sizeMultiplier}
                            height={circleSize * cfg.sizeMultiplier}
                            viewBox="0 0 100 100"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="50"
                                fill={color}
                                className="opacity-30 dark:opacity-[0.15]"
                            />
                        </svg>
                    );
                })}
            </div>
        </div>
    );
};

export { AnimatedGradient };
