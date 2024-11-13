"use client";

import React, { useCallback, useRef } from "react";
import Spline from "@splinetool/react-spline";

const SplineRubicCube = () => {
    const splineRef = useRef<any | null>(null);

    const onLoad = useCallback((splineApp: any) => {
        if (splineApp) {
            splineRef.current = splineApp;
            // Set initial zoom (adjust the value as needed)
            splineApp.setZoom(0.5);
        }
    }, []);

    return (
        <Spline
            onLoad={onLoad}
            renderOnDemand={false}
            scene="https://prod.spline.design/arVU697zFAPOOU2l/scene.splinecode"
        />
    );
};



const SplineRoboticArm = () => {
    const splineRef = useRef<any | null>(null);
    const onLoad = useCallback((splineApp: any) => {
        if (splineApp) {
            splineRef.current = splineApp;
            splineApp.setZoom(2.5);
        }
    }, []);

    return (
        <Spline
            onLoad={onLoad}
            renderOnDemand={false}
            scene="https://prod.spline.design/qIqt0nGJ0pMYpwub/scene.splinecode"
        />
    );
};

export { SplineRubicCube, SplineRoboticArm };