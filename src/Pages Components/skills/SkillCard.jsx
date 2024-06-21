import React, { useEffect,useState } from 'react'
import ScrollWrapper from '../../utils/ScrollWrapper'
import { FastAverageColor } from "fast-average-color";

const SkillCard = ({name,logo}) => {
const [color, setBgColor] = useState("#fff");
useEffect(()=>{
    const fac=new FastAverageColor();
    fac.getColorAsync(logo).then(color=>{
        const rgba = color.rgb.split(")");
				setBgColor(rgba[0] + ",0.25)");
    })
    .catch((e) => {
        console.log("Error getting average color", e);
        setBgColor("#ffffff");
    });
    return () => {
        fac.destroy();
    };
},[logo])


  return (
    <ScrollWrapper>
        <div className='flex flex-col items-center justify-center gap-2'>
            <div 
            title={name}
            style={{ backgroundColor: color }}
            className={`dark:bg-grey-800 flex h-20 w-20 items-center justify-center rounded-full md:size-24`}
            >
                <img
						alt="skill"
						width={80}
						height={80}
						className={`size-12 object-contain md:size-14  border-none bg-none`}
						src={logo}
					/>
            </div>
            <p className="text-sm md:text-base">{name}</p>
        </div>
    </ScrollWrapper>
  )
}

export default SkillCard
