import React from 'react';
const Page = ({ params }: { params: { id: string }}) => {

  const { id } = params;
  return (
    <div>
      <h1>Users Details page : {id}</h1>
      
    </div>
  );
};

export default Page;
