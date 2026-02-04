import { createContext, useState } from "react"



import gojo from "./Img/gojo_comicsense.webp";
import gojo1 from "./Img/gojo1_comicsense.webp";
import gojo2 from "./Img/gojo2_comicsense.webp";

import tanjiro from "./Img/nichirin_tapetsry.webp";
import tanjiro1 from "./Img/nichirin1_tapetsry.webp";
import tanjiro2 from "./Img/nichirin2_tapestry.webp";

import gotei from "./Img/gotei_tapetsry.webp";
import gotei1 from "./Img/gotei1_tapetsry.webp";
import gotei2 from "./Img/gotei2_tapetsry.webp";

import solo from "./Img/sololevling_tapestry.webp";
import solo1 from "./Img/sololevling1_tapestry.webp";
import solo2 from "./Img/sololevling2-tapestry.webp";

import gojot from "./Img/gojo_tapestry.webp";
import gojot1 from "./Img/gojo1_tapestry.webp";
import gojot2 from "./Img/gojo2_tapestry.webp";

import itachi from "./Img/iatchi_tapestry.webp";
import itachi1 from "./Img/iatchi1_tapestry.webp";
import itachi2 from "./Img/iatchi2_tapestry.webp";

import mixmanga from "./Img/mixmangapanel_tapestry.jpg";
import mixmanga1 from "./Img/mixmangapanel1_tapestry.webp";
import mixmanga2 from "./Img/mixmangapanel2_tapestry.webp";

import sukuna from "./Img/sukuna_tapestry.webp";
import sukuna1 from "./Img/sukuna1_tapestry.webp";
import sukuna2 from "./Img/sukuna2-tapestry.webp";

import vagabond from "./Img/vagabond_tapestry.webp";
import vagabond1 from "./Img/vagabond1_tapestry.webp";
import vagabond2 from "./Img/vagabond2_tapestry.jpg";

import screw from "./Img/screw.webp";



import tokyo from "./Img/tokyomanji_ww.webp";
import tokyo1 from "./Img/tokyomanji1_ww.webp";
import tokyo2 from "./Img/tokyomanji2_ww.jpg";

import jjk from "./Img/jjk_ww.webp";
import jjk1 from "./Img/jjk1_ww.webp";
import jjk2 from "./Img/jjk2_ww.webp";

import dandadan from "./Img/dandadan_ww.webp";
import dandadan1 from "./Img/dandadan1_ww.webp";
import dandadan2 from "./Img/dandadan2_ww.webp";

import division from "./Img/division11_ww.webp";
import division1 from "./Img/division111_ww.webp";
import division2 from "./Img/division112_ww.webp";

import nakama from "./Img/nakama_ww.webp";
import nakama1 from "./Img/nakama1_ww.webp";
import nakama2 from "./Img/nakama2_ww.webp";

import walhalla from "./Img/walhalla_ww.webp";
import walhalla1 from "./Img/walhalla1_ww.jpg";
import walhalla2 from "./Img/walhalla2_ww.jpg";

import origin from "./Img/origin_ww.webp";
import origin1 from "./Img/origin1_ww.webp";
import origin2 from "./Img/origin2_ww.jpg";

import starboy from "./Img/starboy_ww.webp";
import starboy1 from "./Img/starboy1_ww.jpg";
import starboy2 from "./Img/starboy2_ww.jpg";

import yuta from "./Img/yuta_ww.webp";
import yuta1 from "./Img/yuta1_ww.webp";
import yuta2 from "./Img/yuta2_ww.webp";

import trafalgar from "./Img/trafalgar_ww.webp";
import trafalgar1 from "./Img/trafalgar1_ww.webp";
import trafalgar2 from "./Img/trafalgar2_ww.jpg";


export const DataContext = createContext();

