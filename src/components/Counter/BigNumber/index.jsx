import React from 'react';

const BigNumber = ({data}) => {
  const test = data;
  React.useEffect(
    () => {
      console.log(`%c The actual count is: ${test}`, "font-weight: bolder; color: orange;");
      return () => {
        console.log("Unmounting component!");
      }
    },
    [data]
  );

  return <p>The actual count is: {data}</p>
};

export default BigNumber;