import React, { useId } from 'react'


const Home = () => {

  let id = useId();

  console.log( "Deger" + id);

  return (
    <section>
        Ana Safa
        <h1> Id :  {id} </h1>
    </section>
  )
}

export default Home;