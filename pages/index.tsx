import { Button, Htag, P, Rating, Tag } from "../components";
import React, { useState } from "react";
import { withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <main>
        <Htag tag='h2'>Stefffaaaa</Htag>
        <Button appearance='ghost' arrow='right'>dfsdfsdfsdfds</Button>
        <P size="l">Lorem ipsum dolor sit amet consectetur.</P>
        <Tag> Little </Tag>
        <Tag size="m" color="red"> Biggest and red </Tag>
        <Rating rating={rating} isEditable setRating={setRating} />
      </main>
    </>
  );
}

export default withLayout(Home);
