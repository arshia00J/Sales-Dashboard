"use client";
import Image, { ImageProps } from "next/image";

export default function SmartImage(props: ImageProps) {
  const { src, ...rest } = props;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const fixedSrc =
    typeof src === "string" && !src.startsWith("http")
      ? `${basePath}${src}`
      : src;

  return <Image src={fixedSrc} {...rest} />;
}
