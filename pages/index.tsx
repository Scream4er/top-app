import { Button, Htag, P, Rating, Tag } from "../components";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <main>
        <Htag tag='h2'>Stefffaaaa</Htag>
        <Button appearance='ghost' arrow='right'>dfsdfsdfsdfds</Button>
        <P size="l">Lorem ipsum dolor sit amet consectetur.</P>
        <Tag> Little </Tag>
        <Tag size="m" color="red"> Biggest and red </Tag>
        <Rating rating={2} />
      </main>
    </>
  );
}
