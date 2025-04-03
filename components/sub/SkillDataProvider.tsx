'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

interface Props {
    src: string,
    width: number,
    height: number,
    index: number
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const ref = useRef(null)
    const inView = useInView(ref, {
        triggerOnce: true,
        margin: "0px 0px -200px 0px"
    })
    
    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    
    const animationDelay = 0.1
    
    return (
        <motion.div
          ref={ref}
          initial="hidden"
          variants={imageVariants}
          animate={inView ? "visible" : "hidden"}
          custom={index}
          transition={{ delay: index * animationDelay }}
          className="flex items-center justify-center p-2"
        >
            <Image
              src={src}
              width={width}
              height={height}
              alt='skill image'
            />
        </motion.div>
    )
}

export default SkillDataProvider