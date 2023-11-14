import { styled } from "styled-components";
import { motion } from "framer-motion";

export const Div = styled(motion.div)`
  z-index: 1;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

export const Title = styled(motion.h1)`
  color: #000;
  z-index: 1;
  transition: all 1s cubic-bezier(0.165, 0.84, 0.44, 1);
  font-size: 20em;
  white-space: nowrap;
`;
