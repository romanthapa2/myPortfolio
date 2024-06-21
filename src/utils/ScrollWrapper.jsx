

import { motion } from "framer-motion";

function ScrollWrapper({ children }) {
	return (
		<motion.div
			initial={{ opacity: 0.0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{
				delay: 0.1,
				duration: 0.3,
				ease: "easeInOut",
			}}
		>
			{children}
		</motion.div>
	);
}

export default ScrollWrapper;
