import { HiOutlineEmojiHappy } from "react-icons/hi";
import { MdOutlineSentimentNeutral } from "react-icons/md";
import {
  FaFire,
  FaRegAngry,
  FaRegSadCry,
  FaRegSadTear,
  FaRegSurprise,
  FaRegTired,
  FaSkull,
} from "react-icons/fa";
import { TbMoodSurprised } from "react-icons/tb";
import {
  BiCloudLightning,
  BiHappyBeaming,
  BiHappyHeartEyes,
  BiHeart,
} from "react-icons/bi";
import { BsCloudDrizzle, BsCloudLightningRain } from "react-icons/bs";
import { IoSparklesSharp } from "react-icons/io5";
import { FaFaceMeh, FaFaceMehBlank, FaFaceRollingEyes } from "react-icons/fa6";

export const emotionIcons = {
  neutral: [
    <HiOutlineEmojiHappy color="grey" />,
    <MdOutlineSentimentNeutral color="grey" />,
    <IoSparklesSharp color="#f1d42fff" />,
  ],
  surprise: [
    <FaRegSurprise color="#fa9507ff" />,
    <TbMoodSurprised color="#efa237ff" />,
    <BiCloudLightning color="#fa9507ff" />,
  ],
  sadness: [
    <FaRegSadCry color="#0b8ad3ff" />,
    <FaRegSadTear color="#1977adff" />,
    <BsCloudDrizzle color="#51baf8ff" />,
    <BsCloudLightningRain color="#46b3f3ff" />,
  ],
  joy: [
    <BiHappyBeaming color="#db0f45ff" />,
    <BiHappyHeartEyes color="#FF9BB5" />,
    <IoSparklesSharp color="#f1d42fff" />,
    <BiHeart color="#d65174ff" />,
  ],
  disgust: [
    <FaFaceMeh color="#90b690ff" />,
    <FaFaceMehBlank color="#57af57ff" />,
    <FaFaceRollingEyes color="#1a6e1aff" />,
  ],
  anger: [<FaRegAngry color="#FF9999" />, "💢", <FaFire color="#fa5c5cff" />],
  fear: [
    <FaRegTired color="#B19CD9" />,
    <FaSkull color="#B19CD9" />,
    "⚡",
    <IoSparklesSharp color="#f1d42fff" />,
  ],
};