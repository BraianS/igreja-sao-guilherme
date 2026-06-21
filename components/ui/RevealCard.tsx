import { useRef } from "react";
import { Foto } from "../interface/Interface";
import { useInView,motion } from "framer-motion";


export default function RevealCard({src,alt}: Foto){
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true, margin:"-50px"})

    return (
        <motion.div
        ref={ref}
        initial={{opacity:0, y:50}}
        animate={isInView ? {opacity: 1, y: 0}: {}} 
        transition={{duration: 0.6, ease: "easeOut"}}
        className="overflow-hidden rounded-lg shadow hover:Scale-105 transition-transform"
        >
        <img 
        src={src}
        alt={alt}
        className="object-cover w-full h-64"
        />
            
        </motion.div>
    )
}