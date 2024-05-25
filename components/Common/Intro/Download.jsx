import Link from 'next/link';
const Download = ( props ) => {
  const theme = props.theme;
  const textColor = theme === "dark" ? "text-Snow" : "text-DeepNightBlack";
  

  return (
    <>
      <Link href='/Resume2024.pdf' target='_blank' className={`flex flex-row ${textColor} items-center gap-x-4 md:pb-14 pt-4 pb-[200px]`}>
        <span className={`${textColor}`}>Download Resume</span>
        <span>{props.icon}</span>
      </Link>
      {/* <div className='spacer-sm'></div> */}
    </>
  );
}

export default Download;
