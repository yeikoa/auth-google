'use client'
import Link from "next/link"
import {signIn, useSession, signOut  } from "next-auth/react";

function Navbar() {

  const {data: session} = useSession()
  console.log(session)

  return (
    <nav className="bg-slate-900 flex items-center py-3 justify-between px-24 text-slate-200"> 
        <Link href="/">
            <h1 >Google login</h1>
        </Link>
        {session ?.user?(
           <div className="flex gap-x-2 items-center">
           <Link href="../dashboard">
               Home page
           </Link>
           <p>{session.user.name}{session.user.email}</p>
           <img src={session.user.image} alt=""
           className="w-10 h-10 rounded-full cursor-pointer"
           />
          <button 
            onClick={() => {
              signOut()}}
          >
            
            Sign Out
          </button>
           
       </div>
        ):(
          <button onClick={() => signIn()} className="bg-sky-400 px-3 py-2 rounded">
            Sign In
           </button>
        )}  
       
        
    </nav>
  )
}

export default Navbar