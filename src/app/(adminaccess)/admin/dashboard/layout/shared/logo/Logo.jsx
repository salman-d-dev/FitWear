import Link from "next/link";
import { styled } from "@mui/material";
import Image from "next/image";
var LinkStyled = styled(Link)(function () { return ({
    height: "40px",
    width: "180px",
    overflow: "hidden",
    display: "block",
}); });
var Logo = function () {
    return (<LinkStyled href="/">
      <Image src="/images/logos/logo-dark.svg" alt="logo" height={40} width={105} priority/>
    </LinkStyled>);
};
export default Logo;
