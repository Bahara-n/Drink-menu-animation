import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../../constants"
import { SplitText } from "gsap/all";
import gsap from "gsap";

const Contact = () => {
    useGSAP (() => {
        const titleSplit = SplitText.create('#kontakt h2', { type: 'words'});

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#kontakt',
                start: 'top center',
            },
            ease: 'power1.inOut'
        })

        timeline
        .from(titleSplit.words, {
            opacity: 0, yPercent: 100, stagger: 0.02
        })

        .from('#kontakt h3, #kontakt p', {
            opacity: 0, yPercent: 100, stagger: 0.02
        })

        .to('#f-right-leaf', { 
            y: '-50', duration: 1, ease: 'power1.inOut'
        })

        .to('#f-left-leaf', { 
            y: '-50', duration: 1, ease: 'power1.inOut'
        }, '<')
    })

    return (
        <footer id="kontakt">
            <img src="/images/footer-left-leaf.png" alt="" id="f-left-leaf" />
            <img src="/images/footer-right-leaf.png" alt="" id="f-right-leaf" />

            <div className="content">
                <h2>Where to find us</h2>

                <div>
                    <h3>Besøk baren</h3>
                    <p>Valkyriegata 13A, 0366 Oslo, Norge</p>
                </div>

                <div>
                    <h3>Kontakt oss</h3>
                    <p>476 75 157</p>
                </div>

                <div>
                    <h3>Åpent hver dag</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>{time.day} : {time.time}

                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>

                    <div className="flex-center gap-5">
                        {socials.map((socials)=> (
                            <a
                             key={socials.name} 
                            href={socials.url}
                            target= "_blank"
                            rel="noopener noreferrer"
                            aria-label={socials.name}

                            >

                               
                                <img src={socials.icon}/>
                            </a>
                        ))}

                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Contact 