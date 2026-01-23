import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Check } from 'lucide-react';
import './DynamicIsland.css';

interface DynamicIslandProps {
    isVisible: boolean;
    onComplete?: () => void;
}

const DynamicIsland: React.FC<DynamicIslandProps> = ({ isVisible, onComplete }) => {
    const [status, setStatus] = useState<'idle' | 'expanding' | 'complete'>('idle');

    useEffect(() => {
        if (isVisible) {
            setStatus('expanding');
            // Transition to complete/checkmark state after expansion
            const timer1 = setTimeout(() => {
                setStatus('complete');
            }, 800); // Wait for initial expansion

            // Close after showing completion
            const timer2 = setTimeout(() => {
                if (onComplete) onComplete();
                setStatus('idle');
            }, 3500); // Total duration

            return () => {
                clearTimeout(timer1);
                clearTimeout(timer2);
            };
        }
    }, [isVisible, onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="dynamic-island-container">
                    <motion.div
                        className="dynamic-island"
                        initial={{
                            width: 0,
                            height: 0,
                            opacity: 0,
                            top: 0
                        }}
                        animate={{
                            width: status === 'complete' ? 220 : 40,
                            height: 40,
                            opacity: 1,
                            top: 20
                        }}
                        exit={{
                            width: 0,
                            height: 0,
                            opacity: 0,
                            top: 0,
                            transition: { duration: 0.5, ease: "easeInOut" }
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                            mass: 0.8
                        }}
                    >
                        <div className="island-content">
                            <AnimatePresence mode="wait">
                                {status === 'expanding' && (
                                    <motion.div
                                        key="downloading"
                                        initial={{ opacity: 0, scale: 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.5 }}
                                        className="island-icon"
                                    >
                                        <Download size={20} color="white" />
                                    </motion.div>
                                )}
                                {status === 'complete' && (
                                    <motion.div
                                        key="complete"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="island-success"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
                                        >
                                            <Check size={18} className="text-green-400" />
                                        </motion.div>
                                        <span className="island-text">CV Downloaded</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DynamicIsland;
