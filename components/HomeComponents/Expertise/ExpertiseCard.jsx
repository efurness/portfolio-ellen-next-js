import CardLayout from "../../Common/CardLayout"

const ExpertiseCard = ( props ) => {
    const data = props.data
    const textColor = props.theme === "dark" ? "text-Snow" : "text-Fuschia";
    const bgColor = props.theme === "dark" ? "bg-LightGray/10" : "bg-Green";
  
    return (
        <CardLayout>
            <div className={`${bgColor} h-full space-y-2 p-8 card_stylings`}>
                <div className={`${textColor}`}>{data.title}</div>
                <div className={`text-sm ${textColor} font-normal`}>
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    )
}

export default ExpertiseCard