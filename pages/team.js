import React from 'react'
import {teamsData} from '../components/data/TeamsData';

function Team() {
    const teams = teamsData.map((team) => {
        return{
            id: team.id,
            name: team.name,
            image: team.image,
            linkedin: team.linkedinLink,
        }
    })
  return (
    <>
        <div className='flex flex-col justify-center items-center'>
        <button className = "font-extrabold w-50 text-transparent text-8xl bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-white my-20 hover:from-blue-100 hover:to-green-500">
            Our Team</button>
        </div>
            <div className="p-10 grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 text-center max-w-6xl relative mx-auto">

            {teams.map((team) => {
            return(
            <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-xl relative hover:bottom-2 bg-gradient-to-r from-indigo-400 via-cyan-400 to-white my-5 hover:from-cyan-600 hover:to-blue-300 hover:text-white">
            <img className="w-full" src={team.image} alt="Profile Image"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{team.name}</div>
                    <p className="text-black text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className='pb-2 my-2'>
                <a href={team.linkedin}>
                    <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Know More</button>
                </a>
                </div>
            </div>
        )})};
</div>
        
   </>
  )
}

export default Team