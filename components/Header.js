import styled,{css} from "styled-components";
import Button from "./Button";
import {mediaQry} from "../utils/utils";
import {motion} from "framer-motion";

const HeaderWrapper = styled.header`
    padding:20rem;
    height:auto;
    display:flex;
    flex-direction:column;
    background:no-repeat url("/images/people working.svg");
    background-position: center;
    @media only screen and (min-width:1500px){
        height:auto;
    }
    > *:first-child {
    	margin-bottom:10rem;
    	 ${mediaQry.lessThan("phone")`
           margin-bottom: 20rem;
       `}
    }
    margin-bottom:10rem;
    ${mediaQry.lessThan("tablet")`
        padding: 22rem;
        height:auto;
        background-position:center;
    `}
    ${mediaQry.lessThan("tablet-small")`
        background-position:center;
        background-size:30%;
        padding: 10rem;
        height:auto;
    `}
     ${mediaQry.lessThan("phone")`
        background-position:center;
        background-size:30%;
        padding:10rem;
        height: auto;
    `}
`;
const NavWrapper = styled.nav`
     display:flex;
     justify-content:space-between;
     align-items:center;
     height:100%;
     padding: 2rem;
`;
const NavLeft = styled.div`
      display:flex;
      padding:4rem 10rem;
      align-items:center;
      > *:not(last-child) {
      	margin-right:3rem;
      }
      ul {
      	display:flex;
      	list-style:none;
      	li {
      		:not(last-child){
      			margin-right:1.5rem;
      		}
      	}
      	${mediaQry.lessThan("tablet-small")`
      	    display:none;
      	`}
      }
`;

const HeroWrapper = styled(motion.div)`
      display:flex;
      padding:1rem;
      flex-direction:column;
      ${mediaQry.lessThan("phone")`
         align-items:center;
         text-align:center;
         a {
         	align-self:center;
         }
      `}
      h1 {  
        text-align: center; 
      	font-size:8rem;
      	font-weight:700;
      	line-height:1.1;
      	color:var(--color-tertiary);
      	${mediaQry.lessThan("tablet-small")`
      	    font-size:4rem;
      	`}
      }
`;
const fixing = css`
    display:inline-block;
    width:30px;
    height:4px;
    border-radius:5px;
    background-color:var(--color-text);
`;
const MobileNav = styled.div`
    position:relative;
    ${fixing}
    ::after,::before {
    	${fixing}
    	content:"";
      position:absolute;
      left:0;
    }
    ::after {
      top:1rem;
    }
    ::before {
      top:-1rem;
    }
    display:none;
    ${mediaQry.lessThan("tablet-small")`
       display:inline-block;
    `}
`;
const container = {
    hidden:{
        
    },
    show:{
        opacity:1,
        transition:{
            staggerChildren:0.5
        }
    }
};
const items = {
    hidden:{
        opacity:0,
        y:"10%"
    },
    show:{
        opacity:1,
        y:"0%",
        transition:{
            duration:.4,
            ease:"easeIn"
        }
    }
};

const Header = () => {
	return (
		<>
			<NavWrapper>
				<NavLeft>
					<img src="/images/logo.svg" alt="This is LOGO"/>
					<ul>
						<li>
						      <Button name="Features"/>
						</li>
						<li>
							<Button name="Resources"/>
						</li>
						<li>
							<Button name="Pricing"/>
						</li>
					</ul>
				</NavLeft>
				<MobileNav>
				  &nbsp;
				</MobileNav>
			</NavWrapper>
			<HeroWrapper
               variants={container}
               initial="hidden"
               animate="show"
            >
				<motion.h1
                   variants={items}
                >
                    MORE THAN JUST<br/>SHORTER LINKS
                </motion.h1>
			</HeroWrapper>

		<HeaderWrapper/>
	</>
    )
}

export default Header;