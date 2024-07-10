"use client"

import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import WordMark from "@/components/WordMark";
import ButtonLink from "@/components/ButtonLink";

import Link from "next/link";

type NavbarProps = {
    settings: Content.SettingsDocument
}

export default function Navbar({settings} : NavbarProps) {
  return (
    <nav className="p-4 md:px-6 md-:py-6" aria-label="Main">
        <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
            <Link href="/">
            <WordMark />
            <span className="sr-only">Glisten.ai home page</span>
            </Link>
                <ul className="flex gap-6">
                    {settings.data.navigation.map((item) => {

                        if(item.cta_button){
                            return(
                                <ButtonLink key={item.label} field={item.link}>
                                  {item.label}  
                                </ButtonLink>
                            )
                        }
                        return(
                        <li key={item.label}>
                            <PrismicNextLink field={item.link} className="inline-flex min-h-11 items-center">{item.label}</PrismicNextLink>
                        </li>
                    )})}
                </ul>
        </div>
    </nav>
  )
}
