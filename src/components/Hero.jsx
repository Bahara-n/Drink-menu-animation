import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

// gsap.registerPlugin(SplitText);

const Hero = () => {
    const videoRef = useRef();
    //const videoTimelineRef = useRef();

    //mobile
    const isMobile = useMediaQuery({maxWidth: 767});

    useGSAP(() => {
        const heroSplit = SplitText.create('.title', { type: 'chars,words' });
        const taglineSplit = SplitText.create('.hero-tagline', { type: 'lines' });
        const viewCocktailsSplit = SplitText.create('.view-cocktails-text', { type: 'lines' });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));

        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.05,
        });

        gsap.from([...taglineSplit.lines, ...viewCocktailsSplit.lines], {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });

        const leafTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        })
        .to('.right-leaf', { y: 200}, 0)
        .to('.left-leaf', { y: -200}, 0);

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ? '120% top' : 'bottom top';

        const videoTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
            },
        });

        const video = videoRef.current;
        const onLoadedMetadata = () => {
            videoTimeline.to(video, {
                currentTime: video.duration,
            });
        };

        if (video) {
            video.onloadedmetadata = onLoadedMetadata;
        }

        return () => {
            heroSplit.revert();
            taglineSplit.revert();
            viewCocktailsSplit.revert();
            leafTimeline.scrollTrigger?.kill();
            videoTimeline.scrollTrigger?.kill();
            if (video) {
                video.onloadedmetadata = null;
            }
        };
    }, [isMobile]);
    
    return (
        <>
        <section id="hero" className="noisy">
            <h1 className="title">MOJITO</h1>

            <img src="/images/hero-left-leaf.png"
            alt="left-leaf"
            className="left-leaf"
            />

            <img src="/images/hero-right-leaf.png"
            alt="right-leaf"
            className="right-leaf"
            />
            

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Kjølig. Frisk. Klassisk.</p>
                        <p className="hero-tagline">
                            Sip the spirit <br /> of Summer
                        </p>
                    </div>

                    <div className="view-cocktails">
                        <p className="view-cocktails-text">
                            Hver cocktail på menyen vår er en blanding av førsteklasses ingredienser,
                            og tidløse oppskrifter <br/>– designet for å glede sansene dine.
                        </p>
                        <a href="#cocktails">Utforsk cocktails</a>
                    </div>
                </div>
            </div>

        </section>
        <div className="video absolute inset-0">
            <video
            ref={videoRef}
            src="videos/output.mp4"
            muted
            playsInline
            preload="auto"
            />

        </div>
        </>
    )
}

export default Hero;