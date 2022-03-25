import {generateMedia} from "styled-media-query";
export const cardContents = [
   {
   	title:"Brand Recognition",
   	text:`
   	Boost your brand recognition with each click. Generic links don’t 
      mean a thing. Branded links help instil confidence in your content.`,
      slug:"icon-brand-recognition"
   },
   {
   	title:"Brand Recognition",
   	text:`
   	Boost your brand recognition with each click. Generic links don’t 
      mean a thing. Branded links help instil confidence in your content.`,
      slug:"icon-brand-recognition"
   },
   {
   	title:"Brand Recognition",
   	text:`
   	Boost your brand recognition with each click. Generic links don’t 
      mean a thing. Branded links help instil confidence in your content.`,
      slug:"icon-brand-recognition"
   }
];

export const mediaQry = generateMedia({
   "laptop-large":"80em",
   "laptop-small":"64em",
   "tablet":"50em",
   "tablet-small":"43.75em",
   "phone":"31.25em"
});