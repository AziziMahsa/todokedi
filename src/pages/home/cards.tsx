import Image from "next/image";
const cardsDetails = [
  {
    imgSrc: "/images/Time-PNG-HD.png",
    title: "Never miss a beat",
    desc: "Keep deadlines by reminders",
  },
  {
    imgSrc: "/images/calendar-image-png-33.png",
    title: "Plane and manage your day",
    desc: "Start your morning with a clean slate",
  },
  {
    imgSrc: "/images/morning-mails.webp",
    title: "With you every where",
    desc: "Accessible across all of your devices",
  },
  {
    imgSrc: "/images/organize.png",
    title: "Keep organized",
    desc: "Categorize your mind into catrgories",
  },
  {
    imgSrc: "/images/neverforget.png",
    title: "Never forget a thing",
    desc: "Quickly add your tasks, notes,expenses",
  },
  {
    imgSrc: "/images/findfast.png",
    title: "Find everything, fast",
    desc: "Quickly search through your items with on tap",
  },
];
function Cards() {
  return (
    <div className="grid grid-cols-3 items-center ">
       {cardsDetails.map((detail, index)=>{
        return(
          <div className="flex flex-col gap-2  justify-center items-center h-fit w-fit p-5" key={index}>
          <Image className="h-28 w-28" src={detail.imgSrc} alt="Picture" width={50} height={50} />
          <span className="text-sm font-semibold">{detail.title}</span>
          <span className="text-xs text-gray-400  ">{detail.desc}</span>
        </div>
        )
      })}
    </div>  
  );
}

export default Cards;