export default function Common(props) {


  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]); // add item to cart
  };

  const removeFromCart = (itemName) => {
    setCart(cart.filter(item => item.name !== itemName)); // remove by name
  };

  
    const animeName = [
  {
    name: "Limitless Tapestry",
    desc: "Its a greatest anime. Attack on Titan (AOT) is a Japanese manga and anime series created by Hajime Isayama. Set in a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans, the story follows Eren Yeager, along with his friends Mikasa Ackerman and Armin Arlert, as they join the military to fight against these monstrous beings. What begins as a tale of survival soon evolves into a complex narrative exploring freedom, morality, betrayal, and the cycle of hatred. With its intense action, deep character development, and shocking plot twists, Attack on Titan has become one of the most influential and widely acclaimed anime series worldwide.",
    img: gojo,
    hoverImg: gojo1,
    img1: gojo2,
    img2: screw,
    mc: "EREN YEAGER is the main character of this anime.",
    season: "It has 89 Episodes",
  },
  {
    name: "Nichirin Warrior Tapestry",
    desc: "Its a greatest piece of fiction. Bleach is a Japanese manga and anime series created by Tite Kubo. It follows the story of Ichigo Kurosaki, a teenager who gains the powers of a Soul Reaper—a guardian tasked with protecting the living world from evil spirits known as Hollows and guiding souls to the afterlife. With his newfound abilities, Ichigo is drawn into battles against powerful enemies, uncovering secrets about the Soul Society, his own heritage, and the balance between worlds. Known for its unique characters, stylish battles, and imaginative world-building, Bleach became one of the most popular shonen anime of its era and remains a fan favorite even after its conclusion.",
    img: tanjiro,
    hoverImg: tanjiro1,
    img1: tanjiro2,
    img2: screw,
    mc: "ICHIGO KUROSAKI is the main character of this anime.",
    season: "It has 392 Episodes",
  },
  {
    name: "13 Blades Tapestry",
    desc: "Its not just a anime its a life changing anime. Naruto is a Japanese manga and anime series created by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a spirited young ninja who dreams of becoming the strongest leader of his village, the Hokage, despite being shunned for having the Nine-Tails Fox spirit sealed inside him. Alongside friends like Sasuke Uchiha and Sakura Haruno, Naruto faces intense battles, personal struggles, and challenges that test his determination. The series explores themes of friendship, perseverance, and overcoming loneliness, making it one of the most beloved and influential anime worldwide.",
    img: gotei,
    hoverImg: gotei1,
    img1: gotei2,
    img2: screw,
    mc: "NARUTO UZUMAKI is the main character of this anime.",
    season: "It has 720 Episodes",
  },
  {
    name: "Statue Of God Tapestry",
    desc: "It has a great animation. Demon Slayer: Kimetsu no Yaiba is a Japanese manga and anime series by Koyoharu Gotouge. It follows Tanjiro Kamado, a kind-hearted boy whose family is slaughtered by demons, with his sister Nezuko being turned into one herself. Determined to find a cure for Nezuko and avenge his family, Tanjiro joins the Demon Slayer Corps, an organization dedicated to hunting demons and protecting humanity. Alongside his allies Zenitsu and Inosuke, Tanjiro faces powerful enemies while uncovering the truth behind the demons and their leader, Muzan Kibutsuji. Praised for its breathtaking animation, emotional storytelling, and thrilling battles, Demon Slayer has become one of the most popular modern anime worldwide.",
    img: solo, 
    hoverImg: solo1,
    img1: solo2,
    img2: screw,
    mc: "TANJIRO KAMADO is the main character of this anime.",
    season: "It has 63 Episodes",
  },
  {
    name: "Honored One Tapestry",
    desc: "It has a great animation. Demon Slayer: Kimetsu no Yaiba is a Japanese manga and anime series by Koyoharu Gotouge. It follows Tanjiro Kamado, a kind-hearted boy whose family is slaughtered by demons, with his sister Nezuko being turned into one herself. Determined to find a cure for Nezuko and avenge his family, Tanjiro joins the Demon Slayer Corps, an organization dedicated to hunting demons and protecting humanity. Alongside his allies Zenitsu and Inosuke, Tanjiro faces powerful enemies while uncovering the truth behind the demons and their leader, Muzan Kibutsuji. Praised for its breathtaking animation, emotional storytelling, and thrilling battles, Demon Slayer has become one of the most popular modern anime worldwide.",
    img: gojot, 
    hoverImg: gojot1,
    img1: gojot2,
    img2: screw,
    mc: "TANJIRO KAMADO is the main character of this anime.",
    season: "It has 63 Episodes",
  },

  {
    name: "Genjutsu Tapestry",
    desc: "It has a great animation. Demon Slayer: Kimetsu no Yaiba is a Japanese manga and anime series by Koyoharu Gotouge. It follows Tanjiro Kamado, a kind-hearted boy whose family is slaughtered by demons, with his sister Nezuko being turned into one herself. Determined to find a cure for Nezuko and avenge his family, Tanjiro joins the Demon Slayer Corps, an organization dedicated to hunting demons and protecting humanity. Alongside his allies Zenitsu and Inosuke, Tanjiro faces powerful enemies while uncovering the truth behind the demons and their leader, Muzan Kibutsuji. Praised for its breathtaking animation, emotional storytelling, and thrilling battles, Demon Slayer has become one of the most popular modern anime worldwide.",
    img: itachi, 
    hoverImg: itachi1,
    img1: itachi2,
    img2: screw,
    mc: "TANJIRO KAMADO is the main character of this anime.",
    season: "It has 63 Episodes",
  },
  {
    name: "Manga Panal Tapestry",
    desc: "It has a great animation. Demon Slayer: Kimetsu no Yaiba is a Japanese manga and anime series by Koyoharu Gotouge. It follows Tanjiro Kamado, a kind-hearted boy whose family is slaughtered by demons, with his sister Nezuko being turned into one herself. Determined to find a cure for Nezuko and avenge his family, Tanjiro joins the Demon Slayer Corps, an organization dedicated to hunting demons and protecting humanity. Alongside his allies Zenitsu and Inosuke, Tanjiro faces powerful enemies while uncovering the truth behind the demons and their leader, Muzan Kibutsuji. Praised for its breathtaking animation, emotional storytelling, and thrilling battles, Demon Slayer has become one of the most popular modern anime worldwide.",
    img: mixmanga, 
    hoverImg: mixmanga1,
    img1: mixmanga2,
    img2: screw,
    mc: "TANJIRO KAMADO is the main character of this anime.",
    season: "It has 63 Episodes",
  },
  {
    name: "King Tapestry",
    desc: "It has a great animation. Demon Slayer: Kimetsu no Yaiba is a Japanese manga and anime series by Koyoharu Gotouge. It follows Tanjiro Kamado, a kind-hearted boy whose family is slaughtered by demons, with his sister Nezuko being turned into one herself. Determined to find a cure for Nezuko and avenge his family, Tanjiro joins the Demon Slayer Corps, an organization dedicated to hunting demons and protecting humanity. Alongside his allies Zenitsu and Inosuke, Tanjiro faces powerful enemies while uncovering the truth behind the demons and their leader, Muzan Kibutsuji. Praised for its breathtaking animation, emotional storytelling, and thrilling battles, Demon Slayer has become one of the most popular modern anime worldwide.",
    img: sukuna, 
    hoverImg: sukuna1,
    img1: sukuna2,
    img2: screw,
    mc: "TANJIRO KAMADO is the main character of this anime.",
    season: "It has 63 Episodes",
  },
  {
    name: "Invincible Tapestry",
    desc: "It has a great animation. Demon Slayer: Kimetsu no Yaiba is a Japanese manga and anime series by Koyoharu Gotouge. It follows Tanjiro Kamado, a kind-hearted boy whose family is slaughtered by demons, with his sister Nezuko being turned into one herself. Determined to find a cure for Nezuko and avenge his family, Tanjiro joins the Demon Slayer Corps, an organization dedicated to hunting demons and protecting humanity. Alongside his allies Zenitsu and Inosuke, Tanjiro faces powerful enemies while uncovering the truth behind the demons and their leader, Muzan Kibutsuji. Praised for its breathtaking animation, emotional storytelling, and thrilling battles, Demon Slayer has become one of the most popular modern anime worldwide.",
    img: vagabond, 
    hoverImg: vagabond1,
    img1: vagabond2,
    img2: screw,
    mc: "TANJIRO KAMADO is the main character of this anime.",
    season: "It has 63 Episodes",
  },
];

