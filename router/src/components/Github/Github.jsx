import React, { use } from 'react'
import { data } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom'; 


function Github() {
  const data = useLoaderData();

//     const [data, setData] = useState([]);
//     useEffect(() => {
//   fetch("https://api.github.com/users/rohanprasad065")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       setData(data);   // ✅ inside
//     });
// }, []);
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
     Github followers: {data.followers}
     <img  src={data.avatar_url} alt="Avatar" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch("https://api.github.com/users/rohanprasad065");
    const data = await res.json();
    return data;
}