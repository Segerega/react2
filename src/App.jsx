import './App.css'
import splitStringUsingRegex from './utils/splitStringUsingRegex.tsx';
import {motion} from 'framer-motion'

const heading = "Elegant Text reveal";
const text =
    "🌐✨ Transform your web content using Framer Motion's UTF-16 powered text animations. Each character, a vibrant performer, dances dynamically, weaving a captivating narrative. Elevate user engagement with the art of animated storytelling. 🚀🎉 #WebDev #Animation";

function App() {
    const headerCharacters = splitStringUsingRegex(heading)
    const textCharacters = splitStringUsingRegex(text)
    const charVariants = {
        hidden: {opacity: 0},
        reveal: {opacity: 1}
    }
    console.log(headerCharacters)
    return (
        <>
            <motion.h1 initial="hidden" whileInView="reveal"
                       transition={{staggerChildren: 0.2}}>{headerCharacters.map(((char, index) => (
                <motion.span key={index} transition={{duration: .1}} variants={charVariants}>{char}</motion.span>
            )))}</motion.h1>
            <motion.p initial="hidden" whileInView="reveal"
                      transition={{staggerChildren: 0.05}}>{textCharacters.map(((char, index) => (
                <motion.span key={index} transition={{duration: .35}} variants={charVariants}>{char}</motion.span>
            )))}</motion.p>
        </>
    )
}

export default App
