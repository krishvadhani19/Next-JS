import React from "react";

const Dummy = () => {
  return (
    <>
      <style jsx global>
        {`
          .dummy {
            background-color: yellow;
          }
        `}
      </style>
      <div className="dummy">This is Dummy</div>
    </>
  );
};

export default Dummy;
