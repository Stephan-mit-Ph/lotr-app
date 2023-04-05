
import { StyledHeroSection } from "../../src/components/styles/HeroSection.styled";
import { introduction, volumes } from "../../src/lib/data";
import Link from "next/link";


export default function Volumes () {
    return(
        <>
         <StyledHeroSection>
            <h1>Lord of the Rings</h1>
            <p>{introduction}</p>
         </StyledHeroSection>
            <StyledHeroSection>
            <h2>All Volumes</h2>
            <ul>
            {volumes.map((volume) => (
            <li key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </li>
                ))}
            </ul>
            </StyledHeroSection>
        </>
    );
}