const animeName1 = [
  {
    name: "Tokyo Manji Bomber Jacket",
    img: tokyo,
    hoverImg: tokyo1,
    img1: tokyo2,
  },
  {
    name: "Origin Hoodie[Oversize Drop-Shoulder]",
    img: origin,
    hoverImg: origin1,
    img1: origin2,
  },
  {
    name: "Awkward Fellow[Oversize Drop-Shoulder]",
    img: dandadan,
    hoverImg: dandadan1,
    img1: dandadan2,
  },
  {
    name: "Yuta-Cursed Child Jacket",
    img: yuta,
    hoverImg: yuta1,
    img1: yuta2,
  },
  {
    name: "Trafalgar Law[New World] Hoodie",
    img: trafalgar,
    hoverImg: trafalgar1,
    img1: trafalgar2,
  },
  {
    name: "Nakama Hoodie[Oversize Drop-Shoulder]",
    img: nakama,
    hoverImg: nakama1,
    img1: nakama2,
  },
  {
    name: "Walhalla Jacket[Classic Edition]",
    img: walhalla,
    hoverImg: walhalla1,
    img1: walhalla2,
  },
  {
    name: "Jujutsu High Sorcerer Uniform",
    img: jjk,
    hoverImg: jjk1,
    img1: jjk2,
  },
  {
    name: "11th Division Captain [Oversize Drop-Shoulder]",
    img: division,
    hoverImg: division1,
    img1: division2,
  },
  {
    name: "Starboy[Oversize Drop-Shoulder]",
    img: starboy,
    hoverImg: starboy1,
    img1: starboy2,
  },
];

  
  return (
    
    <DataContext.Provider value={{animeName, animeName1, cart, addToCart, removeFromCart}}>
        {props.children}
    </DataContext.Provider>

)
}

