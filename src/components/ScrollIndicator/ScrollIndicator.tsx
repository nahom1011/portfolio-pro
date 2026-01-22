import React, { useEffect, useRef } from 'react';
import './ScrollIndicator.css';
import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders";

const ScrollIndicator: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // The library creates a canvas and appends it.
        // We need to make sure we don't create multiple on re-renders.
        const container = containerRef.current;

        // Clear previous content if any (though strict mode might double invoke, clean up is better)
        // ShaderMount doesn't seem to have a clear "destroy" method documented in the snippet, 
        // but we can remove the canvas it adds.

        try {
            new ShaderMount(
                container,
                liquidMetalFragmentShader,
                {
                    u_repetition: 1.5,
                    u_softness: 0.5,
                    u_shiftRed: 0.3,
                    u_shiftBlue: 0.3,
                    u_distortion: 0,
                    u_contour: 0,
                    u_angle: 100,
                    u_scale: 1.5,
                    u_shape: 1,
                    u_offsetX: 0.1,
                    u_offsetY: -0.1
                },
                undefined,
                0.6
            );
        } catch (e) {
            console.error("Failed to mount shader", e);
        }

        return () => {
            // Cleanup: remove the canvas if the library doesn't handle it
            // Assuming ShaderMount appends a canvas to the container
            if (container.firstChild) {
                // container.innerHTML = ''; // Brute force cleanup
            }
        };

    }, []);

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="scroll-indicator-container">
            <div id="liquid-metal" ref={containerRef} onClick={scrollToContent}>
                <div className="outline">
                    <svg className="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M843.968 896a51.072 51.072 0 0 1-51.968-52.032V232H180.032A51.072 51.072 0 0 1 128 180.032c0-29.44 22.528-52.032 52.032-52.032h663.936c29.44 0 52.032 22.528 52.032 52.032v663.936c0 29.44-22.528 52.032-52.032 52.032z">
                        </path>
                        <path d="M180.032 896a49.92 49.92 0 0 1-36.48-15.616c-20.736-20.8-20.736-53.76 0-72.832L807.616 143.616c20.864-20.8 53.76-20.8 72.832 0 20.8 20.8 20.8 53.76 0 72.768L216.384 880.384a47.232 47.232 0 0 1-36.352 15.616z">
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ScrollIndicator;
