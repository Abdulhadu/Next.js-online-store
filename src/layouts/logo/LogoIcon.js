import React from "react";
import { Link } from "@mui/material";
import Image from "next/image";

const LogoIcon = () => {
  return (
    <Link href="/">
     <Image src="/Logo.png" height={70} width={220} />
    </Link>
  );
};

export default LogoIcon;
