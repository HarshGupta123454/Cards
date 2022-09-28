import { BsFacebook } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

import {useEffect} from "react"
import {useSpring , animated, config} from "react-spring"
import { useState } from "react"


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const Card = ({ img, name, desc, social, role }) => {
    
    const [prop , set]=useSpring(()=>({xys:[0,0,1], config:config.default}))
    return (
        <animated.div
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{
            transform: prop.xys.interpolate(trans)
        }}
         className="flex flex-col gap-3 py-3 h-416 items-center bg-[#FDAE38] rounded-xl max-w-[350px] m-5 ">
            <div className="flex flex-col">

                <img src={img} alt="" className="rounded-[50%]" />
                <h2 className="font-bold">{name}</h2>
            </div>
            <p className="h-[135px] mt-2 px-2">{desc}</p>
            <div className="flex flex-col gap-3">
                <p >{role}</p>
                <div className="flex text-xl justify-between">
                    <a href={social.fb}>
                        <BsFacebook />
                    </a>
                    <a href={social.insta}>
                        <BsInstagram />
                    </a>
                    <a href={social.tw}>
                        <BsTwitter />
                    </a>
                </div>
            </div>
        </animated.div>
    )
}