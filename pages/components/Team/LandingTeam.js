import React from 'react'

const LandingTeam = () => {
    return (
        <section className="team pl-32">
            <h2 className="team__title">Our Team</h2>
            <div className="team__advisor mt-8 flex gap-8 items-center justify-center">
                {/* <!-- advisor image --> */}
                <div className="team__advisor__left flex flex-col text-center gap-4">
                    <img
                        className="team__advisor__image rounded-[50%] h-[250px] w-[250px] object-contain"
                        src="https://media-exp1.licdn.com/dms/image/C5103AQFQn9wGcms4Xg/profile-displayphoto-shrink_200_200/0/1583492013056?e=2147483647&v=beta&t=rMVebFMdsExUFLoY2iSVeqcOPuDqIg-fdW4N9YMt9d4"
                        alt="Our advisor"

                    />
                    <div className="team__advisor__description">
                        <h4 className="team__advisor__name text-gray-800 font-bold text-md">Dinesh Chhantyal</h4>
                        <p className="team__advisor__title text-gray-700">Advisor</p>
                    </div>
                </div>
                <p className="team__advisor__right">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quod
                    fugit, quidem inventore molestiae beatae. Pariatur mollitia quae, quas
                    cum similique dignissimos enim explicabo maxime nulla quidem animi
                    atque labore?
                </p>
            </div>
            <div className="team__member"></div>
        </section>)
}

export default LandingTeam