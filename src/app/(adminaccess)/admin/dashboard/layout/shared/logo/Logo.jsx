import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";
var LinkStyled = styled(Link)(function () { return ({
    height: "60px",
    width: "60px",
    overflow: "hidden",
    display: "block",
}); });
var Logo = function () {
    return (<LinkStyled href="/">
      <Image src="/fitlogo3-removebg-preview.png" alt="logo" height={40} width={105} priority/>
    </LinkStyled>);
};
export default Logo;
