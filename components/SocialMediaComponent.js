import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function SocialMediaComponent({
  link,
  icon,
  color = "#fff",
  ...props
}) {
  return (
    <>
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.8 }}
        whileTap={{
          scale: 0.8,
          borderRadius: "100%",
        }}
        {...props}
      >
        <FontAwesomeIcon icon={icon} style={{ color, width: "25px" }} />
      </motion.a>
    </>
  );
}
