import Link from 'next/link';
const Download = ( props ) => {
  const theme = props.theme;
  const textColor = theme === "dark" ? "text-Snow" : "text-DeepNightBlack";
  

  return (
    <>
      <Link href='/Resume2024.pdf' target='_blank' className={`flex flex-row ${textColor} items-center gap-x-4 pb-14 pt-4`}>
        <span className={`${textColor}`}>Download Resume</span>
        <span>{props.icon}</span>
      </Link>
    </>
  );
};

export default Download;
