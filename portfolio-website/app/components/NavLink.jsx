import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const NavLink = ({ href, title, isActive, index = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);

    const linkVariants = {
        rest: {
            scale: 1,
            backgroundColor: "rgba(0, 0, 0, 0)",
        },
        hover: {
            scale: 1.05,
            backgroundColor: "rgba(234, 179, 8, 0.1)",
        },
        active: {
            scale: 1.02,
            backgroundColor: "rgba(234, 179, 8, 0.2)",
        }
    };

    const textVariants = {
        rest: {
            backgroundImage: isActive
                ? "linear-gradient(135deg, #fbbf24, #f59e0b, #eab308)"
                : "linear-gradient(135deg, #9ca3af, #6b7280, #9ca3af)",
            color: "transparent"
        },
        hover: {
            backgroundImage: "linear-gradient(135deg, #fbbf24, #f59e0b, #eab308)",
            color: "transparent"
        }
    };

    const underlineVariants = {
        rest: { width: 0, opacity: 0 },
        hover: { width: "55%", opacity: 1 },
        active: { width: "50%", opacity: 1 }
    };

    const glowVariants = {
        rest: { opacity: 0, scale: 0.8 },
        hover: { opacity: 0.4, scale: 1.2 },
        active: { opacity: 0.8, scale: 1 }
    };

    return (
        <motion.div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* bg glow */}
            <motion.div
                variants={glowVariants}
                animate={isActive ? "active" : isHovered ? "hover" : "rest"}
                className="absolute inset-0 bg-yellow-500 rounded-xl blur-sm -z-10"
                transition={{ duration: 0.3 }}
            />

            <motion.a
                href={href}
                variants={linkVariants}
                animate={isActive ? "active" : isHovered ? "hover" : "rest"}
                className="relative block px-6 py-3 rounded-xl border border-transparent hover:border-yellow-500/30 transition-all duration-300 group"
                style={{
                    boxShadow: isActive
                        ? "0 0 20px rgba(234, 179, 8, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                        : isHovered
                            ? "0 0 15px rgba(234, 179, 8, 0.2)"
                            : "none"
                }}
            >
                {/* texts */}
                <motion.span
                    variants={textVariants}
                    animate={isActive ? "hover" : isHovered ? "hover" : "rest"}
                    className="relative text-sm font-bold bg-clip-text"
                    style={{
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        fontSize: "1rem"
                    }}
                >
                    {title}
                </motion.span>

                {/* Underline animation */}
                <motion.div
                    variants={underlineVariants}
                    animate={isActive ? "active" : isHovered ? "hover" : "rest"}
                    className="absolute bottom-1 left-6 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-600"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />

                {/* Side indicator for active state */}
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 w-1 h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full"
                    />
                )}

                {/* Hover particles effect */}
                {isHovered && (
                    <>
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    scale: [0, 1, 0],
                                    x: Math.random() * 40 - 20,
                                    y: Math.random() * 40 - 20
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                                className="absolute top-1/2 left-1/2 w-1 h-1 bg-yellow-400 rounded-full pointer-events-none"
                            />
                        ))}
                    </>
                )}
            </motion.a>
        </motion.div>
    );
};

export default NavLink;