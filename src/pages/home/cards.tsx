import Image from "next/image";
const cardsDetails = [
  {
    imgSrc: "/images/Time-PNG-HD.png",
    text1: "Never miss a beat",
    text2: "Keep deadlines by reminders",
  },
  {
    imgSrc: "/images/calender-image-png-33.png",
    text1: "Plane and manage your day",
    text2: "Start your morning with a clean slate",
  },
  {
    imgSrc: "/images/morning-mails.webp",
    text1: "With you every where",
    text2: "Accessible across all of your devices",
  },
  {
    imgSrc: "/images/organize.png",
    text1: "Keep organized",
    text2: "Categorize your mind into catrgories",
  },
  {
    imgSrc: "/images/neverforget.png",
    text1: "Never forget a thing",
    text2: "Quickly add your tasks, notes,expenses",
  },
  {
    imgSrc: "/images/findfast.png",
    text1: "Find everything, fast",
    text2: "Quickly search through ",
  },
];
function Cards() {
  return (
    <div className=" flex flex-col gap-2  h-fit w-fit p-5">
      <Image src="/images/photoone.png" alt="Picture" width={50} height={50} />
    </div>
  );
}

export default Cards;
