import React from 'react'
import CardLayout from '../Common/CardLayout'

const Exp_Card = ( props ) => {
    const data = props.data
    const textColor = props.theme === "dark" ? "text-Snow" : "text-Black";
    const bgColor = props.theme === "dark" ? "bg-LightGray/10" : "bg-Green";
 
    return (
        <CardLayout>
            <div className={`${bgColor} card_stylings transition px-8 py-10 opacity-70  `}>
                <div className={`flex-initial text-[17px] ${textColor} font-medium`}>{data.title}</div>
                <div className={`text-sm ${textColor} font-normal italic mt-1 `}>
                    {data.role}
                </div>
                <div className={`${textColor} text-xs opacity-50 font-normal italic`}>
                    <a href={`${data.url}`} target="_blank" rel="noreferrer">
                        {data.url}
                    </a>
                </div>
                <div className={`${textColor} text-sm font-normal mt-4 text-justify`}>
                    {data.desc}
                </div>
                <div className={`flex justify-between ${textColor} ${bgColor}k w-full h-auto text-xs rounded-full py-3 px-6 mt-4 font-normal opacity-50 `}>
                    <div>{data.year}</div> <div>{data.location}</div>
                </div>
            </div>
        </CardLayout>
    )
}

export default Exp_Card